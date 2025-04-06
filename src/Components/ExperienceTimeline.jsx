import { motion } from 'framer-motion';

const experiences = [
  { company: 'Freelancer', role: 'MERN Stack & Shopify Developer', duration: '3 Years', order: 1 },
  { company: 'TCS', role: 'Database Administrator', duration: '1 Year', order: 2 },
  { company: 'Tabnet Securities', role: 'Software Developer', duration: '5 Months', order: 3 },
];

export default function ExperienceTimeline() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 w-full max-w-5xl mx-auto mb-20">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3 }}
          viewport={{ once: true }}
          className={`
            flex flex-col md:flex-row items-center gap-3
            p-5 bg-[#A7F3D0] text-[#00675b] rounded-2xl shadow-lg
            w-full sm:w-[90%] md:w-[75%] lg:w-[60%] 
            mb-6
            ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}
          `}
        >
          <div className="font-bold text-lg sm:text-xl text-center md:text-left">{exp.company}</div>
          <div className="md:ml-4 text-base sm:text-lg text-center md:text-left">{exp.role}</div>
          <div className="md:ml-auto font-semibold text-base sm:text-lg text-center md:text-right">{exp.duration}</div>
        </motion.div>
      ))}
    </div>
  );
}
