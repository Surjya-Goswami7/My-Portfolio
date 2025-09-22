import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-violet-200 mb-10 text-center">
        Let’s Connect 🚀
      </h2>

      {/* Contact Card */}
      <div
        className="bg-violet-800/30 backdrop-blur-xl p-8 md:p-12 rounded-2xl 
        shadow-[0_0_25px_rgba(139,92,246,0.3)] max-w-2xl w-full text-center border border-violet-500/40"
      >
        <p className="text-lg text-gray-300 mb-6">
          I’m always open to opportunities, collaborations, or just a friendly
          chat. Feel free to reach out through any of the platforms below 👇
        </p>

        <div className="grid gap-6 md:gap-8">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=surjyagoswami1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
              bg-violet-700/30 hover:bg-violet-600/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]
              transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-violet-300 group-hover:text-white transition" />
            <span className="text-lg text-gray-200 group-hover:text-white transition">
              surjyagoswami1@gmail.com
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/916291179735"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
              bg-violet-700/30 hover:bg-violet-600/40 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]
              transition-all duration-300 group"
          >
            <Phone className="w-6 h-6 text-violet-300 group-hover:text-green-400 transition" />
            <span className="text-lg text-gray-200 group-hover:text-white transition">
              +91 6291179735
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/surjya-gopal-goswami-a03877243/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
              bg-violet-700/30 hover:bg-violet-600/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
              transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-violet-300 group-hover:text-blue-400 transition" />
            <span className="text-lg text-gray-200 group-hover:text-white transition">
              linkedin.com/in/Surjya Gopal Goswami
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Surjya-Goswami7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
              bg-violet-700/30 hover:bg-violet-600/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
              transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-violet-300 group-hover:text-gray-100 transition" />
            <span className="text-lg text-gray-200 group-hover:text-white transition">
              github.com/Surjya Gopal Goswami
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
