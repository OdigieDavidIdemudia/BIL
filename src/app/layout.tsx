import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Brand Investment Limited Nigeria",
    default: "Brand Investment Limited Nigeria | Corporate Growth and Development",
  },
  description:
    "Brand Investment Limited Nigeria delivers sustainable growth through agro allied production, construction, automobile services, and textile marketing.",
  icons: {
    icon: "/images/logos/bil-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          playfair.variable,
          "min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}
