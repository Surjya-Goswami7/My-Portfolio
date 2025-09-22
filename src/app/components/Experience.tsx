"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Internship @ FawksAI",
      duration: "4 months",
      description:
        "Learned Next.js, n8n, Express.js, TailwindCSS while contributing to real projects.",
      icon: "/Fawks-ai-logo.png",
    },
    {
      title: "My Journey in Progress",
      duration: "I'm still learning!",
      description:
        "Just started my journey as a developer, learning and growing every day. The best of me is yet to come!",
      icon: "/journey.jpg",
      progress: 30,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-12 text-center"
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center p-6 rounded-2xl
                       bg-gradient-to-br from-violet-800/20 to-violet-600/10 backdrop-blur-xl
                       border border-violet-700/30 shadow-2xl hover:shadow-violet-500/30 hover:scale-105
                       transition-transform duration-300"
          >
            {exp.icon && (
              <div className="w-36 h-36 mb-4 rounded-xl shadow-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <Image
                  src={exp.icon}
                  alt={`${exp.title} logo`}
                  width={144}
                  height={144}
                  className="object-contain w-full h-full"
                />
              </div>
            )}

            <h3 className="text-xl font-semibold text-white mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2">{exp.duration}</p>
            <p className="text-gray-200 text-sm mb-4">{exp.description}</p>

            {exp.progress !== undefined && (
              <div className="w-full relative mt-4">
                <div
                  className="absolute -top-6 text-sm font-semibold text-gray-200"
                  style={{
                    left: `${exp.progress}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {exp.progress}%
                </div>

                <div className="w-full bg-gray-700/40 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-pulse"
                    style={{ width: `${exp.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
