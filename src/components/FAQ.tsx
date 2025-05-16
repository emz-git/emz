import React from "react";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-slate-700 dark:text-gray-300 pl-1 pr-4 animate-slide-up">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services does ElevateModernZone provide?",
      answer: (
        <p>
          ElevateModernZone offers management consulting, data-driven operations
          analysis, and AI-powered content creation services. This includes
          company profiles, web and social content, bilingual writing,
          presentations, data analysis, BI reporting concepts, process
          improvement, and content strategy.
        </p>
      ),
    },
    {
      question: "How can AI-powered content benefit my business?",
      answer: (
        <p>
          AI-powered content combines human expertise with artificial
          intelligence to produce high-quality, data-informed content
          efficiently. This results in consistent messaging, faster turnaround
          times, and content that's optimized for engagement - all at a more
          affordable price point than traditional agencies.
        </p>
      ),
    },
    {
      question: "What industries do you work with?",
      answer: (
        <p>
          ElevateModernZone has experience working across various industries
          including government services, e-commerce, mobility solutions, and
          more. The data-driven approach and consulting methodology can be
          adapted to any industry requiring strategic insights and compelling
          content.
        </p>
      ),
    },
    {
      question: "Do you offer content in languages other than English?",
      answer: (
        <p>
          Yes, we provide bilingual content creation in both English and Arabic.
          This is particularly valuable for businesses operating in the MENA
          region or looking to expand into Arabic-speaking markets while
          maintaining consistent messaging across languages.
        </p>
      ),
    },
    {
      question: "What is the typical timeline for project completion?",
      answer: (
        <p>
          Project timelines vary based on scope and requirements, but our
          AI-enhanced workflow allows for significantly faster turnaround times
          than traditional consulting or content services. Simple projects may
          be completed within days, while more complex consulting engagements
          typically take a few weeks. We'll provide a specific timeline during
          the initial consultation.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Get answers to common questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-700 dark:text-gray-300 mb-4">
            Don't see your question answered here?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
