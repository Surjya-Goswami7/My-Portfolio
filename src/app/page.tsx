import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ThemeToggle from "./components/theme-toggle";

export default function Page() {
  return (
    <main className="scroll-smooth bg-[#F0F8FF] ">
      <Introduction />
      <Experience />
      <Projects />
      <Technologies />
      <Education />
      <Contact />
      {/* <ThemeToggle /> */}
    </main>
  );
}
