import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Positivus - Landing Page",
  description: "Description",
  icons: {
    icon: {
      url: "https://i.ibb.co/d4vhzVrf/Vector-5.png"
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}><body className={spaceGrotesk.className}>{children}</body></html>
  );
}