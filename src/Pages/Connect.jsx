import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

import FiverrLogo from '../assets/fiverrlogo.png';
import UpworkLogo from '../assets/upworkLogo.png';
import FreelancerLogo from '../assets/freelancer.png';
import LinkedInLogo from '../assets/Linkedin.png';

export default function Connect() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold font-acron text-yellow-200 drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-yellow-400 mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s create, collaborate, and grow together.
        </motion.h2>

        <motion.p
          className="max-w-4xl text-green-200 text-base md:text-xl mt-6 px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Whether you're looking to hire, team up on a project, or just start a conversation —
          I'm available on platforms like Fiverr, Upwork, LinkedIn, and more. Let’s make something amazing happen.
        </motion.p>
      </div>




      {/* Cards */}
      <motion.div
        className="mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-12 mb-28 w-full max-w-7xl mx-auto"
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
              text-white shadow-md overflow-hidden transition-all hover:scale-105
              backdrop-blur-md bg-gray-900/70 border border-white/10
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
              <span className="mt-2 text-lg sm:text-xl font-semibold text-green-200">{card.label}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Let's Talk Card */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-20 relative w-[600px] mx-5 sm:w-[600px] bg-gray-800 text-white rounded-lg shadow-lg p-6 backdrop-blur-md border border-white/10 hover:scale-105 transition-all">
          <div className="flex flex-col items-center justify-center mb-4">
            <h3 className="text-2xl font-semibold text-yellow-300">Let's Make Something Amazing!</h3>
            <p className="mt-2 text-green-200 text-sm sm:text-center">
              Whether you're looking to collaborate on a project, need advice, or simply want to chat, I'm just a message away! I believe in building great things together.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Hello&body=Hey Rohit, I saw your work and wanted to connect."
              className="py-3 px-6 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
            >

              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>


      <Footer />
    </>
  );
}
