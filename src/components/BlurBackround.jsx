// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const circleVariant = {
  animate1: {
    scale: [1, 1.15, 1],
    x: [0, 80, 0],
    y: [0, 40, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate2: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, -50, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate3: {
    scale: [1, 1.25, 1],
    x: [0, 120, 0],
    y: [0, 60, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BlurBackround = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center blur-[80px] opacity-70">
      <motion.div
        className="bg-yellow-500 w-[220px] h-[140px] rounded-full absolute"
        variants={circleVariant}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-orange-500 w-[240px] h-[150px] rounded-full absolute"
        variants={circleVariant}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-purple-500 w-[260px] h-[170px] rounded-full absolute"
        variants={circleVariant}
        animate="animate3"
      ></motion.div>
    </div>
  );
};

export default BlurBackround;
