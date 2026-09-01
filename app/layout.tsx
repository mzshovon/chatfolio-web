import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Lora } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const siteUrl = "https://chatfolio.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chatfolio — Your portfolio, answering recruiters while you sleep",
    template: "%s | Chatfolio",
  },
  description:
    "Turn your CV into an AI portfolio that answers recruiter questions about your experience, skills, projects, and availability — even when you're offline.",
  keywords: [
    "chatfolio",
    "AI portfolio",
    "recruiter chatbot",
    "candidate profile AI",
    "job search AI",
    "CV chatbot",
  ],
  authors: [{ name: "Chatfolio" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Chatfolio — Your portfolio, answering recruiters while you sleep",
    description:
      "Turn your CV into an AI portfolio that answers recruiter questions about your experience, skills, projects, and availability — even when you're offline.",
    siteName: "Chatfolio",
    images: [{ url: "/Logo.svg", width: 1774, height: 887, alt: "Chatfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatfolio — Your portfolio, answering recruiters while you sleep",
    description:
      "Turn your CV into an AI portfolio that answers recruiter questions about your experience, skills, projects, and availability — even when you're offline.",
    images: ["/Logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/chatfolio-icon.png",
    apple: "/chatfolio-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c8862e",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Reading a request header opts this layout out of static rendering,
  // which is required for CSP nonces: proxy.ts stamps a fresh nonce on
  // every request, so the page must render per-request too or the nonce
  // in the response header will never match a statically cached HTML body.
  await headers();

  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
