import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elgin Public House — Elgin's Neighborhood Pub & Grill",
    template: "%s | Elgin Public House",
  },
  description:
    "Downtown Elgin tavern fare, serious drinks, private events upstairs, and a kitchen open 'til midnight every night.",
  keywords: [
    "Elgin Public House",
    "EPH",
    "Elgin restaurant",
    "Elgin pub",
    "burgers Elgin IL",
    "craft beer Elgin",
    "downtown Elgin dining",
    "best burgers Elgin",
    "Wagyu burger",
    "Quad burger",
  ],
  openGraph: {
    title: "Elgin Public House — Elgin's Neighborhood Pub & Grill",
    description:
      "Late-night tavern fare, serious drinks, and private events in downtown Elgin.",
    url: "https://elginpublichouse.com",
    siteName: "Elgin Public House",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elgin Public House",
    description:
      "Downtown Elgin tavern fare, serious drinks, and a kitchen open 'til midnight.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Elgin Public House",
  image:
    "https://img1.wsimg.com/isteam/ip/6f341580-09b3-43e5-a62d-23c9c012eba5/favicon/94b01448-ccf5-4369-b96a-f1361bef8d58/cde56a5a-d2ed-45ec-a226-c8403946eb65.JPEG/:/rs=w:1200,h:630,m",
  url: "https://elginpublichouse.com",
  telephone: "+1-847-468-8810",
  address: {
    "@type": "PostalAddress",
    streetAddress: "219 E Chicago St",
    addressLocality: "Elgin",
    addressRegion: "IL",
    postalCode: "60120",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.0372,
    longitude: -88.2818,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "11:00",
      closes: "01:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "02:00",
    },
  ],
  servesCuisine: ["American", "Pub Food", "Burgers"],
  priceRange: "$$",
  menu: "https://elginpublichouse.com/eph-menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
