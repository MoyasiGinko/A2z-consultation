import { motion } from "framer-motion";
import React from "react";

interface UnderlineAnimationProps {
  width?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({
  width = "30%",
  delay = 0.5,
  duration = 1.5,
  className = "absolute -bottom-3 left-0 h-1 transform rounded-full bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400",
}) => {
  return (
    <motion.span
      className={className}
      initial={{ width: 0, left: "50%", translateX: "-50%" }}
      animate={{
        width: ["0%", width],
        opacity: [0.7, 1],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

export default UnderlineAnimation;
