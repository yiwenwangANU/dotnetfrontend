import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith("/identity/account");
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/jobPostings/create") ||
    request.nextUrl.pathname.startsWith("/jobPostings/update");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(
      new URL("/identity/account/login", request.url)
    );
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/jobPostings/create",
    "/jobPostings/update/:path*",
    "/identity/account/:path*",
  ],
};
