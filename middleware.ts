import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export const config = {
	matcher: "/cookie" 
}

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
	response.cookies.set('test', 'it was set');
	response.cookies.set('another-test', 'it was set again');
	return response;
}
