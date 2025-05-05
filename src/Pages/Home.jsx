import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Process from '../Components/Process';
import ExperienceTimeline from '../Components/ExperienceTimeline';
import Footer from '../Components/Footer';
import Rohit from '../assets/Rohit.png';
import { BsStars } from "react-icons/bs";
import Testimonials from '../Components/Testimonials';

export default function Home() {

    const titles = ["A Developer", "An Engineer", "An Innovator"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Main Intro Section */}
            <motion.div
                layout
                className="flex flex-col items-center justify-center gap-10 text-center mb-40 mt-36 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="relative flex flex-col items-center justify-center">
                    {/* Star Top Right of Name */}
                    <span className="max-[360px]:-right-10 absolute -top-2 -right-16 sm:-top-10 sm:-right-20 md:-right-26 text-yellow-300 text-6xl sm:text-7xl  md:text-8xl lg:text-8xl select-none pointer-events-none">
                        <BsStars />
                    </span>

                    {/* Name with Star Top Left */}
                    <div className="relative">
                        {/* Star Top Left of Name */}
                        <span className="absolute -top-2 -left-16 sm:-top-10 sm:-left-20 md:-left-26 text-yellow-300 text-6xl sm:text-7xl md:text-8xl lg:text-8xl select-none pointer-events-none">
                            <BsStars />
                        </span>

                        <motion.h1
                            layout
                            className="max-[440px]:text-[2.8rem] max-[360px]:text-[2rem] text-[3.8rem] sm:text-8xl md:text-8xl lg:text-8xl font-bold font-acron text-green-200"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hi. I'm Rohit
                        </motion.h1>
                    </div>

                    {/* Title with Bottom Left Star */}
                    <div className="relative">
                        <motion.h1
                            layout
                            key={titles[index]}
                            className="text-[2.5rem] sm:text-6xl md:text-6xl lg:text-6xl font-bold font-acron text-green-300"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            {titles[index]}
                        </motion.h1>
                    </div>
                </div>



                <motion.p
                    layout
                    className="max-w-4xl text-green-200 text-xl sm:text-lg md:text-xl px-4 py-12"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    I'm passionate about building intuitive, scalable applications that empower users and enhance experiences.
                </motion.p>
            </motion.div>

            {/* Profile Section */}
            <motion.div
                layout
                className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-7xl mx-auto px-4 mb-20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Profile Image */}
                {/* Profile Image */}
                <motion.div
                    className="w-full lg:w-1/3 flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src={Rohit}
                        alt="Profile"
                        className="rounded-xl rounded-b-full max-w-[250px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[370px] h-auto object-contain"
                    />
                </motion.div>


                {/* About Text */}
                <motion.div
                    className="w-full lg:w-2/3"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="font-acron text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#ffce12]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        I'm a Software Developer working remotely from Pune, India
                    </motion.div>
                    <div className="mb-4 text-base sm:text-lg md:text-xl text-green-200">
                        Over the past 4 years, I've worked in various areas of digital development, including front-end and back-end development. I'm proud to have worn many hats.
                    </div>
                    <div className="text-base sm:text-lg md:text-xl text-green-200">
                        These days, I focus on building impactful solutions that empower users and enhance experiences through thoughtful design and cutting-edge technology.
                    </div>
                </motion.div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <ExperienceTimeline />
            </motion.div>

            {/* Process Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Process />
            </motion.div>

            <Testimonials/>

            {/* Footer */}
            <Footer />
        </>
    );
}
