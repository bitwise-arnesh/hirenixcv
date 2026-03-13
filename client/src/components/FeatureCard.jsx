export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center">
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  );
}