// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  const formatWaktu = waktu.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 pt-8 pb-4 border-t border-slate-800 font-sans">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className='space-y-4'>
            <h2 className="text-2xl font-bold text-white tracking-wider">
              AFDAL
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Membangun masa depan digital dengan solusi web yang modern, cepat, dan inovatif. Hubungi kami untuk merealisasikan ide hebat Anda.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center my-3">
            <div className="flex items-center justify-center gap-3 text-blue-200 hover:text-blue-100 transition duration-300 ease-in-out text-base font-medium underline">
              <a href="https://github.com/AFDAlKURNIAWAN" target="_blank">Github</a>
              <a href="https://discord.gg/x2PDCdD6" target="_blank">Discord</a>
            </div>

            <div className="flex items-center justify-center gap-3 px-3 py-1.5 border border-slate-700 rounded-2xl mt-3">
              <motion.span
                  animate={{
                  backgroundColor: [ "#22c55e", "#14532d", "#22c55e" ],
                  boxShadow: [
                  "0px 0px 0px 0px rgba(34, 197, 94, 0.4)",
                  "0px 0px 30px 10px rgba(34, 197, 94, 0.8)",
                  "0px 0px 0px 0px rgba(20, 83, 45, 0.4)"
                ]}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: "easeInOut"
                }}
                className='w-2 h-2 rounded-full'
              ></motion.span>
              <p className="font-medium text-base">{formatWaktu}</p>
            </div>
          </div>
        </div>

        <hr className="border-slate-800 my-4" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} AFDAL. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;