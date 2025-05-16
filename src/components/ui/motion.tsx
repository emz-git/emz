import { motion, Variants } from "framer-motion";

// Container animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Item animations
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// Text reveal animations
export const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade in animations with different directions
export const fadeInVariants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  },
};

// Scale animations
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] },
  },
};

// Hover and tap animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

// Motion components
export const MotionContainer = ({
  children,
  className,
  delay = 0,
  variants = containerVariants,
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={variants}
    transition={{ delayChildren: delay, staggerChildren: 0.2 }}
  >
    {children}
  </motion.div>
);

export const MotionItem = ({
  children,
  className,
  delay = 0,
  variants = itemVariants,
}) => (
  <motion.div className={className} variants={variants} transition={{ delay }}>
    {children}
  </motion.div>
);

export const MotionText = ({
  children,
  className,
  delay = 0,
  variants = textRevealVariants,
}) => (
  <motion.div className={className} variants={variants} transition={{ delay }}>
    {children}
  </motion.div>
);

// 3D tilt effect for cards
export const TiltCard = ({ children, className }) => (
  <motion.div
    className={className}
    whileHover={{
      rotateX: 10,
      rotateY: 10,
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    style={{ perspective: "1000px" }}
  >
    {children}
  </motion.div>
);

// Parallax scroll effect
export const ParallaxSection = ({ children, className, strength = 300 }) => (
  <motion.div
    className={className}
    style={{
      transformStyle: "preserve-3d",
    }}
    initial={{ y: 0 }}
    animate={{
      y: [0, -strength / 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }}
  >
    {children}
  </motion.div>
);

// Floating effect for elements
export const FloatingElement = ({ children, className }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }}
  >
    {children}
  </motion.div>
);
