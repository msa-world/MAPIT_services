import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/theme-context";

export const metadata: Metadata = {
  title: "MAPIT - Advanced Web GIS Solutions,Web GIS Development,Spatial Data Management and Cadastral Mapping Services",
  description: "This website is a comprehensive platform offering advanced Web GIS solutions, web GIS development, spatial data management, and cadastral mapping services to meet diverse geospatial needs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "MAPIT", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
