import Marquee from "react-fast-marquee";
import { HiArrowLongRight } from "react-icons/hi2";

function HeroSection() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-[48px] text-center leading-tight lg:text-[48px] xl:text-[64px] xl:text-start">
          Transforming Your Ideas into{" "}
          <span className="text-[#8C49E9]">Reality</span>
        </h1>
        <p className="text-center my-3 text-gray-300 xl:text-[18px] xl:text-start">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
        <div className=" flex items-center justify-center flex-wrap gap-8 pb-8 mt-12 xl:gap-16 xl:justify-start">
          <h2 className="text-5xl flex flex-col items-center justify-center font-sans-serif gap-2 sm:font-semibold lg:text-6xl xl:text-7xl">
            <span>+12</span>
            <span className=" text-sm text-gray-300 ">
              YEARS OF <br /> EXPERIENCE
            </span>
          </h2>
          <h2 className="   text-5xl flex flex-col items-center justify-center font-sans-serif gap-2 sm:font-semibold lg:text-6xl xl:text-7xl">
            <span>+46</span>
            <span className=" text-sm text-gray-300 ">
              PROJECTS <br /> COMPLETED
            </span>
          </h2>
          <h2 className=" text-5xl flex items-center flex-col justify-center font-sans-serif gap-2 sm:font-semibold lg:text-6xl xl:text-7xl">
            <span>+20</span>
            <span className=" text-sm text-gray-300">
              WORLDWIDE <br />
              CLIENTS
            </span>
          </h2>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 xl:justify-start">
          <button className="bg-[#8C49E9] p-2 px-6 rounded-lg mt-4 cursor-pointer lg:px-12 lg:p-3">
            Let's Talk
          </button>
          <button className="flex items-center gap-2 p-2 px-6 rounded-lg mt-4 cursor-pointer lg:p-3">
            My Work <HiArrowLongRight />
          </button>
        </div>
        <div className="p-4">
          <h4 className="text-gray-300 my-4 text-center xl:text-start xl:text-lg">
            Relied on by companies near, far, and worldwide
          </h4>
          <Marquee pauseOnHover={true}>
            <div className="flex items-center gap-[4rem]">
              <img
                src="/logo1.avif"
                alt="logo"
                className="w-[200px] object-cover"
              />
              <img
                src="/logo2.avif"
                alt="logo"
                className="w-[200px] object-cover"
              />
              <img
                src="/logo3.avif"
                alt="logo"
                className="w-[200px] object-cover"
              />
              <img
                src="/logo4.avif"
                alt="logo"
                className="w-[200px] object-cover"
              />
              <img
                src="/logo5.avif"
                alt="logo"
                className="w-[200px] object-cover"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
