import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FontLoader from "../components/FontLoader";
import OurApproach from "../components/OurApproach";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

const Index = () => {
  return (
    <>
      <FontLoader />
      <Helmet>
        <title>
          ElevateModernZone - Management Consulting | AI-Powered Content & Data
          Insights
        </title>
        <meta
          name="description"
          content="ElevateModernZone, led by Ayman Mohamed, offers expert management consulting, data analysis, AI-powered content (Arabic/English), and CX strategies to elevate your business."
        />
        <meta
          name="keywords"
          content="management consulting UAE, data analyst Dubai, AI content creation, Arabic content writer, company profiles, business intelligence, customer experience, EMZ"
        />
        <link rel="canonical" href="https://elevatemodernzone.com" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="ElevateModernZone - Transforming Business Insights into Strategic Success"
        />
        <meta
          property="og:description"
          content="Expert consulting, data analysis, and AI-powered content solutions by Ayman Mohamed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elevatemodernzone.com" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <OurApproach />
          <WhyChooseUs />
          <Portfolio />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
