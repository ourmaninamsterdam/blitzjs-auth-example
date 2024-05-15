import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest, res: NextResponse) {
  const response = await fetch(new URL("/api/auth", req.nextUrl.origin), {})
  const data = await response.json()
  console.log("ctx.session", data)
  NextResponse.next()
}
