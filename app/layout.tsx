import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Alexandre Goumain",
  description: "Portfolio créé par Alexandre Goumain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Analytics />
      <body className="dark">{children}</body>
    </html>
  );
}
