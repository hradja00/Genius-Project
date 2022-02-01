import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export async function middleware(req) {
  //token exists if loged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  //allow request if token exists
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/account') {
    return NextResponse.redirect('/account');
  }
}
