import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher: "/editor"
}

export function middleware(request: NextRequest) {
	return NextResponse.next();
}
