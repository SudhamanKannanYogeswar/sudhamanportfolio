import { getIronSession } from "iron-session";

export const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "portfolio_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};

export function getSession(req, res) {
  return getIronSession(req, res, sessionOptions);
}
