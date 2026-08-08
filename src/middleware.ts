import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware — Security headers for every response.
 *
 * Implements industry-standard security headers:
 * - Content-Security-Policy: restricts resource origins (fonts, images, scripts)
 * - Strict-Transport-Security: enforces HTTPS for 2 years with subdomains
 * - X-Frame-Options: prevents clickjacking via iframe embedding
 * - X-Content-Type-Options: prevents MIME-type sniffing
 * - Referrer-Policy: limits referrer information sent to third parties
 * - Permissions-Policy: restricts browser features (camera, microphone, geolocation)
 * - X-DNS-Prefetch-Control: controls DNS prefetching
 *
 * Reference: https://securityheaders.com/
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Content Security Policy — allows Google Fonts, images from same origin,
  // and WhatsApp/sharer links. Production-hardened: no unsafe-inline/eval.
  const isDev = process.env.NODE_ENV === 'development';
  const scriptSrc = isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live"
    : "script-src 'self' https://vercel.live";
  const csp = [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // inline styles for Tailwind + framer-motion
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://wildpathnamibia.com",
    "connect-src 'self' https://wa.me",
    "frame-ancestors 'none'", // equivalent to X-Frame-Options: DENY
    "form-action 'self' https://wa.me", // allow form posts to self + WhatsApp
    "base-uri 'self'",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)');
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  return response;
}

// Apply to all routes except static assets (handled by Next.js automatically)
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, favicon.png, etc. (favicon files)
     * - public folder assets (images, webmanifest)
     */
    '/((?!_next/static|_next/image|favicon|android-chrome|apple-touch-icon|site\\.webmanifest|images|logo\\.svg).*)',
  ],
};
