import { NextResponse, URLPattern } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pattern = new URLPattern("/@:slug", req.url);
  const slug = pattern.exec(req.url)?.pathname?.groups?.slug;
  if (slug) {
    // Do rewrite/redirect here
    return NextResponse.redirect(new URL(`/@${slug}`, req.url));
  }
}