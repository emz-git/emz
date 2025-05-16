import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FontLoader from "../components/FontLoader";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const OurApproach = lazy(() => import("../components/OurApproach"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const FAQ = lazy(() => import("../components/FAQ"));

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
          <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <About />
            <Services />
            <OurApproach />
            <WhyChooseUs />
            <Portfolio />
            <FAQ />
          </Suspense>
          <ContactForm />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
