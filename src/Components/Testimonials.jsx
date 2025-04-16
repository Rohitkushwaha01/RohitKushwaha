import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    company: "Tabnet",
    quote: "Rohit worked as a Full Stack Developer at Tabnet, where he handled both the backend and some frontend tasks. He provided efficient solutions to improve our systems’ performance and scalability, addressing key challenges with great precision. His work helped ensure our systems run smoothly.",
    name: "Tabnet Team",
    role: "Client",
  },
  {
    company: "Sheetal Engineers",
    quote: "Rohit built the entire website for Sheetal Engineers, providing a seamless user experience with modern design and robust functionality. The website has significantly improved our business operations and customer engagement, making our services easier to access for our clients.",
    name: "Sheetal Engineers Team",
    role: "Client",
  },
  {
    company: "TPPL",
    quote: "Rohit developed a website for TPPL to represent our steel and fabrication business online. The site highlights our product range, services, and portfolio with a user-friendly interface. Thanks to his work, we have been able to reach a wider audience and expand our online presence.",
    name: "TPPL Team",
    role: "Client",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 pb-20  text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-yellow-200 mb-26"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What My Clients Say
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md bg-[#01443d] p-6 rounded-2xl shadow-lg"
          >
            <div className="text-yellow-400 text-4xl mb-4">
              <FaQuoteLeft />
            </div>
            <p className="text-green-200 text-lg italic mb-4">{`"${testimonial.quote}"`}</p>
            <div className="font-semibold text-yellow-300 mb-2">
              {testimonial.name}
            </div>
            <div className="text-green-100">{testimonial.role} at {testimonial.company}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
