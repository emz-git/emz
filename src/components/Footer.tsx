import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p>&copy; {currentYear} ElevateModernZone. All Rights Reserved.</p>
        <p className="text-sm">
          Data-Driven Solutions & AI-Powered Content by Ayman Mohamed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
