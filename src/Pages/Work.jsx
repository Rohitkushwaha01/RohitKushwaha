import React from 'react';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import Tabnet from '../assets/Tabnet.png';
import SheetalEng from '../assets/SheetalEng.png';  
import SocioCode from '../assets/SocioCode.png';

export default function Work() {
  return (
    <>
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 sm:px-10 lg:px-20 gap-2 py-10">
        {/* Tabnet */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-purple-200 rounded-3xl overflow-hidden p-6"
        >
          <h1 className="font-acron text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#515ED2] to-[#6a11cb] bg-clip-text text-transparent font-bold mb-6">
            Tabnet
          </h1>
          <img
            src={Tabnet}
            alt="Tabnet"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* Sheetal Engineers */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-[#afdad4] rounded-3xl overflow-hidden p-6"
        >
          <h1 className="font-acron text-4xl sm:text-5xl lg:text-6xl text-blue-950 font-bold mb-6">
            Sheetal Engineers
          </h1>
          <img
            src={SheetalEng}
            alt="Sheetal Engineers"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>
      </div>

      {/* In Progress Section */}
      <div className="text-center px-4 py-10">
        <h1 className="font-acron text-6xl sm:text-8xl text-[#ffce12] mb-4">
          In Progress.
        </h1>
        <p className="text-xl sm:text-2xl text-green-200 max-w-2xl mx-auto">
          Work in various states of design and development, from side projects, to in-flight product design and development.
        </p>
      </div>

      {/* SocioCode Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center px-6 pb-6 sm:px-10 lg:px-20"
      >
        <div className="w-full max-w-5xl bg-amber-200 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-6 gap-6">
          <div className="text-center">
            <h1 className="font-acron text-4xl sm:text-6xl bg-gradient-to-r from-[#101d93] to-[#da19ac] bg-clip-text text-transparent font-bold mb-2">
              SocioCode
            </h1>
            <p className="text-2xl sm:text-2xl text-gray-700 font-acron font-bold">Product</p>
          </div>
          <img
            src={SocioCode}
            alt="SocioCode"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
