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
    "Downtown Elgin's beloved neighborhood pub. Craft burgers including Wagyu & exotic Quad Burger, specialty martinis, 100+ craft beers, and kitchen open 'til midnight. Ranked #4 in Elgin on TripAdvisor.",
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
      "Craft burgers, specialty martinis, and community spirit in downtown Elgin. Kitchen open 'til midnight every night.",
    url: "https://elginpublichouse.com",
    siteName: "Elgin Public House",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elgin Public House",
    description:
      "Downtown Elgin's neighborhood pub. Craft burgers, 100+ beers, kitchen open 'til midnight.",
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
  image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "01:00",
  },
  servesCuisine: ["American", "Pub Food", "Burgers"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.3",
    reviewCount: "631",
    bestRating: "5",
  },
  menu: "https://elginpublichouse.com/menu",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
