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
import Admin from "./components/Admin";



export const metadata = {
  title: " Book Your Ride Instantly with Entrex",
  description: "Book Your Ride Instantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Entrex</title>
        <meta name="description" content="Entrex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Entrex" />
        <meta property="og:description" content="Entrex" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://entrex.example.com" />
        <meta property="og:image" content="/og-image.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entrex" />
        <meta name="twitter:description" content="Entrex" />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body
        className={` antialiased`}
      >
        <Toaster position="top-right" reverseOrder={false} />
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
        {/* <Admin/> */}
        <Footer />
      </body>
    </html>
  );
}