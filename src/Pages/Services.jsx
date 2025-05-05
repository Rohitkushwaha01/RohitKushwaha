import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Web from "../assets/web.png";
import Ecommerce from "../assets/Ecommerce.png";
import API from "../assets/API.png";
import { FaCode, FaShoppingCart, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "We design and build modern websites that are fast, responsive, and optimized for performance and SEO. From sleek portfolios to robust enterprise apps, we bring your vision to life on the web.",
    image: Web,
    icon: <FaCode className="text-yellow-400 text-4xl mb-4" />,
    details: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-yellow-300">Key Highlights:</h3>
        <ul className="list-disc pl-5 space-y-2 text-green-100">
          <li><span className="font-semibold text-white">SEO-optimized:</span> Rank higher, load faster, and convert better.</li>
          <li><span className="font-semibold text-white">Custom UI/UX:</span> Every pixel crafted for your audience.</li>
          <li><span className="font-semibold text-white">Mobile-first:</span> 100% responsive design for all screen sizes.</li>
        </ul>

        <h3 className="text-xl font-semibold text-yellow-300">Tech Stack:</h3>
        <p className="text-green-100">ReactJS, Vite, TailwindCSS, Node.js, MongoDB, Firebase, Framer Motion</p>

        <h3 className="text-xl font-semibold text-yellow-300">Why it Works:</h3>
        <p className="text-green-100">
          We don't just build websites—we create fast, scalable, and secure digital experiences tailored to your business goals.
        </p>
      </div>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description:
      "We build scalable online stores with seamless checkout, modern design, and robust backends. Whether you're starting from scratch or need a revamp — we turn clicks into customers.",
    image: Ecommerce,
    icon: <FaShoppingCart className="text-yellow-400 text-4xl mb-4" />,
    details: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-yellow-300">What We Deliver:</h3>
        <ul className="list-disc pl-5 space-y-2 text-green-100">
          <li><span className="font-semibold text-white">Fast Checkout:</span> Streamlined user experience that drives conversions.</li>
          <li><span className="font-semibold text-white">Inventory Management:</span> Smart solutions to keep stock synced and organized.</li>
          <li><span className="font-semibold text-white">Secure Payments:</span> Integrations with Stripe, Razorpay, PayPal & more.</li>
        </ul>

        <h3 className="text-xl font-semibold text-yellow-300">Tech Stack:</h3>
        <p className="text-green-100">Shopify, MERN Stack, Firebase, Stripe, REST APIs, TailwindCSS</p>

        <h3 className="text-xl font-semibold text-yellow-300">Why it Works:</h3>
        <p className="text-green-100">
          We craft intuitive, scalable and secure storefronts that boost sales and enhance customer loyalty.
        </p>
      </div>
    ),
  },
  {
    title: "Custom API Development",
    description:
      "Need your apps to talk to each other? We create powerful REST & GraphQL APIs that connect systems, automate workflows, and unlock integrations tailored to your business.",
    image: API,
    icon: <FaCogs className="text-yellow-400 text-4xl mb-4" />,
    details: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-yellow-300">What We Offer:</h3>
        <ul className="list-disc pl-5 space-y-2 text-green-100">
          <li><span className="font-semibold text-white">REST & GraphQL APIs:</span> Reliable and scalable endpoints.</li>
          <li><span className="font-semibold text-white">Third-Party Integrations:</span> Connect your systems easily.</li>
          <li><span className="font-semibold text-white">Custom Automation:</span> Streamline workflows and data exchange.</li>
        </ul>

        <h3 className="text-xl font-semibold text-yellow-300">Tech Stack:</h3>
        <p className="text-green-100">Express.js, Node.js, MongoDB, GraphQL, Firebase, Swagger</p>

        <h3 className="text-xl font-semibold text-yellow-300">Why it Works:</h3>
        <p className="text-green-100">
          We design APIs with clear documentation, high availability, and security in mind to future-proof your business.
        </p>
      </div>
    ),
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => setSelectedService(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold font-acron text-yellow-200 drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-yellow-400 mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your goals, built by us.
        </motion.h2>

        <motion.p
          className="max-w-4xl text-green-200 text-base md:text-xl mt-6 px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From full-stack websites to custom APIs and e-commerce platforms, we build tailored
          solutions with performance, scalability, and conversion in mind.
        </motion.p>
      </div>

      <div className="px-4 md:px-16 py-20 flex flex-col gap-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-[600px] h-auto rounded-2xl shadow-lg object-cover"
            />

            <div className="text-left w-full max-w-xl">
              <h2 className="text-3xl md:text-5xl font-acron font-bold text-yellow-300 mb-4">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl text-green-200 leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="text-yellow-400 text-lg font-semibold inline-flex items-center gap-2 hover:underline group"
              >
                Learn More
                <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900 rounded-2xl p-8 max-w-3xl w-full shadow-xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex flex-col items-center">
              {selectedService.icon}
              <h2 className="text-3xl font-bold text-yellow-300 mb-4">
                {selectedService.title}
              </h2>
              {selectedService.details}
              <button
                onClick={handleCloseModal}
                className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
}
