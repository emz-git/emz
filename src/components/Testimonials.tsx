import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
}: TestimonialProps) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:shadow-xl">
    <div className="mb-6">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500">
          ★
        </span>
      ))}
    </div>
    <blockquote className="text-lg mb-6 text-gray-700 dark:text-gray-300 italic">
      "{quote}"
    </blockquote>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
        {author.charAt(0)}
      </div>
      <div className="ml-4">
        <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {role}, {company}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ElevateModernZone's data-driven approach transformed our operations. Their recommendations increased our efficiency by 30% and improved customer satisfaction scores.",
      author: "Sarah Johnson",
      role: "COO",
      company: "TechFlow Inc.",
    },
    {
      quote:
        "The content Ayman created for our company profile was exceptional. It perfectly balanced professional tone with engaging storytelling, helping us stand out in a competitive market.",
      author: "Mohammed Al-Farsi",
      role: "Marketing Director",
      company: "Gulf Innovations",
    },
    {
      quote:
        "Working with ElevateModernZone streamlined our customer experience journey. The insights provided were actionable and resulted in immediate improvements to our service delivery.",
      author: "David Chen",
      role: "Customer Experience Manager",
      company: "Horizon Services",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Hear what clients have to say about working with ElevateModernZone.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static transform-none rounded-full" />
              <CarouselNext className="static transform-none rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
