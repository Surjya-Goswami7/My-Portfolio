import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 
      bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-200 mb-10 text-center">
        Let’s Connect 🚀
      </h2>

      {/* Contact Card */}
      <div
        className="bg-violet-800/30 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-2xl 
        shadow-[0_0_25px_rgba(139,92,246,0.3)] max-w-lg w-full text-center border border-violet-500/40"
      >
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          I’m always open to opportunities, collaborations, or just a friendly
          chat. Reach out through any of the platforms below 👇
        </p>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:surjyagoswami1@gmail.com"
            className="flex items-center justify-center gap-3 p-4 rounded-xl 
              bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 
              text-white font-medium shadow-lg hover:shadow-violet-500/40 transition-all duration-300"
          >
            <Mail className="w-5 h-5" /> Email Me
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/916291179735"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl 
              bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 
              text-white font-medium shadow-lg hover:shadow-green-400/40 transition-all duration-300"
          >
            <Phone className="w-5 h-5" /> Chat on WhatsApp
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/surjya-gopal-goswami-a03877243/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl 
              bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 
              text-white font-medium shadow-lg hover:shadow-blue-400/40 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" /> View LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Surjya-Goswami7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl 
              bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 
              text-white font-medium shadow-lg hover:shadow-gray-400/40 transition-all duration-300"
          >
            <Github className="w-5 h-5" /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
