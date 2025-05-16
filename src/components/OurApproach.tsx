import React from "react";
import { Search, Puzzle, Brain, Rocket } from "lucide-react";

type ApproachStepProps = {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
};

const ApproachStep = ({
  icon,
  number,
  title,
  description,
}: ApproachStepProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
        <div className="text-blue-700 dark:text-blue-400">{icon}</div>
      </div>
      <div className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">
        STEP {number}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="text-slate-700 dark:text-gray-200">{description}</p>
    </div>
  );
};

const OurApproach = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      number: 1,
      title: "Discovery & Analysis",
      description:
        "We start by deeply understanding your business, objectives, target audience, and any existing data.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      number: 2,
      title: "AI-Powered Solution Design",
      description:
        "Next, we leverage advanced AI tools for efficient drafting, data modeling, or initial strategy formulation, tailored to your needs.",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      number: 3,
      title: "Expert Refinement & Customization",
      description:
        "This is where human expertise shines. I personally review, refine, and customize all outputs, ensuring strategic alignment, quality, and a personal touch that reflects your unique brand.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: 4,
      title: "Delivery & Impact",
      description:
        "We deliver polished, actionable solutions and can discuss how to measure their impact on your business goals.",
    },
  ];

  return (
    <section
      id="our-approach"
      className="section-padding bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white shadow-sm">
            Our Approach
          </h2>
          <p className="text-lg text-slate-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
            How we blend AI efficiency with human expertise to deliver
            exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <ApproachStep
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
