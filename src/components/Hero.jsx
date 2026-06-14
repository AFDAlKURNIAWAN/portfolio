// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import TypingLoop from "./TypingLoop"
import iconHtml from "../assets/html-icon.webp"
import SassIcon from "../assets/sass-icon.webp"
import JavascriptIcon from "../assets/javascript-icon.webp"
import framerIcon from "../assets/framer-icon.webp"
import CssIcon from "../assets/css-icon.webp"
import reactIcon from '../assets/react-icon.webp'
import codeIcon from '../assets/code-icon.webp'

const floatingVariant = (duration = 4) => ({
  animate: {
    y: [0, 25, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
});

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const images = [
  { src: iconHtml, alt: "icon html", duration: 3, className: "md:top-10 md:left-50 top-20 left-10" },
  { src: SassIcon, alt: "icon sass", duration: 4, className: "md:right-10 right-20 top-20" },
  { src: JavascriptIcon, alt: "icon js", duration: 5, className: "md:right-30 right-5 top-50" },
  { src: framerIcon, alt: "icon framer", duration: 6, className: "md:left-10 left-5 top-60" },
  { src: CssIcon, alt: "icon css", duration: 5, className: "md:left-50 left-10 bottom-30" },
  { src: reactIcon, alt: "icon react", duration: 4, className: "md:right-40 right-10 bottom-40" },
  { src: codeIcon, alt: "icon code", duration: 3, className: "md:bottom-20 bottom-5 md:right-80 right-40" },
];

const Hero = () => {
  return (
    <section className="relative px-10 md:py-45 py-35 overflow-hidden" id="home">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-1 flex flex-col items-center justify-center text-center">
        
        <motion.div 
          variants={fadeIn}
          className="px-4 py-2 bg-gray-400/20 border border-gray-500 shadow-2xl text-gray-900 rounded-full text-center mb-4 flex items-center justify-between">
          <p>Hello Everyone</p>
        </motion.div>
        
        <motion.div variants={fadeIn} className="text-7xl text-center font-medium mb-4 md:text-8xl">
          <h1><i>Welcome,</i> To My Portfolio</h1>
        </motion.div>
        
        <motion.div variants={fadeIn} className="text-[19px] md:text-2xl font-light mb-6 text-gray-900">
          <p>I am a student who has a hobby in front end developer and I like tinkering with computers</p>
        </motion.div>

        <motion.div variants={fadeIn} className="mb-6 text-2xl font-medium text-center">
          <TypingLoop texts={["Frontend Developer 🚀", "Tech Enthusiast 💻", "Adaptable Nature"]} />
        </motion.div>

        <motion.div variants={fadeIn} className="flex items-center justify-center gap-5 text-center">
          <a href="#project" className="bg-black shadow-2xl rounded-full px-6 py-2 md:text-[19px] text-gray-200 hover:bg-gray-900 transition duration-300 ease-in-out">Project</a>
          <a href="afdal.pdf" className="border border-black px-6 py-2 md:text-[19px] rounded-full shadow-2xl hover:bg-black hover:text-white transition duration-300 ease-in-out" download="afdal.pdf">Resume</a>
        </motion.div>
      </motion.div>
      
      <div className="absolute inset-0 pointer-events-none">
        {images.map((logo, index) => (
          <motion.img 
            key={index}
            variants={floatingVariant(logo.duration)}
            animate="animate"
            src={logo.src} 
            alt={logo.alt} 
            style={{ transform: "translateZ(0)" }}
            className={`absolute opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out w-20 h-20 pointer-events-auto ${logo.className}`}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero;