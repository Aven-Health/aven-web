export default function LegalLayout({ title, children }) {
  return (
    <section className="bg-primaryDark min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
          {children}
        </div>

      </div>
    </section>
  );
}
