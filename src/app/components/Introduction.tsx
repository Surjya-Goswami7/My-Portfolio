"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle, Download } from "lucide-react";

export default function Introduction() {
  const heading = "Hello, I'm Surjya Gopal Goswami".split(" ");

  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 
      bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.25),transparent_70%)]" />

      {/* Left Side: Floating Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ y: -10, rotate: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex-shrink-0"
      >
        {/* Subtle Glow (not too strong) */}
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-xl opacity-25" />

        {/* Main Image */}
        <img
          src="/me.jpg"
          alt="My photo"
          className="relative w-64 h-80 md:w-80 md:h-[420px] object-cover rounded-2xl 
      shadow-[0_8px_30px_rgba(0,0,0,0.6)] border-2 border-violet-400/60 
      brightness-110 saturate-125 transition-all duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Right Side: Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-violet-800/20 to-violet-600/10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-10 max-w-xl border border-violet-700/30"
      >
        {/* Heading Word by Word Animation */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex flex-wrap">
          {heading.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              className="mr-2 bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Intro Text */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          Motivated and detail-oriented{" "}
          <span className="font-semibold text-violet-300">
            Software Developer
          </span>{" "}
          with a strong foundation in{" "}
          <span className="font-semibold text-violet-300">web development</span>
          ,{" "}
          <span className="font-semibold text-violet-300">
            workflow automation
          </span>
          , and{" "}
          <span className="font-semibold text-violet-300">
            data-driven solutions
          </span>
          . Skilled in building{" "}
          <span className="font-semibold text-violet-300">responsive apps</span>
          , scalable automation with{" "}
          <span className="font-semibold text-violet-300">n8n</span>, and
          integrating{" "}
          <span className="font-semibold text-violet-300">RESTful APIs</span>.
          Passionate about{" "}
          <span className="font-semibold text-violet-300">
            UI/UX improvements
          </span>
          and{" "}
          <span className="font-semibold text-violet-300">
            performance optimization
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl shadow-lg transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          {/* Contact Section Scroll */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-violet-200 rounded-xl shadow-lg transition-all duration-300"
          >
            <ArrowDownCircle className="w-5 h-5" />
            Let’s Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
}
