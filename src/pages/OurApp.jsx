export default function OurApp() {
  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our App / What We Do</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What the app solves</h2>
        <p>
          Our app gives you an easy way to track your health metrics, monitor your habits, and understand your progress over time. Everything is designed to be simple, accurate, and stress-free.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Who it’s for</h2>
        <p>
          Anyone who wants to improve their daily health and wellbeing, whether you’re just starting your wellness journey or looking to maintain a healthy lifestyle.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Core benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Easy tracking of daily habits and health data</li>
          <li>Clear and actionable insights into your progress</li>
          <li>Privacy-first and secure technology to protect your data</li>
          <li>User-friendly design for stress-free use</li>
        </ul>
      </section>
    </div>
  );
}
