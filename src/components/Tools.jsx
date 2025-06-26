import React from "react";

function Tools() {
  return (
    <section className="p-4 xl:my-20">
      <h1 className="text-4xl text-center py-4 lg:text-[48px]"  data-aos="fade-down">
        Top-Tier Tools for Exceptional{" "}
        <span className="text-[#8C49E9]">Results</span>
      </h1>
      {/* Tools */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2 lg:mt-3" data-aos="fade-down">
        <div className="bg-[#323335] duration-200 hover:bg-[#8D4AEA] flex items-center gap-2 rounded-xl p-2">
          <img
            src={"/Seera/tool-logo1.avif"}
            alt={"tool1"}
            className="w-[60px] object-cover duration-600 group-hover:scale-110"
          />
          <div className="p-1">
            <h1 className="text-2xl group-hover:text-[#8C49E9]">SiteFlow</h1>
            <p className="text-gray-300 font-normal">Website Builder</p>
          </div>
        </div>
        <div className="bg-[#323335] duration-200 hover:bg-[#8D4AEA] flex items-center gap-2 rounded-xl p-2">
          <img
            src={"/Seera/tool-logo2.avif"}
            alt={"tool1"}
            className="w-[60px] object-cover duration-600 group-hover:scale-110"
          />
          <div className="p-1">
            <h1 className="text-2xl group-hover:text-[#8C49E9]">JuiceBox</h1>
            <p className="text-gray-300 font-normal">Website Builder</p>
          </div>
        </div>
        <div className="bg-[#323335] duration-200 hover:bg-[#8D4AEA] flex items-center gap-2 rounded-xl p-2">
          <img
            src={"/Seera/tool-logo3.avif"}
            alt={"tool1"}
            className="w-[60px] object-cover duration-600 group-hover:scale-110"
          />
          <div className="p-1">
            <h1 className="text-2xl group-hover:text-[#8C49E9]">Pixels</h1>
            <p className="text-gray-300 font-normal">Website Builder</p>
          </div>
        </div>
        <div className="bg-[#323335] duration-200 hover:bg-[#8D4AEA] flex items-center gap-2 rounded-xl p-2">
          <img
            src={"/Seera/tool-logo4.avif"}
            alt={"tool1"}
            className="w-[60px] object-cover duration-600 group-hover:scale-110"
          />
          <div className="p-1">
            <h1 className="text-2xl group-hover:text-[#8C49E9]">Talk AI</h1>
            <p className="text-gray-300 font-normal">Website Builder</p>
          </div>
        </div>
        <div className="bg-[#323335] duration-200 hover:bg-[#8D4AEA] flex items-center gap-2 rounded-xl p-2">
          <img
            src={"/Seera/tool-logo5.avif"}
            alt={"tool1"}
            className="w-[60px] object-cover duration-600 group-hover:scale-110"
          />
          <div className="p-1">
            <h1 className="text-2xl group-hover:text-[#8C49E9]">Note Space</h1>
            <p className="text-gray-300 font-normal">Website Builder</p>
          </div>
        </div>
        <div className="bg-[#323335] duration-200 hover:bg-[#8D4AEA] flex items-center gap-2 rounded-xl p-2">
          <img
            src={"/Seera/tool-logo6.avif"}
            alt={"tool1"}
            className="w-[60px] object-cover duration-600 group-hover:scale-110"
          />
          <div className="p-1">
            <h1 className="text-2xl group-hover:text-[#8C49E9]">WebCraft</h1>
            <p className="text-gray-300 font-normal">React framework</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
