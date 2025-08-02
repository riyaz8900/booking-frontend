import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Premium from "./components/Premium";
import NewsUpdates from "./components/NewsUpdates";
import Accerediation from "./components/Accerediation";
import Why from "./components/Why";
import Provision from "./components/Provision";
import Service from "./components/Service";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Tags from "./components/Tags";
import Client from "./components/Client";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Entrex",
  description: "Entrex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        {children}
        <Why />
        <Service />
        <Provision />
        <Premium />
        <Tags />
        <Client />
        <Accerediation />
        <Faq />
        <NewsUpdates />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
