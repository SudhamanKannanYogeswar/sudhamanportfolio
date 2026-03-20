import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";

const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "portfolio_admin_session",
  cookieOptions: { secure: process.env.NODE_ENV === "production", httpOnly: true, sameSite: "lax" },
};

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    const res = NextResponse.next();
    const session = await getIronSession(request, res, sessionOptions);
    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
