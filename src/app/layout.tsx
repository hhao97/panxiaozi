import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { StatusBarTheme } from "@/components/status-bar-theme";
import { OpenPanelComponent } from "@openpanel/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "盘小子 - 免费网盘资源搜索引擎 | 一站式网盘搜索平台",
  description:
    "盘小子为您提供免费的网盘资源搜索服务，支持夸克网盘、百度网盘、阿里云盘等主流网盘平台。快速精准搜索，一键直达，让您轻松找到需要的资源。安全无广告，简单好用。",
  keywords:
    "盘小子,网盘搜索,夸克网盘,百度网盘,阿里云盘,免费资源搜索,网盘资源下载,网盘搜索引擎,资源搜索",
  authors: [{ name: "盘小子" }],
  robots: "index, follow",
  metadataBase: new URL("https://pansousuo.cc"),
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "盘小子 - 免费网盘资源搜索引擎 | 一站式网盘搜索平台",
    description:
      "盘小子为您提供免费的网盘资源搜索服务，支持多个主流网盘平台。快速精准搜索，一键直达，让您轻松找到需要的资源。安全无广告，简单好用。",
    type: "website",
    locale: "zh_CN",
    siteName: "盘小子",
    url: "https://pansousuo.cc",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://pansousuo.cc",
    creator: "@towelong",
    title: "盘搜索 - 免费网盘资源搜索引擎 | 一站式网盘搜索平台",
    description:
      "盘小子为您提供免费的网盘资源搜索服务，支持多个主流网盘平台。快速精准搜索，一键直达，让您轻松找到需要的资源。安全无广告，简单好用。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="盘小子" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="盘小子" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/icons/icon-256x256.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="/icons/icon-384x384.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/icons/icon-512x512.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/icons/icon-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="/icons/icon-384x384.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icons/icon-512x512.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <StatusBarTheme />
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://umami.xiaozi.cc/script.js"
              data-website-id="3ee3abd4-dbdc-47aa-a0a0-f5defc29d76f"
              defer
            />
            <OpenPanelComponent
              clientId={process.env.OPEN_PANEL_CLIENT_ID as string}
              trackScreenViews={true}
              trackAttributes={true}
              trackOutgoingLinks={true}
            />
          </>
        )}
      </body>
    </html>
  );
}
