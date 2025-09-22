"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics & Communication",
      school: "Academy of Technology",
      score: "CGPA: 8.60",
      year: "2020 - 2024",
    },
    {
      degree: "Higher Secondary (Science)",
      school: "Vivekananda Academy",
      score: "61%",
      year: "2019 - 2020",
    },
    {
      degree: "Secondary Education",
      school: "Techno India Group Public School",
      score: "84%",
      year: "2017 - 2018",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-12"
      >
        Education
      </motion.h2>

      <div className="relative max-w-3xl w-full">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-violet-700/30 rounded-full" />

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              {/* Timeline dot */}
              <span className="absolute left-4 top-4 w-5 h-5 rounded-full bg-violet-500 border-4 border-gray-950 shadow-lg" />

              <div className="bg-gradient-to-br from-violet-800/40 to-violet-600/10 backdrop-blur-xl p-6 rounded-2xl border border-violet-700/40 shadow-md hover:shadow-violet-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-violet-400 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                <p className="text-violet-300 mt-2 font-medium">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
