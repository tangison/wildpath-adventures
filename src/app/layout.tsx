import type { Metadata } from "next";
import { Geist, Anton, Oswald } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ScrollToTop } from "@/components/wildpath-widgets";
import { SITE, SITE_URL } from "@/lib/site";

// Font policy: three families total.
//   Anton  — display headlines and the WILDPATH wordmark
//   Oswald — the ADVENTURES line of the wordmark (per approved logo spec)
//   Geist  — body text and subheads
// Editorial italic accents use the system serif stack (zero webfont bytes).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const antonDisplay = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswaldCondensed = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: "700",
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
  keywords: [
    "Namibia",
    "Kalahari",
    "Damaraland",
    "Sossusvlei",
    "Etosha",
    "Skeleton Coast",
    "Caprivi",
    "Victoria Falls",
    "Chobe",
    "safari",
    "self-drive",
    "African travel",
    "tour operator",
  ],
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: SITE_URL,
  },
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
    title: `${SITE.name} · ${SITE.tagline}`,
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
        alt: `${SITE.name} · ${SITE.tagline}`,
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
        {/* LCP preload — first frame of the homepage hero slider (AVIF, 960w
            covers the largest early viewport; the slider's later frames load lazily) */}
        <link
          rel="preload"
          as="image"
          href="/images/photos/landcruiser-dune-crest-960.avif"
          type="image/avif"
          imageSrcSet="/images/photos/landcruiser-dune-crest-640.avif 640w, /images/photos/landcruiser-dune-crest-960.avif 960w, /images/photos/landcruiser-dune-crest-1440.avif 1440w, /images/photos/landcruiser-dune-crest-1920.avif 1920w"
          imageSizes="100vw"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${antonDisplay.variable} ${oswaldCondensed.variable} antialiased bg-[#F2EDE3] text-[#1A1A1A]`}
      >
        {/* Skip-to-content link — accessibility: keyboard users can bypass navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#C5511A] focus:text-[#F2EDE3] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:tracking-wider focus:uppercase focus:outline-none"
        >
          Skip to content
        </a>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
