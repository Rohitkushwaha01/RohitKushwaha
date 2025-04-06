import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Web from "../assets/Web.svg";
import Ecommerce from "../assets/Ecommerce.svg";    
import API from "../assets/API.svg";

const services = [
    {
        title: "Web Development",
        description:
            "Every great digital experience starts with a solid foundation. We craft engaging, scalable websites that don't just look good but also perform seamlessly.",
        image: Web,
    },
    {
        title: "E-Commerce",
        description:
            "Turning ideas into revenue—our e-commerce solutions are built to help brands sell more while providing a smooth shopping experience for users.",
        image: Ecommerce
    },
    {
        title: "Custom APIs",
        description:
            "APIs connect the dots in today's digital world. We create powerful APIs that integrate systems, automate tasks, and unlock new possibilities.",
        image: API
    }
];

const ServiceCard = ({ title, image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#ffd106] to-[#eaec71] p-6 rounded-2xl shadow-xl w-full md:w-1/2 h-auto flex flex-col justify-between font-semibold text-left font-acron overflow-hidden group transition-all duration-500"
        >
            <motion.h1
                className="font-acron text-3xl md:text-5xl text-blue-950 font-bold transition duration-300 mb-4"
                whileHover={{ textShadow: "0px 0px 8px rgba(0,0,0,0.8)" }}
            >
                {title}
            </motion.h1>
            <motion.img
                src={image}
                alt={title}
                className="w-full h-60 object-contain transition-all duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
            />
        </motion.div>
    );
};

export default function Services() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 mt-20 font-segoe px-4">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold font-acron text-yellow-200"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi there.
                </motion.h1>

                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-yellow-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Let’s talk about what’s possible.
                </motion.h2>

                <motion.p
                    className="max-w-4xl text-green-200 text-lg md:text-2xl mt-6 px-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    I build digital experiences that solve real problems. Whether it's scaling businesses,
                    automating processes, or crafting intuitive user interfaces — there's always a smarter
                    way to do things. Curious? Keep scrolling.
                </motion.p>
            </div>

            {/* Services Section */}
            <div className="px-4 md:px-16 py-12 flex flex-col gap-24 items-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center justify-center gap-12 w-full md:w-[90%] ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        <ServiceCard title={service.title} image={service.image} />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-xl text-green-200 w-full md:w-1/2 flex flex-col gap-4"
                        >
                            <p>{service.description}</p>
                            <Link
                                to="#"
                                className="text-yellow-300 flex items-center text-lg gap-2 hover:underline mt-2 w-fit group"
                            >
                                Learn More
                                <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}
