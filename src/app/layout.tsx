import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eyeballs — Visibility agency",
  description: "Real Estate Growth, Automated.From first inquiry to closed deal — AI handles the work, you handle the clients..",
  openGraph: {
    title: "Eyeballs — Visibility agency",
    description: "Real Estate Growth, Automated.From first inquiry to closed deal — AI handles the work, you handle the clients..",
    siteName: "Eyeballs",
    images: [{ url: "https://www.eyeballs.co/images/social-default.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

