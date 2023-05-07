import Nav from "@components/Nav";
import "./globals.css";
import Footer from "@components/Footer";

export const metadata = {
  title: "Fialta",
  description: "Convert Currencies & View Currency History",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="aqua">
      <body className="">
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
