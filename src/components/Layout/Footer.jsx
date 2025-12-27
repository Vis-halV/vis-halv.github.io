import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const email = "vishal06076@gmail.com";
  const emailRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = emailRef.current?.innerText;
    if (!email) return;

    // Select text visually
    const range = document.createRange();
    range.selectNodeContents(emailRef.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy
    navigator.clipboard.writeText(email);

    // Feedback
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      selection.removeAllRanges();
    }, 1200);
  };



  return (
    <footer className="pt-16 bg-[#ffbe66] text-black/65">

      {/* Main footer */}
      <div className="mx-auto w-full max-w-[90vw] xl:max-w-[1280px] px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Email */}
          <div className="space-y-3">
            <h3 className="jet-mono-bold text-[#B16F00] text-sm tracking-widest">
              Email? Email!
            </h3>

            <div className="flex items-center gap-3 lowercase">
              <span ref={emailRef} className="select-text">
                {email} <br />
              </span>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email"
                className={`rounded p-1 transition-colors duration-200
                  ${copied ? "bg-green-500 text-[#fcfcfc]" : "bg-[#fcfcfc] text-[#ffbe66]"}
                `}
              >
                <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
              </button>

              <span id="copyMsg" className="text-green-500">
                {copied ? "Copied" : ""}
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3 md:pl-20">
            <h3 className="jet-mono-bold text-[#B16F00] text-sm tracking-widest">
              Socials
            </h3>

            <ul className="space-y-2 text-sm sm:text-base">
              <li><a className="hover:underline" href="https://instagram.com/vis.hal007" target="_blank">Instagram</a></li>
              <li><a className="hover:underline" href="https://x.com/Vis_halV" target="_blank">Twitter</a></li>
              <li><a className="hover:underline" href="https://linkedin.com/in/vis-halv" target="_blank">LinkedIn</a></li>
              <li><a className="hover:underline" href="https://github.com/vis-halv" target="_blank">GitHub</a></li>
            </ul>
          </div>

          {/* Credits */}
          <div className="space-y-3 text-sm sm:text-base text-black/80">
            <p>Copyright © 2025 Vishal V.</p>
            <p className="leading-relaxed normal-case">
              This website is typeset in Departure Mono by Helena Zhang and
              JetBrains Mono by Philipp Nurullin.
            </p>
          </div>

        </div>
      </div>

      {/* Footer note */}
      <div className="h-[70px] bg-[#0c0c0c] flex items-center justify-center px-6">
        <p className="text-sm sm:text-base text-white/65 text-center normal-case">
          You could have been anywhere on the internet, yet you're here.
          Thanks for visiting!
        </p>
      </div>

    </footer>
  );
};

export default Footer;
