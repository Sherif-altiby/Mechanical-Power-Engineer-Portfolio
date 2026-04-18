import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";
import SmoothScroll from "@/components/Lenis";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Hadhoud",
  description:
    "I am a passionate Mechanical Power Engineer with experience in MEP systems, including HVAC, Firefighting, and Plumbing. Skilled in AutoCAD, Revit, and Navisworks, and always eager to learn and develop my engineering skills through real projects.",
  icons: {
    icon: "/offic.png?v=4", // Adding ?v=4 tricks the browser into downloading it again
    shortcut: "/hero.png?v=4",
    apple: "/hero.png?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        <SmoothScroll>
          {" "}
          <Navbar /> {children} <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
