import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AuraEffect = () => {
  return (
    <>
      {/* Animated Background Gradient */}
      < motion.div
        className=" inset-0 bg-gradient-to-tl from-teal-500 to-teal-800"
      >
        {/* Navigation Bar */}
        < Navbar />

        {/* Main Content */}
        < Outlet />

      </motion.div >
    </>

  );
};

export default AuraEffect;




