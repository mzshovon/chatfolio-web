import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Lora } from "next/font/google";
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
    "Chatfolio turns your CV into an AI that talks like you — so recruiters get real answers about your work, instantly, any hour.",
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
      "Chatfolio turns your CV into an AI that talks like you — so recruiters get real answers about your work, instantly, any hour.",
    siteName: "Chatfolio",
    images: [{ url: "/Logo.svg", width: 1774, height: 887, alt: "Chatfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatfolio — Your portfolio, answering recruiters while you sleep",
    description:
      "Chatfolio turns your CV into an AI that talks like you — so recruiters get real answers about your work, instantly, any hour.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
