import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

function Hero() {
  return (
    <section className="w-full bg-[#0c0c0c] px-[5%] pb-10">
      <div className="flex flex-col">

        {/* Hero main */}
        <div className="sm:hidden mt-20 mb-6 w-full text-justify">
          <p className="departure-mono">
            I design by blending psychology, & <br />
            by understanding people &hearts;
          </p>
        </div>

        <div className="hidden sm:flex mt-20 mb-6 w-full md:w-[70%]">
          <p className="departure-mono">
            I design with an artistic mindset - blending psychology, & deep
            understanding of people &hearts;
          </p>
        </div>

        {/* Hero sub */}
        <div className="jet-mono-regular text-[#fcfcfc] flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

          {/* Left text */}
          <div className="w-full md:w-[70%] space-y-2 opacity-65 text-sm md:text-xl">
            <p>Calm soul ☮, Chasing dreams ✨</p>
            <p>Based in Chennai, India.</p>
          </div>

          {/* Right CTA */}
          <div className="w-full md:w-[30%] text-left md:text-right md:mt-4 opacity-85">
            <span className="hidden md:flex"><br /><br /></span>
            <h3 className="flex items-center gap-2 md:justify-end">
              Featured work
              <FontAwesomeIcon icon={faArrowAltCircleDown} className="w-4 h-4" />   
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
