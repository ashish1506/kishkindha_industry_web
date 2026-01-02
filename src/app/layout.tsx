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
    default: "Kishkindha Foods | Premium B2B Food Supplies Across India",
    template: "%s | Kishkindha Foods",
  },
  description:
    "Bulk food supplies for businesses - flours, pulses, spices, dry fruits, rice. Quality products, competitive pricing, pan-India delivery. Request a quote today.",
  keywords: [
    "B2B food supplies",
    "bulk food supplier India",
    "wholesale food Delhi",
    "restaurant food supplier",
    "flour supplier",
    "pulses wholesale",
    "spices bulk",
    "dry fruits wholesale",
    "rice supplier India",
  ],
  authors: [{ name: "Kishkindha Foods" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kishkindhafoods.com",
    siteName: "Kishkindha Foods",
    title: "Kishkindha Foods | Premium B2B Food Supplies Across India",
    description:
      "Bulk food supplies for businesses - flours, pulses, spices, dry fruits, rice. Quality products, competitive pricing, pan-India delivery.",
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
