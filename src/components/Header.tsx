import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Determine active section based on scroll position
      const sections = [
        "hero",
        "services",
        "about",
        "why-choose-us",
        "contact",
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY + 200 >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Menu items configuration
  const menuItems = [
    { href: "#services", label: "Services", id: "services" },
    { href: "#about", label: "About", id: "about" },
    { href: "#why-choose-us", label: "Why Us", id: "why-choose-us" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 ${scrolled ? "backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 shadow-lg" : "bg-transparent"} transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold relative z-10 flex items-center group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-blue-600 dark:text-blue-400">Elevate</span>
            <span className="text-slate-800 dark:text-slate-100">
              ModernZone
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-blue-400"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1 mr-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium text-base transition-colors ${activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg z-0"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className={`p-1.5 rounded-lg ${mobileMenuOpen ? "bg-blue-100 dark:bg-blue-900/50" : "bg-transparent"} text-slate-800 dark:text-slate-200`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl z-40 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="flex flex-col p-5 space-y-3"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.07 } },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`flex items-center px-3 py-2.5 rounded-lg ${activeSection === item.id ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"} font-medium transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight
                      className={`w-4 h-4 mr-2 ${activeSection === item.id ? "opacity-100" : "opacity-0"} transition-opacity`}
                    />
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
