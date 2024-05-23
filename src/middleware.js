import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  try {
    const tokenCookie = request.cookies.get('token');
    const token = tokenCookie ? tokenCookie.value : null;

    console.log(`Received token: ${token}`);

    if (request.nextUrl.pathname === '/api/login' || request.nextUrl.pathname === '/login') {
      return NextResponse.next();
    }

    if (!token) {
      console.log('Token not found, redirecting to login.');
      // return NextResponse.redirect(new URL('/login', request.url));
    }

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.TOKEN_SECRET)
    );

    const response = NextResponse.next();
    response.headers.set('x-user-id', payload.id);
    console.log('Token verified successfully, user ID:', payload.id);

    return response;
  } catch (error) {
    console.error('Invalid JWT token:', error);
    // return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/api/placements'],
};

