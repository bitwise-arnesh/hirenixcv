import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResumeUpload from "../components/ResumeUpload";
import Features from "../components/Features";
import ATSPreview from "../components/ATSPreview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ResumeUpload />
      <Features />
      <ATSPreview />
    </div>
  );
}