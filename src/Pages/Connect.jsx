import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

import FiverrLogo from '../assets/fiverrlogo.png';
import UpworkLogo from '../assets/upworkLogo.png';
import FreelancerLogo from '../assets/freelancer.png';
import LinkedInLogo from '../assets/linkedin.png';

export default function Connect() {
  const [chatOpen, setChatOpen] = useState(false);

  const cards = [
    {
      label: 'Mail',
      icon: <FaEnvelope size={40} />,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Hello&body=Hey Rohit, I saw your work and wanted to connect.'
    },    
    {
      label: 'GitHub',
      icon: <FaGithub size={40} />,
      link: 'https://github.com/rohitkushwaha01',
    },
    {
      label: 'Fiverr',
      image: FiverrLogo,
      link: 'https://www.fiverr.com/rohitkushwaha01?public_mode=true',
    },
    {
      label: 'Upwork',
      image: UpworkLogo,
      link: 'https://www.upwork.com/freelancers/~012cc0c2bbe5e81168?viewMode=1',
    },
    {
      label: 'Freelancer',
      image: FreelancerLogo,
      link: 'https://www.freelancer.in/u/rohitkushwahac01',
    },
    {
      label: 'LinkedIn',
      image: LinkedInLogo,
      link: 'https://www.linkedin.com/in/rohit-kushwaha-88598420a/',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 w-full text-center mt-10 mb-10 sm:mb-20 font-segoe">
        <motion.h1
          className="font-acron font-bold text-yellow-400 w-[95%] text-center text-6xl sm:text-5xl lg:w-[70%]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 2 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          Connect👨‍💻
        </motion.h1>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-12 mb-32 w-full max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <motion.a
            href={card.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            custom={index}
            className={`
              relative flex flex-col items-center text-center justify-center rounded-2xl p-5 min-h-[160px] sm:min-h-[180px]
              text-white shadow-xl overflow-hidden transition-all hover:scale-105
              backdrop-blur-md bg-opacity-10 border border-white/20
              before:absolute before:inset-0 before:rounded-2xl
              before:bg-gradient-to-r before:from-green-400 before:via-green-200 before:to-green-600
              before:animate-[gradient-x_6s_ease_infinite] before:bg-[length:200%_200%] before:opacity-30
              z-10
            `}
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              {card.icon ? (
                card.icon
              ) : (
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-14 h-14 mb-2 object-contain rounded-full"
                />
              )}
              <span className="mt-2 text-2xl sm:text-center font-semibold text-green-200">{card.label}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <Footer />
    </>
  );
}
