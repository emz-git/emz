import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past the hero section (approx 500px)
      const showPoint = 500;
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > showPoint) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="https://wa.me/971585110565?text=Hello%20Ayman,%20I'm%20interested%20in%20your%20services%20from%20ElevateModernZone."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 px-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="font-medium">Let's Talk</span>
      </a>
    </div>
  );
};

export default StickyCTA;
