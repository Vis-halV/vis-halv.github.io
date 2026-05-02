import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

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
  const { dark, setDark } = useTheme();
  const [active, setActive] = useState<string>("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
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
          onClick={() => setDark((d) => !d)}
          className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
            dark ? "bg-white" : "bg-black"
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
                      text-foreground/50 hover:text-background hover:bg-foreground 
                      transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            <span className="invisible">XX</span>
            X.com
            <span className="invisible">XX</span>
          </a>
        </Button>

        <Button
          asChild
          className="p-0 h-auto rounded-none
                  bg-foreground text-background
                  hover:bg-background shadow-none
                  hover:text-foreground transition-all duration-300"
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