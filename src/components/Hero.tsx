import React, { useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import {
  MotionContainer,
  MotionItem,
  MotionText,
  FloatingElement,
} from "./ui/motion";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center relative bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800/80 section-padding transition-colors duration-300 overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-5 dark:opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-600 opacity-5 dark:opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-purple-500 opacity-5 dark:opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12 md:py-16">
        <MotionContainer className="text-center" delay={0.2}>
          <MotionItem className="mb-4">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-slate-800 dark:text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-blue-200"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                  },
                },
              }}
            >
              Transforming Business Insights into
              <span className="relative">
                <span className="relative z-10">Strategic Success</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-blue-500 opacity-20 dark:opacity-30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                />
              </span>
            </motion.h1>
          </MotionItem>

          <MotionItem className="mb-6" delay={0.4}>
            <p className="text-lg md:text-xl text-slate-700 dark:text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              With over 7 years of banking experience and expertise in business
              operations, I deliver professional consulting, data analysis, and
              AI-powered content solutions that elevate your
              business—efficiently and affordably.
            </p>
          </MotionItem>

          <MotionItem className="mt-4" delay={0.6}>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              whileInView={{ opacity: 1 }}
            >
              <motion.a
                href="https://wa.me/971585110565?text=Hello%20Ayman,%20I'm%20interested%20in%20your%20services%20from%20ElevateModernZone."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto btn-primary text-lg font-medium flex items-center justify-center gap-2 px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-700/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Free Quote
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>

              <motion.a
                href="#services"
                className="group w-full sm:w-auto btn-secondary text-lg font-medium flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </MotionItem>
        </MotionContainer>
      </div>

      {/* Scroll indicator */}
      <FloatingElement className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </FloatingElement>
    </section>
  );
};

export default Hero;
