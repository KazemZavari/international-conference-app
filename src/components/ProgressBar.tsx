import { motion, useScroll } from "framer-motion";
import React from "react";

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-700 
      to-orange-400 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: 0 }}
    />
  );
};

export default ProgressBar;
