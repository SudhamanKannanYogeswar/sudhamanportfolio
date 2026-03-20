import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "portfolio_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};

// In-memory rate limiter
const attempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

function getRateLimit(ip) {
  const now = Date.now();
  const entry = attempts.get(ip) || { count: 0, lockedUntil: 0 };
  if (entry.lockedUntil && now < entry.lockedUntil) {
    return { blocked: true, remaining: Math.ceil((entry.lockedUntil - now) / 60000) };
  }
  if (entry.lockedUntil && now >= entry.lockedUntil) {
    attempts.delete(ip);
  }
  return { blocked: false, count: entry.count };
}

function recordFailure(ip) {
  const entry = attempts.get(ip) || { count: 0, lockedUntil: 0 };
  entry.count += 1;
  if (entry.count >= MAX_ATTEMPTS) entry.lockedUntil = Date.now() + LOCKOUT_MS;
  attempts.set(ip, entry);
}

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  const limit = getRateLimit(ip);
  if (limit.blocked) {
    return Response.json(
      { error: `Too many failed attempts. Try again in ${limit.remaining} minute(s).` },
      { status: 429 }
    );
  }

  const { username, password } = await request.json();
  const validUser = process.env.ADMIN_USERNAME;
  const validPass = process.env.ADMIN_PASSWORD;

  if (!validUser || !validPass || !process.env.SESSION_SECRET) {
    return Response.json({ error: "Server misconfigured." }, { status: 500 });
  }

  // Support both plain-text and bcrypt hashed passwords
  const passwordMatch =
    validPass.startsWith("$2") 
      ? await bcrypt.compare(password, validPass)
      : password === validPass;

  if (username !== validUser || !passwordMatch) {
    recordFailure(ip);
    const entry = attempts.get(ip);
    const remaining = MAX_ATTEMPTS - (entry?.count || 0);
    return Response.json(
      { error: remaining > 0 ? `Invalid credentials. ${remaining} attempt(s) remaining.` : "Account locked for 15 minutes." },
      { status: 401 }
    );
  }

  attempts.delete(ip);

  const cookieStore = await cookies();
  const session = await getIronSession(cookieStore, sessionOptions);
  session.isLoggedIn = true;
  await session.save();

  return Response.json({ ok: true });
}
