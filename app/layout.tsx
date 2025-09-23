import type { Metadata } from "next";
import { DM_Sans,Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SearchCity from "@/components/search-city";
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "A simple weather application built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <div className="w-full mx-auto max-w-[1440px] h-full min-h-[1158px] px-[112px] pt-[48px] pb-[80px] bg-Neutral_900 ">
       <Navbar/>
       <SearchCity/>
        {children}
       </div>
      </body>
    </html>
  );
}
