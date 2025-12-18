export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="text-gray-300 text-lg">
          Your trust matters. This policy explains how AVEN protects your data.
        </p>
      </header>

      {/* Content */}
      <div className="bg-cardDark p-8 rounded-xl space-y-6 text-gray-300 leading-relaxed">
        <p>
          AVEN is committed to safeguarding your personal information and
          respecting your privacy. We collect only the information necessary to
          improve your experience and provide meaningful access to health tools.
        </p>

        <h2 className="text-xl font-semibold text-accent">Information We Collect</h2>
        <p>
          We may collect basic account information, usage data, and feedback you
          voluntarily provide to help improve the platform.
        </p>

        <h2 className="text-xl font-semibold text-accent">How We Use Your Data</h2>
        <p>
          Data is used solely to enhance platform functionality, personalize
          experiences, and ensure a safe and effective service.
        </p>

        <h2 className="text-xl font-semibold text-accent">Data Protection</h2>
        <p>
          AVEN prioritizes security and follows best practices to protect user
          data from unauthorized access or misuse.
        </p>
      </div>

    </section>
  );
}
