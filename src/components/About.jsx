// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import aboutImage from "../assets/image-about.webp";
import htmlIcon from "../assets/html-icon.webp";
import cssIcon from "../assets/css-icon.webp";
import javascriptIcon from "../assets/javascript-icon.webp";
import framerIcon from "../assets/framer-icon.webp";
import reactIcon from "../assets/react-icon.webp";
import tailwindIcon from "../assets/tailwind-icon.webp";
import gitIcon from "../assets/git-icon.webp";
import bootstrapIcon from "../assets/bootstrap-icon.webp";
import githubIcon from "../assets/icon-github.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const About = () => {
  const images = [
    htmlIcon,
    cssIcon,
    javascriptIcon,
    framerIcon,
    reactIcon,
    tailwindIcon,
    gitIcon,
    bootstrapIcon,
    githubIcon,
  ];

  const text = [
    "Teamwork",
    "Communication",
    "Critical Thinking",
    "Time Management",
    "Adabtation",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="lg:px-40 md:px-20"
      id="about"
    >
      <motion.div
        variants={fadeIn}
        className="text-start font-bold text-3xl underline mb-5 px-5"
      >
        <h1>About Me</h1>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="lg:flex items-center justify-center gap-40 px-5"
      >
        <p className="md:text-3xl text-xl font-light mb-5 md:mb-0">
          Hello everyone, my name is Afdal Kurniawan. I’m a guy who loves
          computers—whether it’s software or hardware—but I’m more into software
          because every time I see a line of code, I feel challenged to work on
          it. I’m currently working as a front-end developer, and I plan to
          pursue other projects as well because I love technology.
        </p>
        <img
          src={aboutImage}
          alt="about image"
          loading="lazy"
          decoding="async"
          className="md:w-79 w-auto h-auto md:rounded-none rounded-3xl flex-col"
        />
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="relative flex overflow-hidden md:py-10 py-5 my-7 md:my-0"
      >
        <div className="md:pointer-events-none md:absolute md:inset-y-0 md:left-0 md:z-10 md:w-10 md:bg-gradient-to-r md:from-white md:to-transparent" />
        <div className="md:pointer-events-none md:absolute md:inset-y-0 md:right-0 md:z-10 md:w-10 md:bg-gradient-to-l md:from-white md:to-transparent" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
        >
          {[...Array(1)].map((_, i) => (
            <div key={i} className="flex items-center">
              {images.map((img, index) => (
                <div key={index} className="md:mx-16 mx-6 w-24 flex-shrink-0">
                  <img
                    src={img}
                    alt={`Partner ${index}`}
                    loading="lazy"
                    decoding="async"
                    className="w-20 aspect-3/2 object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-5 gap-2 px-4 py-2"
      >
        <div className="md:col-span-2">
          <h1 className="text-2xl md:w-20 text-center border-b border-b-black mb-5 font-bold">
            Skill
          </h1>

          <div className="mb-5">
            <h3 className="text-xl mb-1 font-medium">Skill Set</h3>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  backgroundColor: ["#22c55e", "#14532d", "#22c55e"],
                  boxShadow: [
                    "0px 0px 0px 0px rgba(34, 197, 94, 0.4)",
                    "0px 0px 30px 10px rgba(34, 197, 94, 0.8)",
                    "0px 0px 0px 0px rgba(20, 83, 45, 0.4)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full"
              ></motion.span>
              <p className="text-lg">Front End Developer - Intermediate</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-1 font-medium">Soft Skill</h3>
            {text.map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-gray-800"></div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-3 md:row-start-1 md:row-span-4 mt-4 md:mt-0">
          <h1 className="text-2xl md:w-33 border-b border-b-black mb-5 font-bold text-center">
            Experience
          </h1>
          <div className="mb-5">
            <h3 className="text-xl mb-2 font-medium">
              Internship at the Central Tapanuli Education Office
            </h3>
            <p className="text-lg">
              Previously served as Frontend Developer at the Central Tapanuli
              Education Office during the period July 2025 to December 2025.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2 font-medium">
              2024 North Sumatra Vocational High School Student Worksheet
              Competition
            </h3>
            <p className="text-lg">
              Participant in the North Sumatra LKS competition in the field of
              Web Technology (April 2024), where he succeeded in building an
              online shop site with a stock management system and minimalist
              design.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-1 md:row-start-5 mt-4">
          <h3 className="md:w-30 text-center border-b border-b-black text-2xl font-bold mb-3">
            Education
          </h3>
          <div className="flex items-center justify-start gap-3">
            <motion.span
              animate={{
                backgroundColor: ["#22c55e", "#14532d", "#22c55e"],
                boxShadow: [
                  "0px 0px 0px 0px rgba(34, 197, 94, 0.4)",
                  "0px 0px 30px 10px rgba(34, 197, 94, 0.8)",
                  "0px 0px 0px 0px rgba(20, 83, 45, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full"
            ></motion.span>
            <a href="https://www.smknegeri1lumut.sch.id" className="text-lg">
              SMKN 1 LUMUT - Teknik Komputer Jaringan
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
