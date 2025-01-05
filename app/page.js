import { ToastContainer } from "react-toastify";
import BestSeller from "./_components/BestSeller";
import Hero from "./_components/Hero";
import LatestCollection from "./_components/LatestCollection";
import NewsletterBox from "./_components/NewsletterBox";
import OurPolicy from "./_components/OurPolicy";
import Navbar from "./_components/Navbar";
import SearchBar from "./_components/SearchBar";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}
