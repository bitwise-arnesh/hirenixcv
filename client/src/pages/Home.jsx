import Hero from "../components/Hero"
import ResumeUpload from "../components/ResumeUpload"
import Features from "../components/Features"
import ATSPreview from "../components/ATSPreview"

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Hero />
      <ResumeUpload />
      <Features />
      <ATSPreview />
    </div>
  )
}

export default Home