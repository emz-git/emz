import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionContainer, MotionItem } from "./ui/motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      setSubmitSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <MotionContainer className="text-center mb-10">
          <MotionItem className="">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 dark:text-white tracking-tight font-sans">
              Let's Start Your Project
            </h2>
          </MotionItem>
          <MotionItem className="" delay={0.1}>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Reach out today for a free consultation and quote.
            </p>
          </MotionItem>
        </MotionContainer>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full">
          {/* Left: Form Card */}
          <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-w-[320px] max-w-md mx-auto md:mx-0">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Full Name</label>
                <Input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email Address</label>
                <Input type="email" id="email" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Company (Optional)</label>
                <Input type="text" id="company" name="company" placeholder="Your Company Name" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Your Message / Project Details</label>
                <Textarea id="message" name="message" placeholder="Tell us about your project or needs..." value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      <Send className="w-4 h-4" />
                    </motion.div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
              {submitSuccess && (
                <motion.div className="text-green-600 text-center mt-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  Message sent successfully!
                </motion.div>
              )}
              {submitError && (
                <motion.div className="text-red-500 text-center mt-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  {submitError}
                </motion.div>
              )}
            </form>
            <p className="text-xs text-slate-500 mt-4">Your information is handled with confidentiality. We typically respond within 24 hours.</p>
          </div>
          {/* Right: Stacked Cards */}
          <div className="flex-1 flex flex-col gap-6 min-w-[320px] max-w-md mx-auto md:mx-0">
            {/* Direct Contact Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Direct Contact</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Ayman Mohamed</span>
              </div>
              <a href="https://wa.me/971585110565" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-md font-semibold mb-3 transition-all duration-200">
                <span className="inline-flex items-center gap-2 justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.05-2.236A11.96 11.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.61 0-3.13-.39-4.45-1.08l-.32-.17-4.18 1.33 1.33-4.07-.21-.33A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.13-.18.27-.7.93-.86 1.12-.16.19-.32.21-.59.07-.27-.13-1.13-.42-2.15-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.57.12-.12.27-.32.4-.48.13-.16.17-.27.26-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.98-.22-.54-.44-.47-.6-.48-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.96.95-.96 2.32 0 1.37.99 2.7 1.13 2.89.14.19 1.98 3.03 4.8 4.25.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.66 1.89-1.29.24-.63.24-1.17.17-1.29-.07-.12-.25-.18-.53-.32z"/></svg>
                  Chat on WhatsApp (Preferred)
                </span>
              </a>
              <p className="text-xs text-slate-500">
                Please use the contact form or WhatsApp for inquiries. Due to high demand and a focus on project delivery, direct email responses may be managed through these channels.
              </p>
            </div>
            {/* Based In Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Based In</h3>
              <p className="text-slate-900 dark:text-white">Dubai, United Arab Emirates</p>
              <p className="text-slate-500 dark:text-slate-300">Serving clients globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
