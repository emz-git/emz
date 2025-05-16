import React from "react";

import { motion } from "framer-motion";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800/90 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center h-full relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl will-change-transform">
      {/* Background glow effect - simplified to use CSS only */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-400/20 dark:group-hover:bg-blue-600/20 transition-all duration-300"></div>

      {/* Service icon with simpler container */}
      <div className="p-4 bg-blue-100/70 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 mb-5 relative overflow-hidden transition-transform duration-300 hover:scale-105 will-change-transform">
        <div className="w-12 h-12">{icon}</div>

        {/* Icon background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-blue-200/30 dark:from-blue-900/20 dark:to-blue-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Card bottom accent - simplified to use CSS only */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out will-change-transform"></div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
      title: "Elegant Company Profiles",
      description:
        "Professionally designed profiles that showcase your business value, secure investor confidence, and differentiate your brand in competitive markets.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "AI-Powered Web & Social Content",
      description:
        "Engaging website copy, insightful FAQs, and dynamic social media content that increases visitor engagement, boosts conversion rates, and enhances your digital presence.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      ),
      title: "Compelling Arabic & English Writing",
      description:
        "High-quality bilingual content that resonates with diverse audiences, expands your market reach, and builds authentic cultural connections in both Arabic and English markets.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-16.5 0h16.5M7.5 11.25h9M7.5 14.25h9M3.75 7.5h16.5"
          />
        </svg>
      ),
      title: "Presentations & Proposals",
      description:
        "Visually stunning and strategically persuasive presentations that close deals, secure funding, and turn your audience into advocates for your business vision.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      ),
      title: "Data Analysis & Insights Reports",
      description:
        "Transforming raw data into actionable insights and clear reports that drive smarter decisions, uncover hidden opportunities, and give you a measurable competitive advantage.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197"
          />
        </svg>
      ),
      title: "BI Reporting & Dashboard Concepts",
      description:
        "Custom dashboard concepts that transform complex data into visual insights, enabling faster decision-making and helping teams focus on what truly drives business success.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V6.375c0-.621.504-1.125 1.125-1.125H6.75m10.5-1.125h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
      title: "Process Improvement & CX Strategy",
      description:
        "AI-assisted analysis that optimizes your business processes and customer journeys, reducing operational costs while significantly improving customer satisfaction and retention rates.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
      title: "Data-Driven Content Strategy",
      description:
        "Strategic content planning backed by data insights and AI-driven trend analysis that increases engagement, captures search traffic, and positions your brand as an industry authority.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
      title: "Thorough Proofreading & Editing",
      description:
        "Meticulous proofreading and polishing that ensures flawless, professional content which reinforces your credibility, builds trust, and prevents costly communication errors.",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/90"
    >
      {/* Background elements - Using CSS animations instead of Framer Motion for better performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 rounded-full bg-blue-400 opacity-5 dark:opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-indigo-500 opacity-5 dark:opacity-10 blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-slideDown">
          <div
            className="opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-slate-800 dark:text-white">
              Our Comprehensive{" "}
              <span className="text-blue-600 dark:text-blue-400 relative inline-block">
                Services
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600/30 dark:bg-blue-400/30 origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
                  style={{ transitionDelay: "0.5s", transform: "scaleX(1)" }}
                />
              </span>
            </h2>
          </div>
          <p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Strategic consulting, creative content, and data-driven solutions
            designed to elevate your business performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 animate-slideUp"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
                animationDuration: "0.6s",
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div
          className="mt-20 text-center opacity-0 animate-slideUp"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-600/10 to-blue-400/10 dark:from-blue-600/20 dark:to-blue-400/20 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800/30 max-w-4xl mx-auto relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">
              Ready to transform your business?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create exceptional content, optimize your
              processes, and drive your business growth with data-driven
              strategies.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 will-change-transform"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
