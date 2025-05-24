import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import {DATA} from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "NeuroGuard AI",
    "NeuroGuard",
    "NeuroGuard AI KZ",
    "NeuroGuard KZ",
    "NeuroGuard AI Казахстан",
    "NeuroGuard Казахстан",

    "neuroguard ai",
    "neuroguard",
    "neuroguard ai kz",
    "neuroguard kz",
    "neuroguard ai казахстан",
    "neuroguard казахстан",
  ],
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    site: DATA.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="NeuroGuard AI Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
