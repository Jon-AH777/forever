import { ToastContainer } from "react-toastify";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";
import SearchBar from "./_components/SearchBar";
export const metadata = {
  title: "Forever",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg-px[9vw]">
          <ToastContainer />
          <Navbar />
          <SearchBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
