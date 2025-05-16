import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionContainer, MotionItem } from "./ui/motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
      // Here you would implement your form submission logic
      // For example, using fetch or axios to send the data to your backend

      // Simulating a successful form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-6">
        <MotionContainer className="text-center mb-12">
          <MotionItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Let's Start Your Project
            </h2>
          </MotionItem>

          <MotionItem delay={0.1}>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Reach out today for a free consultation and quote.
            </p>
          </MotionItem>
        </MotionContainer>

        <div className="max-w-2xl mx-auto">
          <MotionContainer>
            <MotionItem className="mb-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Company (Optional)
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Message / Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 dark:text-green-400 text-sm mt-2 text-center"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 dark:text-red-400 text-sm mt-2 text-center"
                    >
                      {submitError}
                    </motion.div>
                  )}
                </form>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
                  Your information is handled with confidentiality. We typically
                  respond within 24 hours.
                </p>
              </div>
            </MotionItem>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
