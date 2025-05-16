import React, { useState } from "react";
import { ChartBar, BarChart, Building, Users, LineChart } from "lucide-react";

type ProjectCategory =
  | "all"
  | "government"
  | "ecommerce"
  | "mobility"
  | "finance";

const ProjectCard = ({
  title,
  description,
  icon: Icon,
  iconColor,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${iconColor}`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center">
        Learn more <ChartBar className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Banque Misr",
      description:
        "Gained 7 years of foundational experience in the banking sector, contributing to various operational and analytical roles.",
      icon: LineChart,
      iconColor: "bg-emerald-600",
      category: "finance",
      fullDescription:
        "Gained 7 years of foundational experience in the banking sector, contributing to various operational and analytical roles, including district supervision and management, focusing on retail banking, operational excellence, and financial analysis.",
    },
    {
      title: "TAMM Portal",
      description:
        "Contributed to the Official Portal of Abu Dhabi Government, enhancing service delivery and user experience.",
      icon: Building,
      iconColor: "bg-blue-600",
      category: "government",
      fullDescription:
        "Led a comprehensive audit and optimization of the TAMM portal's service journey, resulting in a 40% reduction in service completion time and a 25% increase in user satisfaction ratings. Implemented data-driven recommendations that streamlined complex government processes.",
    },
    {
      title: "noon Customer Service",
      description:
        "Optimized customer service channels, leading to improved customer satisfaction ratings and faster resolution times.",
      icon: Users,
      iconColor: "bg-amber-500",
      category: "ecommerce",
      fullDescription:
        "Redesigned customer service workflows for noon's e-commerce platform, reducing average response time by 35% and improving first-contact resolution rates by 28%. Developed comprehensive training programs and implemented new KPIs that better aligned with customer satisfaction metrics.",
    },
    {
      title: "FENIX CX Enhancement",
      description:
        "Redesigned customer experience journeys, resulting in higher retention rates and customer loyalty.",
      icon: BarChart,
      iconColor: "bg-emerald-500",
      category: "mobility",
      fullDescription:
        "Created a comprehensive customer experience strategy for FENIX mobility services that increased customer retention by 45% and boosted loyalty program participation by 60%. Developed data collection and analysis methods that provided actionable insights for continuous service improvement.",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Proven Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            With a track record of contributing to impactful initiatives across
            diverse industries, Ayman brings a wealth of practical knowledge to
            every project.
          </p>

          <div className="flex justify-center flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setSelectedCategory("government")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "government"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Government
            </button>
            <button
              onClick={() => setSelectedCategory("ecommerce")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "ecommerce"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setSelectedCategory("mobility")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "mobility"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Mobility
            </button>
            <button
              onClick={() => setSelectedCategory("finance")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "finance"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Finance
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              iconColor={project.iconColor}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 text-lg">
            Request Case Studies
          </button>
        </div>

        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                {projects[selectedProject].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {projects[selectedProject].fullDescription}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
