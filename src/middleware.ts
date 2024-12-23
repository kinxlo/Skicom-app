import { NextResponse } from "next/server";

import { getSession } from "./lib/session";

export async function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Define paths that do not require authentication
  const publicPaths = ["/admin/login", "/admin/register"];
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Attempt to get the session
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL("/admin/login", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to admin routes only
};

export default function a() {
  return null;
}
