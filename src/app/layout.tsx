import type { Metadata } from "next";
import { Geist, Anton, Oswald, Archivo, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivoCondensed = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveatScript = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "A Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa. Travel the untamed beauty.",
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
    canonical: '/',
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "A Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa.",
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
};

// JSON-LD structured data — TravelAgency schema
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${antonDisplay.variable} ${oswaldCondensed.variable} ${archivoCondensed.variable} ${caveatScript.variable} antialiased bg-[#F2EDE3] text-[#1A1A1A]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
