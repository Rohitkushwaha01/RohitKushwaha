import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Tabnet from "../assets/Tabnet.png";
import SheetalEng from "../assets/SheetalEng.png";
import SocioCode from "../assets/SocioCode.png";
import TPPL from "../assets/TPPL.svg";

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mt-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold font-acron text-yellow-200 drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-yellow-400 mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A blend of creativity, strategy, and execution.
        </motion.h2>

        <motion.p
          className="max-w-3xl text-green-200 text-base md:text-xl mt-6 px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dive into the projects we've brought to life - from brand sites to
          custom platforms and the ideas still in progress.
        </motion.p>
      </div>

      {/* Projects */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 gap-10 py-20">
        {/* Tabnet */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-gradient-to-br from-[#d0c4ff] to-[#e2d9ff] rounded-3xl overflow-hidden p-6 shadow-xl"
        >
          <h1 className="font-acron text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#515ED2] to-[#6a11cb] bg-clip-text text-transparent font-bold mb-6">
            Tabnet
          </h1>
          <img src={Tabnet} alt="Tabnet" className="w-full h-auto rounded-2xl" />
          <p className="text-md text-zinc-700 mt-4">
            • Full Stack Development (Node.js, MongoDB, React)<br />
            • Backend optimization and frontend improvements<br />
            • Scalable solutions
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-yellow-200 text-yellow-800 text-sm px-3 py-1 rounded-full">React.js</span>
            <span className="bg-blue-200 text-blue-900 text-sm px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-pink-200 text-cyan-900 text-sm px-3 py-1 rounded-full">Express.js</span>
            <span className="bg-green-200 text-green-900 text-sm px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-red-200 text-amber-900 text-sm px-3 py-1 rounded-full">AWS</span>
          </div>
        </motion.div>

        {/* Sheetal Engineers */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#21d7d7] to-[#3691ff] rounded-3xl overflow-hidden p-6 shadow-xl"
        >
          <h1 className="font-acron text-4xl sm:text-5xl lg:text-6xl text-blue-950 font-bold mb-6">
            Industrial Website
          </h1>
          <img src={SheetalEng} alt="Sheetal Engineers" className="w-full h-auto rounded-2xl" />
          <p className="text-md text-zinc-700 mt-4">
            • Designed and built their full business website<br />
            • Improved branding, navigation, and user experience<br />
            • Enhanced visibility and accessibility
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-yellow-200 text-yellow-800 text-sm px-3 py-1 rounded-full">React.js</span>
          <span className="bg-blue-200 text-blue-900 text-sm px-3 py-1 rounded-full">Framer Motion</span>
          </div>
        </motion.div>
      </div>

      {/* In Progress Projects Section */}
      <div className="bg-gradient-to-br from-[#fdf6e3] to-[#ffecd2] py-16 px-6 sm:px-10 lg:px-20 text-center rounded-3xl mx-4 my-10 shadow-lg">
        <h2 className="font-acron text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold mb-4">
          Ongoing Work & Projects
        </h2>
        <h1 className="font-acron text-5xl sm:text-7xl text-[#01443d] mb-8">
          In Progress.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          A glimpse into projects currently under development — from side hustles to evolving product ideas that are actively being designed, built, and refined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* SocioCode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-emerald-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="font-acron text-4xl sm:text-5xl bg-gradient-to-r from-[#101d93] to-[#da19ac] bg-clip-text text-transparent font-bold mb-3">
              SocioCode
            </h3>
            <p className="text-xl font-semibold text-gray-700 mb-4">Social Tech Product</p>
            <img src={SocioCode} alt="SocioCode" className="w-full rounded-xl" />
          </motion.div>

          {/* TPPL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#d1f1ff] rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="font-acron text-4xl sm:text-5xl text-[#023047] font-bold mb-3">
              TPPL
            </h3>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Mechanical Steel & Fabrication Company
            </p>
            <img src={TPPL} alt="TPPL" className="w-full rounded-xl" />
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 mb-10">
        <h2 className="text-6xl text-yellow-300 font-bold mb-4">Let’s Build Something Amazing</h2>
        <p className="text-green-200 mb-10 text-xl">Have a project in mind or need help improving your online presence?</p>
        <a
          href="/connect"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition text-xl"
        >
          Connect with Me →
        </a>
      </div>

      <Footer />
    </>
  );
}