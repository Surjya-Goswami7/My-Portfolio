"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Movie Explorer",
    description:
      "Discover movies with a sleek Next.js & TMDB-powered explorer.",
    tech: ["Next.js", "API Integration"],
    link: "https://movie-exp-eight.vercel.app/",
  },
  {
    title: "Multi-Agent AI System",
    description: "An intelligent multi-agent system for automation tasks.",
    tech: ["Next.js", "n8n", "AI agents"],
    link: "https://github.com/Surjya-Goswami7/Multi-Agent-App",
  },
  {
    title: "E-commerce Dashboard",
    description: "Modern dashboard for managing products, sales & users.",
    tech: ["Power Bi", "Excel", "Python"],
    link: "https://github.com/Surjya-Goswami/Madhav-Ecommerce-Sales-Dashboard",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-12"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-violet-800/40 to-violet-600/20 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-violet-700/30 hover:border-violet-500/60 hover:shadow-violet-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-300 text-sm">{p.description}</p>
              <p className="mt-2 text-xs text-gray-400">
                Tech: {p.tech.join(", ")}
              </p>
            </div>

            <Link
              href={p.link}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-violet-600/80 rounded-lg text-white font-medium text-sm hover:bg-violet-500 transition-colors"
            >
              View Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
