// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section className="min-h-screen flex items-center justify-center lg:px-40 md:px-20 pt-25" id="contact">
      <motion.div 
        className="max-w-6xl w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-8" variants={fadeIn}>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-800">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Do you have any questions or want to collaborate? Please send me a message, and I’ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-slate-200/50 backdrop-blur-md rounded-t-3xl md:rounded-3xl p-8 lg:p-12 border border-slate-300/50 shadow-2xl">
          
          <motion.div className="lg:col-span-2 flex flex-col justify-between space-y-8" variants={fadeIn}>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h3>
              <p className="text-slate-600 mb-8">
                You can also contact me directly using the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-4 bg-slate-300/50 border border-slate-400/50 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Email Me</p>
                    <a href="mailto:afdalxzx@gmail.com" className="text-base font-semibold text-slate-900">
                      afdalxzx@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-4 bg-slate-300/50 border border-slate-400/50  rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-800">Call Me</p>
                    <p className="text-base font-semibold text-slate-900">+62 831 3656 1343</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-4 bg-slate-300/50 border border-slate-400/50  rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-800">Location</p>
                    <p className="text-base font-semibold text-slate-900">Tapanuli Tengah, Sumatera Utara</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-32 h-32 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div className="lg:col-span-3" variants={fadeIn}>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              onSubmit={() => setIsSubmitted(true)}
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="dadeffb8-23b8-4aa5-906c-e884ad6a175f" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-slate-800">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-slate-200/60 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-slate-800">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-slate-100/60 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="yourname@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-slate-800">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full bg-slate-100/60 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Proposals for Collaboration / Enquiries"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-slate-800">Message</label>
                <textarea 
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-slate-100/60 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button
                type="submit"
                className="w-full text-slate-100 bg-blue-800/80 border border-blue-900/80 font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
              >
                <span>Send a message</span>
                <Send className="w-5 h-5" />
              </button>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl flex items-center space-x-3 text-blue-400"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Terima kasih! Pesan kamu berhasil dikirim.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}