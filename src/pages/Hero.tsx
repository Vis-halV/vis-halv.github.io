import { AsciiArt } from "@/components/blocks/AsciiArt";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen max-w-7xl mx-auto  flex items-center justify-center">
            <div className="min-h-screen flex items-center justify-center">
                <AsciiArt
                    src="/x.png"
                    width={180}
                    className="opacity-65"
                />
            </div>
        </section>
    );
}