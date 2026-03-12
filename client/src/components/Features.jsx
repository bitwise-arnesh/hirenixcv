import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="px-8 py-24 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <FeatureCard
          title="ATS Resume Analysis"
          description="Analyze your resume against Applicant Tracking Systems and improve your score."
        />

        <FeatureCard
          title="Resume Optimization"
          description="Get AI-powered suggestions to improve your resume for specific job roles."
        />

        <FeatureCard
          title="Interview Preparation"
          description="Practice interview questions and get feedback to boost your confidence."
        />

      </div>

    </section>
  );
}