//next proxy use for private route work
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
//my code
const privateRouters = ["/private", "/secret", "/helloDashboard"];
export async function proxy(req) {
  //user token ta niye astechi and token ta amake object hisaabe dive
  const token = await getToken({ req });
  console.log("TOKEN", token);
  const reqPath = req.nextUrl.pathname;
  const isAuthenticated = Boolean(token);
  const isUser = token?.role === "user";
  const isPrivate = privateRouters.some((route) => reqPath.startsWith(route)); //console holo true
  console.log("hello", isAuthenticated, isUser, reqPath, isPrivate); //true

  if (!isAuthenticated && isPrivate) {
    const loginUrl = new URL("/api/auth/signin", req.url);

    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/private/:path*", "/dashboardere/:path*", "/secret/:path*"],
};
