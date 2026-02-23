export default function TermsConditions() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Terms & Conditions
        </h1>
        <p className="text-gray-300 text-lg">
          Please read these terms carefully before using Aven Health.
        </p>
      </header>

      {/* Content */}
      <div className="bg-cardDark p-8 rounded-xl space-y-6 text-gray-300 leading-relaxed">
        <p>
          By accessing or using Aven Health, you agree to comply with these terms.
          Aven Health provides informational tools and access to healthcare resources
          but does not provide medical advice.
        </p>

        <h2 className="text-xl font-semibold text-accent">
          Platform Responsibility
        </h2>
        <p>
          Aven Health acts as a connector between users and health resources. Any
          decisions made using information from the platform remain the
          responsibility of the user.
        </p>

        <h2 className="text-xl font-semibold text-accent">
          User Conduct
        </h2>
        <p>
          Users must use Aven Health respectfully and lawfully. Abuse, misuse, or
          unauthorized access attempts are strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold text-accent">
          Updates
        </h2>
        <p>
          These terms may be updated as Aven Health evolves. Continued use implies
          acceptance of revised terms.
        </p>
      </div>

    </section>
  );
}
