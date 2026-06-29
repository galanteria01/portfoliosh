import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shoury Sharma — AI Engineer",
  description:
    "Shoury Sharma, AI Engineer. Building intelligent systems, dev tools, and the occasional Figma for system design.",
  metadataBase: new URL("https://shourysharma.dev"),
  openGraph: {
    title: "Shoury Sharma — AI Engineer",
    description:
      "AI Engineer building intelligent systems and dev tools.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
