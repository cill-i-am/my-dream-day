import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes';
import { SanityLive } from '@/sanity/lib/live';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Dream Day.ie - Wedding & Event Hire Décor",
  description:
    "We are passionate about planning and decorating your dream day. Specializing in Church Décor, Civil Ceremony Décor, and Venue décor.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <SanityLive />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
