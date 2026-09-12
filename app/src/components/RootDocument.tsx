import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootDocument({
  children,
  language,
}: Readonly<{
  children: React.ReactNode;
  language: string;
}>) {
  return (
    <html lang={language} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              localStorage.removeItem('theme');
              document.documentElement.classList.toggle(
                'dark',
                window.matchMedia('(prefers-color-scheme: dark)').matches
              );
            } catch (_) {}
          `}
        </Script>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
