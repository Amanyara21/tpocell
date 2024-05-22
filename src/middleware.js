import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  console.log(`Received token: ${token}`); 

  if (request.nextUrl.pathname === '/api/login') {
    return NextResponse.next(); 
  }

  if (!token) {
    if (request.nextUrl.pathname === '/login') {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url)); 
    }
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.TOKEN_SECRET)
    );

    const response = NextResponse.next();
    response.headers.set('x-user-id', payload.id);
    console.log(payload);

    return response;
  } catch (error) {
    console.error('Invalid JWT token:', error); 
    return NextResponse.redirect(new URL('/login', request.url)); 
  }
}

export const config = {
  matcher: ['/api/getuser'],
};
