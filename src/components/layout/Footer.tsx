import { Copy } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "vishal06076@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 800);
    });
  };

  return (
    <footer id="footer" className="mt-16 border-t border-border">
    
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 items-start gap-12">
        
        {/* LEFT — Email */}
        <div className="space-y-4">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Email
        </p>

        <div className="flex items-center gap-3">
            <span className="text-base">{email}</span>

            <button
            onClick={copyEmail}
            className={`p-2 transition ${
                copied
                ? "bg-green-500 text-background"
                : "bg-foreground text-background hover:opacity-80"
            }`}
            >
            <Copy size={16} />
            </button>
        </div>
        </div>

        {/* CENTER — Socials */}
        <div className="space-y-4 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Socials
        </p>

        <ul className="space-y-2">
            {[
            ["Instagram", "https://www.instagram.com/vis.hal007/"],
            ["Twitter", "https://twitter.com"],
            ["LinkedIn", "https://www.linkedin.com/in/vis-halv"],
            ["GitHub", "https://github.com"],
            ].map(([name, link]) => (
            <li key={name}>
                <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                >
                {name}
                </a>
            </li>
            ))}
        </ul>
        </div>

        {/* RIGHT — Copyright */}
        <div className="space-y-4 text-right">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Credits
        </p>

        <p className="text-sm">© 2025 Vishal V</p>
        </div>
    </div>

    {/* Bottom strip */}
    <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center text-xs opacity-70 text-center">
            You could  have been anywhere on the internet, yet you're here.
        </div>
    </div>

    </footer>
  );
}