import Hero from "../components/Hero"
import ResumeUpload from "../components/ResumeUpload"
import Features from "../components/Features"
import ATSPreview from "../components/ATSPreview"

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 text-gray-900 dark:text-white">

        <Hero />
        <ResumeUpload />
        <Features />
        <ATSPreview />

      </div>

    </div>
  );
}

export default Home;