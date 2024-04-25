import Nav from "@components/Nav";
import Footer from "@components/Footer";

import "./globals.css";
import { Lora} from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fialta",
  description: "Convert Currencies & View Currency History",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.className} data-theme="winter">
      <head>
        <title>Fialta Currency Conversion & Data</title>
        <link rel="icon" href="/fialta-logo.svg" />
      </head>
      <body className="bg-[#F1F5F9]">
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
