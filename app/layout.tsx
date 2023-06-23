"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { followUsLinks } from "./data/data";

export const metadata = {
  title: "The Foodie's Delight",
  description:
    "The Best Food in Town. Indulge your senses with our wide variety of dishes, all made with fresh, seasonal ingredients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer followUsLinks={followUsLinks} />{" "}
      </body>
    </html>
  );
}
