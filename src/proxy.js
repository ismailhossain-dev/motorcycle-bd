import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoutes = ["/manage-bike", "/add-bike", "/secret"];
const adminRoutes = ["/dashboard"];
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req });
  // console.log("hello proxy");
  const reqPath = req.nextUrl.pathname;

  const isAuthenticated = Boolean(token);

  const isUser = token?.role === "user";

  const isAdmin = token?.role === "admin";

  const isManage = privateRoutes.some((route) => reqPath.startsWith(route));
  console.log({ isManage });
  const isAdminRoute = adminRoutes.some((route) => reqPath.startsWith(route));

  if (!isAuthenticated && isManage) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);
  }

  //logic for admin route
  if (isAuthenticated && !isAdmin && isAdminRoute) {
    return NextResponse.rewrite(new URL("/forbidden", req.url));
  }

  // console.log({ isAuthenticated, isUser, reqPath, isPrivate });

  //   return NextResponse.redirect(new URL("/home", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/manage-bike/:path*", "/add-bike/:path*", "/secret/:path*"],
};
