"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiVercel,
  SiVite,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di"; // ✅ Java from devicons
import { FaProjectDiagram } from "react-icons/fa";

const tech = [
  // Languages
  { name: "Java", icon: DiJava },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SQL", icon: SiMysql },

  // Frontend
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },

  // Backend
  { name: "Node.js", icon: SiNodedotjs },
  { name: "n8n", icon: FaProjectDiagram },

  // Tools/Hosting
  { name: "Vercel", icon: SiVercel },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-12"
      >
        Technologies
      </motion.h2>

      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl w-full">
        {tech.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-violet-800/30 to-violet-600/10 border border-violet-600/40 shadow-md hover:shadow-violet-400/20 transition-all duration-300 cursor-pointer backdrop-blur-lg"
            >
              <Icon className="text-5xl text-violet-400 mb-3 group-hover:text-violet-300 transition-colors" />
              <p className="text-white font-medium">{t.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
