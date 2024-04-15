import Nav from "@components/Nav";
import Footer from "@components/Footer";

import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fialta",
  description: "Convert Currencies & View Currency History",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className} data-theme="winter">
      <head>
        <title>Fialta Currency Conversion & Data</title>
        <link rel="icon" href="/AI-fialta-logo.png" />
      </head>
      <body className="bg-slate-100">
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
