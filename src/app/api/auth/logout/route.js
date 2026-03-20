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

export async function POST() {
  const cookieStore = await cookies();
  const session = await getIronSession(cookieStore, sessionOptions);
  session.destroy();
  return Response.json({ ok: true });
}
