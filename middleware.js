import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  //   console.log("hello......................");
  //   return NextResponse.json({ data: "hello" });
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  //   matcher: "/about",
  // guard access
  matcher: ["/about/:path*" /** "/tasks/:path*" */],
};
