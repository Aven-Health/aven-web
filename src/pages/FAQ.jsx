export default function FAQ() {
  const faqs = [
    { question: "Is the app free?", answer: "Yes, with optional premium features." },
    { question: "Who can use it?", answer: "Anyone looking to improve their daily health." },
    { question: "Can I use it outside Africa?", answer: "Yes, it’s available globally." },
  ];

  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">FAQ</h1>
      <div className="space-y-8">
        {faqs.map(({ question, answer }, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-2">{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
