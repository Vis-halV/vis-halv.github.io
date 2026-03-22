import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Section = {
  label: string;
  id: string;
};

const sections: Section[] = [
  { label: "Hero", id: "hero" },
  { label: "Blog", id: "blog" },
  { label: "Projects", id: "projects" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Personal", id: "personal" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition"
        >
          VISANTH
        </button>
      </div>

      <div className="fixed top-6 right-6 z-50 p-2 rounded-full backdrop-blur-md">
        <button
          onClick={() => setDark(!dark)}
          className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
            dark
              ? "bg-foreground"
              : "bg-foreground"
          }`}
        />
      </div>

      <div className="hidden fixed left-6 top-1/2 -translate-y-1/2 z-50 md:flex flex-col">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3"
          >
            <span
                className={`block h-[1px] transition-all duration-300 ${
                    active === section.id
                    ? "w-10 bg-foreground opacity-100"
                    : "w-6 bg-foreground opacity-40 group-hover:opacity-100 group-hover:w-10"
                }`}
            />

            <span
                className={`text-xs transition-colors duration-300 ${
                    active === section.id
                    ? "opacity-100 text-foreground"
                    : "opacity-0 group-hover:opacity-100 text-foreground/70"
                }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>

      <div className="hidden fixed right-8 top-1/2 -translate-y-1/2 z-50 md:flex flex-col items-center gap-8">
        
        <Button
          asChild
          variant="ghost"
          className="p-0 h-auto rounded-none 
                    bg-transparent 
                    hover:bg-foreground/80 shadow-none"
        >
          <a
            href="https://x.com/Vis_halV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.35em]
                      px-[2px] py-2
                      text-foreground/50 hover:text-foreground
                      transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            X
          </a>
        </Button>

        <Button
          asChild
          className="p-0 h-auto rounded-none 
                    bg-foreground text-background 
                    hover:bg-foreground/80 shadow-none"
        >
          <a
            href="https://linkedin.com/in/vis-halv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.35em]
                      px-[2px] py-2
                      transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            LINKEDIN
          </a>
        </Button>

      </div>
    </>
  );
}