import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher: "/editor"
}

export function middleware(request: NextRequest) {
	request.headers.set('x-vercel-protection-bypass', process.env.SECRET_BYPASS);
	return NextResponse.rewrite('https://other-site.vercel.app/editor', {headers})
}
