import type { Metadata } from "next";
import { Geist, Anton, Oswald, Archivo, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE, SITE_EMAIL, SITE_URL } from "@/lib/site";

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
    "Expeditions through Namibia and Southern Africa. Red sand. Ancient rock. Raw horizons. Travel the untamed beauty.",
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
    "expeditions",
    "African travel",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Expeditions through Namibia and Southern Africa. Travel the untamed beauty.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${antonDisplay.variable} ${oswaldCondensed.variable} ${archivoCondensed.variable} ${caveatScript.variable} antialiased bg-[#F2EDE3] text-[#1A1A1A]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
