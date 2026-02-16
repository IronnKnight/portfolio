import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nikolastefanovic.com";

export const metadata: Metadata = {
  title: "Nikola Stefanovic — Senior Frontend Engineer",
  description:
    "Frontend Software Engineer with 7+ years of experience building scalable web applications for enterprise clients. Specialized in React, Next.js, and TypeScript.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Nikola Stefanovic — Senior Frontend Engineer",
    description:
      "Frontend Software Engineer with 7+ years of experience building scalable web applications for enterprise clients.",
    url: siteUrl,
    siteName: "Nikola Stefanovic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikola Stefanovic — Senior Frontend Engineer",
    description:
      "Frontend Software Engineer with 7+ years of experience building scalable web applications for enterprise clients.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
