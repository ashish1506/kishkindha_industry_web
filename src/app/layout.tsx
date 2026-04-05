import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Kishkindha Industry | B2B Institutional Supplies Across India",
    template: "%s | Kishkindha Industry",
  },
  description:
    "Institutional supplies for hospitals, hotels, universities & corporates - housekeeping, stationery, hygiene, facility maintenance. 190+ products, pan-India delivery.",
  keywords: [
    "institutional supplies India",
    "B2B housekeeping supplier",
    "bulk stationery supplier Delhi",
    "hospital supplies India",
    "cleaning chemicals wholesale",
    "office stationery bulk",
    "facility management supplies",
    "hygiene products supplier",
    "waste management supplies",
  ],
  authors: [{ name: "Kishkindha Industry" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kishkindhaindustry.com",
    siteName: "Kishkindha Industry",
    title: "Kishkindha Industry | B2B Institutional Supplies Across India",
    description:
      "190+ institutional supplies for hospitals, hotels, universities & corporates. Housekeeping, stationery, hygiene, facility maintenance. Pan-India delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
