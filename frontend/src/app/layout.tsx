import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";


const poppins = Poppins({
  weight: ["400", "700", "300", "200"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProFesh",
  description: "Say it professionally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
