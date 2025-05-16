import React from "react";

const ChooseUsCard = ({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="text-slate-700 dark:text-gray-200">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      emoji: "👨‍💼",
      title: "Experienced Professional",
      description:
        "Benefit from insights honed as a Management Consultant, Business Data Analyst, and CX Manager.",
    },
    {
      emoji: "📈",
      title: "Data-Informed Strategies",
      description:
        "Leveraging analytical skills to provide insights that complement our creative and AI-driven services.",
    },
    {
      emoji: "⏱️",
      title: "Speed & Efficiency",
      description:
        "Utilizing AI for rapid turnaround times without compromising quality or strategic depth.",
    },
    {
      emoji: "💰",
      title: "Affordability",
      description:
        "Access high-level expertise and premium services at competitive, budget-friendly rates.",
    },
    {
      emoji: "🌍",
      title: "Bilingual Excellence",
      description:
        "Expert content creation, analysis, and support in both Arabic and English.",
    },
    {
      emoji: "💡",
      title: "Modern & Adaptive Solutions",
      description:
        "Combining proven methodologies with the latest AI technology for cutting-edge results.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="section-padding bg-slate-100 dark:bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white shadow-sm">
            Why Partner with ElevateModernZone?
          </h2>
          <p className="text-lg text-slate-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
            Experience, Insight, and AI-Powered Efficiency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ChooseUsCard
              key={index}
              emoji={reason.emoji}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
