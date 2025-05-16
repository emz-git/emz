import React, { useEffect } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
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
      className="min-h-[90vh] flex items-center relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800/80 section-padding transition-colors duration-300 overflow-hidden"
    >
      {/* Background Light Mode Pattern */}
      <div className="absolute inset-0 dark:opacity-0 opacity-20 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract shapes with enhanced animations */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500 opacity-5 dark:opacity-10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.05, 0.08, 0.05],
            x: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut", 
            times: [0, 0.5, 1] 
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-600 opacity-5 dark:opacity-10 blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.1, 0.05],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full bg-purple-500 opacity-5 dark:opacity-10 blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -20, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        {/* Additional animated elements for visual richness */}
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-cyan-500 opacity-5 dark:opacity-10 blur-lg"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -30, 0],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />

        {/* Light mode exclusive decorative elements */}
        <div className="absolute inset-0 dark:opacity-0">
          {/* Decorative geometric shapes for light mode */}
          <motion.div 
            className="absolute top-[15%] right-[10%] w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 rotate-12"
            animate={{
              rotate: [12, -12, 12],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-[25%] left-[5%] w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-15"
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-[35%] right-[15%] w-20 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-10 -rotate-12"
            animate={{
              rotate: [-12, -6, -12],
              x: [0, 10, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>

        {/* Floating particles effect - sparks */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className={`absolute w-1 h-1 rounded-full bg-blue-400 dark:bg-blue-500`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 md:py-12 lg:py-16">
        <MotionContainer className="text-center" delay={0.2}>
          <MotionItem className="mb-4">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-slate-900 dark:text-white leading-tight drop-shadow-[0_4px_24px_rgba(59,130,246,0.15)] tracking-tight font-sans"
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
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 dark:from-white dark:via-blue-100 dark:to-blue-200">
                ElevateModernZone
              </span>
              <span className="block text-2xl md:text-3xl font-medium mt-2 text-slate-700 dark:text-blue-200 tracking-wide">
                Business Consulting & Digital Solutions
              </span>
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center mb-4 opacity-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <Sparkles className="mx-3 h-5 w-5 text-blue-500" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </motion.div>
          </MotionItem>

          <MotionItem className="mb-6" delay={0.4}>
            <motion.p 
              className="text-lg md:text-xl text-slate-700 dark:text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7,
                ease: [0.25, 0.1, 0.25, 1.0] 
              }}
            >
              With over 7 years of banking experience and expertise in business
              operations, I deliver professional consulting, data analysis, and
              AI-powered content solutions that elevate your
              business—efficiently and affordably.
            </motion.p>
          </MotionItem>

          <MotionItem className="mt-4" delay={0.6}>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
            >
              <motion.a
                href="https://wa.me/971585110565?text=Hello%20Ayman,%20I'm%20interested%20in%20your%20services%20from%20ElevateModernZone."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white text-lg font-medium flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-700/20 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
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
                className="group w-full sm:w-auto bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500 text-blue-700 dark:text-blue-400 text-lg font-medium flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-700"
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

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          whileHover={{ y: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-sm font-medium mb-2">Scroll</span>
          <motion.div
            className="bg-white dark:bg-slate-800 shadow-md rounded-full p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
