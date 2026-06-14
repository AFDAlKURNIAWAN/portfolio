// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingLoop = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setDisplayedText(currentText.substring(0, displayedText.length + 1));

        if (displayedText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // deleting
        setDisplayedText(currentText.substring(0, displayedText.length - 1));

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <motion.h1>
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
};

export default TypingLoop;