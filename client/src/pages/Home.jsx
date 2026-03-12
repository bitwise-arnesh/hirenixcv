import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ATSPreview from "../components/ATSPreview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ATSPreview />
    </div>
  );
}