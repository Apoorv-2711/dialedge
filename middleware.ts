import { auth } from '@/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnCMS = req.nextUrl.pathname.startsWith('/cms');
  const isOnLogin = req.nextUrl.pathname === '/cms/login';
  const isOnAPI = req.nextUrl.pathname.startsWith('/api/cms');

  // Protect CMS pages
  if (isOnCMS && !isOnLogin && !isLoggedIn) {
    return Response.redirect(new URL('/cms/login', req.nextUrl));
  }

  // Protect CMS API routes
  if (isOnAPI && !isLoggedIn) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Redirect logged-in users away from login page
  if (isOnLogin && isLoggedIn) {
    return Response.redirect(new URL('/cms', req.nextUrl));
  }
});

export const config = {
  matcher: ['/cms/:path*', '/api/cms/:path*'],
}; 