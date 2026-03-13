import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "ATS Resume Analysis",
    desc: "Analyze your resume against Applicant Tracking Systems and improve your score."
  },
  {
    title: "Resume Optimization",
    desc: "Get AI-powered suggestions to improve your resume for specific job roles."
  },
  {
    title: "Job Description Matching",
    desc: "Compare your resume with job descriptions and see compatibility score."
  },
  {
    title: "Resume Q&A",
    desc: "Ask questions about your resume and get AI-powered answers."
  },
  {
    title: "Interview Preparation",
    desc: "Practice interview questions and receive feedback."
  }
];

function Features() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;