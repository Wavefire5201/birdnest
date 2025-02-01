import type { Metadata } from "next";
import { Unna } from "next/font/google";
import "./globals.css";

const unna = Unna({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Birdnest",
  description: "Beijing National Stadium - The Bird's Nest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unna.className} antialiased`}>{children}</body>
    </html>
  );
}
