import React from "react";
import { motion } from "framer-motion";
import { MotionContainer, MotionItem } from "./ui/motion";
import {
  Database,
  LineChart,
  Users,
  Layers,
  BarChart2,
  FileText,
} from "lucide-react";

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const AboutCard = ({ icon, title, text }: AboutCardProps) => (
  <motion.div
    className="bg-white dark:bg-slate-900/80 p-6 rounded-xl shadow-lg flex items-start gap-4 relative overflow-hidden border border-slate-100 dark:border-slate-800"
    whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
  >
    <div className="p-3 bg-blue-100/50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm">{text}</p>
    </div>
    <motion.div
      className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-20"
      initial={{ scale: 0 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  </motion.div>
);

interface ExpertiseArea {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const About = () => {
  const expertiseAreas: ExpertiseArea[] = [
    {
      icon: <Database size={20} />,
      title: "Data-Driven Strategy",
      text: "Transform raw business data into actionable strategy to drive growth and profitability",
    },
    {
      icon: <LineChart size={20} />,
      title: "Business Analysis",
      text: "Uncover hidden patterns and market opportunities through advanced analytical techniques",
    },
    {
      icon: <Users size={20} />,
      title: "Customer Experience",
      text: "Design delightful customer journeys that boost retention and drive advocacy",
    },
    {
      icon: <FileText size={20} />,
      title: "Bilingual Content",
      text: "Create compelling Arabic & English content that resonates with your target audience",
    },
    {
      icon: <BarChart2 size={20} />,
      title: "Business Intelligence",
      text: "Visualize performance with dashboards that highlight your most important metrics",
    },
    {
      icon: <Layers size={20} />,
      title: "Process Optimization",
      text: "Streamline operations to reduce costs while improving quality and efficiency",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-800"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-5 dark:opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <MotionContainer className="text-center mb-12 md:mb-16">
          <MotionItem className="mb-3">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
              About Ayman &{" "}
              <span className="text-blue-600 dark:text-blue-400">
                ElevateModernZone
              </span>
            </h2>
          </MotionItem>

          <MotionItem className="mb-6" delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              Expertise in Management Consulting, Strategic Analytics, and
              AI-Driven Solutions
            </p>
          </MotionItem>
        </MotionContainer>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <MotionContainer className="h-full">
            <MotionItem className="h-full">
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-xl shadow-lg h-full border border-slate-100 dark:border-slate-800">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  My Story
                </h3>
                <div className="text-slate-700 dark:text-slate-200 space-y-5">
                  <p>
                    Hello, I'm Ayman Mohamed. My professional journey as a{" "}
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      Management Consultant, Business Data Analyst, and Customer
                      Experience specialist
                    </span>{" "}
                    has equipped me with a unique blend of strategic insight,
                    analytical prowess, and operational expertise.
                  </p>
                  <p>
                    I've had the privilege of working at{" "}
                    <span className="font-semibold">
                      Banque Misr in Egypt for 7 years
                    </span>
                    , where I contributed to strategic initiatives and
                    operational improvements. I've also delivered significant
                    projects for the{" "}
                    <span className="font-semibold">
                      TAMM - Official Portal of Abu Dhabi Government
                    </span>{" "}
                    with ADRES, and driven optimization strategies at dynamic
                    companies like{" "}
                    <span className="font-semibold">FENIX and noon</span>.
                  </p>
                </div>
              </div>
            </MotionItem>
          </MotionContainer>

          <MotionContainer className="h-full" delay={0.2}>
            <MotionItem className="h-full">
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-xl shadow-lg h-full border border-slate-100 dark:border-slate-800">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  My Approach
                </h3>
                <div className="text-slate-700 dark:text-slate-200 space-y-5">
                  <p>
                    ElevateModernZone, inspired by my nickname "EMZ", was born
                    from the vision to make high-level{" "}
                    <strong>
                      strategic and analytical expertise accessible
                    </strong>
                    , amplified by the efficiency of cutting-edge AI tools. I
                    focus on delivering tangible results that directly impact
                    your business performance.
                  </p>
                  <p>
                    My approach is rooted in a{" "}
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      data-driven methodology
                    </span>
                    , ensuring that creative outputs are also strategically
                    sound and measurable. Whether you're a startup seeking
                    direction or an established business looking to optimize
                    operations, ElevateModernZone is your partner for modern,
                    intelligent solutions{" "}
                    <strong>
                      designed specifically for your unique challenges
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </MotionItem>
          </MotionContainer>
        </div>

        <h3 className="text-2xl font-bold text-center mb-10 text-slate-800 dark:text-white">
          Areas of Expertise
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <MotionItem key={index} className="h-full" delay={0.1 * index}>
              <AboutCard icon={area.icon} title={area.title} text={area.text} />
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
