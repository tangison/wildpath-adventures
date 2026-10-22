import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Analytics } from "@vercel/analytics/react";
import { SITE, SITE_URL } from "@/lib/site";

// Self-hosted variable fonts, TWO families only (brand + performance budget).
// Archivo variable (wdth 62-125) covers body, subhead, and condensed display.
// Fraunces variable covers serif italics and editorial accents.
const archivo = localFont({
  src: [
    { path: "../fonts/archivo-var.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/archivo-var-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-var.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/fraunces-var-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "A Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa. Slow down. Breathe. Discover Namibia.",
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: SITE_URL,
  },
  // Icons — served as static files from /public for reliability across
  // dev and production. The master 512x512 mark is at /favicon.png;
  // sized variants at /favicon-32.png, /favicon-16.png, /apple-touch-icon.png.
  // PWA icons at /android-chrome-192.png and /android-chrome-512.png.
  // src/app/icon.png and src/app/apple-icon.png also exist for Next.js
  // App Router file-convention auto-detection (served at /icon, /apple-icon).
  // Logo source: wildpath-logo-dark-theme.svg / wildpath-logo-light-theme.svg
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "A Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa.",
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: '/images/social/og-master.webp',
        width: 1731,
        height: 909,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
    images: ['/images/social/og-master.webp'],
  },
};

// JSON-LD structured data — TravelAgency schema with local business details
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE.name,
  description:
    "A Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa.",
  url: SITE_URL,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: ["Namibia", "Botswana", "Zimbabwe", "Zambia"],
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location.city,
    addressRegion: SITE.location.region,
    addressCountry: SITE.location.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.5609,
    longitude: 17.0658,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  slogan: SITE.tagline,
  priceRange: "$$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LCP preload — the hero video POSTER is the largest above-the-fold element */}
        <link
          rel="preload"
          as="image"
          href="/video/poster.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${archivo.variable} ${fraunces.variable} font-sans antialiased bg-[#F2EDE3] text-[#1A1A1A]`}
      >
        {/* Skip-to-content link — accessibility: keyboard users can bypass navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#C5511A] focus:text-[#F2EDE3] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:tracking-wider focus:uppercase focus:outline-none"
        >
          Skip to content
        </a>
        {children}
        <CookieConsent />
      <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
