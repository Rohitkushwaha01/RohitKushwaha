import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    number: "01",
    title: "Plan & Architect",
    description:
      "Before writing a single line of code, I focus on understanding the problem deeply. I break down requirements, design system architecture, and plan scalable solutions to ensure efficiency from the start.",
  },
  {
    number: "02",
    title: "Develop & Iterate",
    description:
      "I believe in building fast and iterating quickly. Writing clean, maintainable code is my priority, and I continuously refine my work based on feedback and new insights.",
  },
  {
    number: "03",
    title: "Optimize & Scale",
    description:
      "Performance and scalability are key. Whether it’s backend optimization, database indexing, or front-end improvements, I ensure my applications run efficiently under load.",
  },
  {
    number: "04",
    title: "Learn & Evolve",
    description:
      "Tech is always changing, and so am I. I stay updated with the latest technologies, frameworks, and best practices to keep refining my craft and delivering better solutions.",
  },
];

export default function Process() {
  return (
    <div className=" text-amber-200 w-full px-4 sm:px-8 py-16 rounded-xl mb-30">
      <h1 className="font-acron text-3xl sm:text-5xl text-center mb-16">
        This is how I approach a problem!
      </h1>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="space-y-4 bg-[#01443d] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500">{section.number}</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300">{section.title}</h3>
            <p className="text-base sm:text-lg text-green-200">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
