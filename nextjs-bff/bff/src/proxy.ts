import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {cookies} from "next/headers";

export async function proxy(request: NextRequest) {
    console.log('Proxy==> ',request.url);
    let url = new URL(request.url);
    console.log('proxy url ',url.pathname);
    const cookieStore = await cookies();

    let token = cookieStore.get('auth_token');
    console.log('Token ');
    if(token)
    {
        return NextResponse.next();
    }
    else
    {
        console.log('this case');
        let redirectUrl = new URL('/authentication/login', request.url)
        await cookieStore.set("redirectUrl", url.pathname,{
            httpOnly:true,
        });
        return NextResponse.redirect(redirectUrl);
    }
}

export const config = {
    matcher: [
        '/',
        '/movies',
        '/movies/:path*',
        /*'/about'*/
    ],
}