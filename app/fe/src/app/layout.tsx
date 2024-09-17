import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "./provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const nanumSquareNeo = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareNeoTTF-bRg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-cBd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ChosunCentennial_ttf.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "JIUK KIM | Welcome to My Resume",
  description: "JIUK KIM | Welcome to My Resume",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/images/logo-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://ziweek.vercel.app/",
    title: "JIUK KIM | Welcome to My Resume",
    locale: "ko_KR",
    description: "JIUK KIM | Welcome to My Resume",
    images: [{ url: `https://ziweek.vercel.app/images/thumbnail.png` }],
    siteName: "ziweek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nanumSquareNeo.className}`}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="application-name" content="상장 공장" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="상장 공장" />
        <meta name="description" content="내 손으로 빚어낸 나만의 상장" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://award-factory.vercel.app/" />
        <meta name="twitter:title" content="상장 공장" />
        <meta
          name="twitter:description"
          content="내 손으로 빚어낸 나만의 상장"
        />
        <meta
          name="twitter:image"
          content={"https://award-factory.vercel.app/images/thumbnail.png"}
        />
        <meta name="twitter:creator" content="@ziweek" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="상장 공장" />
        <meta
          property="og:description"
          content="내 손으로 빚어낸 나만의 상장"
        />
        <meta property="og:site_name" content="상장 공장" />
        <meta property="og:url" content="https://award-factory.vercel.app/" />
        <meta
          property="og:image"
          content={"https://award-factory.vercel.app/images/thumbnail.png"}
        />
      </head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js
				?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
		`,
        }}
      />
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
      {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} /> */}
    </html>
  );
}
