// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const circleVariant = {
    animate1: {
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
        }
    },

    animate2: {
        scale: [1, 1.1, 1],
        x: [0, 120, 0],
        y: [0, -60, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },

    animate3: {
        scale: [1, 1.3, 1],
        x: [0, 140, 0],
        y: [0, 70, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
        }
    },

    animate4: {
        scale: [1, 1.4, 1],
        x: [0, 160, 0],
        y: [0, -80, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
        }
    },

    animate5: {
        scale: [1, 1.5, 1],
        x: [0, 180, 0],
        y: [0, -90, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
        }
    },

    animate6: {
        scale: [1, 1.6, 1],
        x: [0, 200, 0],
        y: [0, 100, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
        }
    },
}

const BlurBackround = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center blur-[100px] opacity-70">
      <motion.div
        className="bg-yellow-500 w-[250px] h-[150px] rounded-full absolute"
        variants={circleVariant}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-orange-500 w-[260px] h-[160px] rounded-full absolute"
        variants={circleVariant}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-green-500 w-[270px] h-[170px] rounded-full absolute"
        variants={circleVariant}
        animate="animate3"
      ></motion.div>
      <motion.div
        className="bg-purple-500 w-[280px] h-[180px] rounded-full absolute"
        variants={circleVariant}
        animate="animate4"
      ></motion.div>
      <motion.div
        className="bg-blue-500 w-[290px] h-[190px] rounded-full absolute"
        variants={circleVariant}
        animate="animate5"
      ></motion.div>
      <motion.div
        className="bg-pink-500 w-[300px] h-[200px] rounded-full absolute"
        variants={circleVariant}
        animate="animate6"
      ></motion.div>
    </div>
  )
}

export default BlurBackround
