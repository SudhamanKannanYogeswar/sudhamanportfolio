import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "portfolio_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};

export async function GET() {
  const cookieStore = await cookies();
  const session = await getIronSession(cookieStore, sessionOptions);
  if (!session.isLoggedIn) {
    return Response.json({ authenticated: false }, { status: 401 });
  }
  return Response.json({ authenticated: true });
}
