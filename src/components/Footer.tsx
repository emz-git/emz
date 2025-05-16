import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="border-t border-slate-800 pt-8 text-center">
          <p>&copy; {currentYear} ElevateModernZone. All Rights Reserved.</p>
          <p className="mt-2">
            Data-Driven Solutions & AI-Powered Content by Ayman Mohamed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
