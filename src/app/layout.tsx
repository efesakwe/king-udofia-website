import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  PageTransitionOverlay,
  PageTransitionPresence,
} from "@/components/page-transition";
import { Preloader } from "@/components/preloader";
import { SkipLink } from "@/components/skip-link";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: "King Udofia — Composer, Arranger & Music Director",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${playfair.variable} ${inter.variable} bg-background font-sans text-foreground antialiased`}
      >
        <SkipLink />
        <SmoothScroll>
          <PageTransitionOverlay />
          <Navbar />
          <div id="main-content" tabIndex={-1} className="outline-none">
            <PageTransitionPresence>{children}</PageTransitionPresence>
          </div>
          <Footer />
        </SmoothScroll>
        <CustomCursor />
        <Preloader />
      </body>
    </html>
  );
}
