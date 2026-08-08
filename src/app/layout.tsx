import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eyeballs — Visibility agency",
  description: "We build websites that keep your business visible, relevant and impossible to overlook.",
  openGraph: {
    title: "Eyeballs — Visibility agency",
    description: "We build websites that keep your business visible, relevant and impossible to overlook.",
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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

