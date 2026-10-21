import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { RevealScript, ParallaxScript, ScrollTop, StickyCta } from "@/components/widgets";
import { Analytics } from "@vercel/analytics/react";
import { SITE, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const frauncesSerif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
  // dev and production. Master 512x512 mark at /favicon.png; sized variants
  // at /favicon-32.png, /favicon-16.png, /apple-touch-icon.png. PWA icons at
  // /android-chrome-192.png and /android-chrome-512.png.
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
        width: 1200,
        height: 630,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LCP preload — homepage hero poster is the primary above-the-fold image.
            The video itself loads lazily (preload="metadata"); the poster IS the LCP. */}
        <link
          rel="preload"
          as="image"
          href="/video/hero-poster.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${frauncesSerif.variable} antialiased bg-[#F2EDE3] text-[#1A1A1A]`}
      >
        {/* Skip-to-content link — accessibility: keyboard users can bypass navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#C5511A] focus:text-[#F2EDE3] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:tracking-wider focus:uppercase focus:outline-none"
        >
          Skip to content
        </a>
        {children}
        <RevealScript />
        <ParallaxScript />
        <ScrollTop />
        <StickyCta whatsappUrl={WHATSAPP_URL} />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
