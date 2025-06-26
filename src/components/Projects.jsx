import React from "react";

function Projects() {
  return (
    <section className="p-4">
      <h1 className="text-4xl text-center py-4 lg:text-[58px] xl:text-start xl:leading-tight">
        Recent Projects and <span className="text-[#8C49E9]">Achievements</span>
      </h1>
      {/* Projects */}
      <div className="grid grid-cols-1 gap-6 mt-3 lg:grid-cols-2 lg:gap-6">
        <div className="relative overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <img
            src={"/project1.avif"}
            alt={"project"}
            className=" min-h-[300px] object-cover duration-300 group-hover:scale-110 xl:min-h-[250px] overflow-hidden"
          />
          <div className="bg-[#323335] p-4">
            <h2 className="text-2xl group-hover:text-[#8C49E9]">Revo</h2>
            <p className="text-gray-300 font-normal">SaaS Framer Template</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <img
            src={"/project2.avif"}
            alt={"project"}
            className=" min-h-[300px] object-cover duration-300 group-hover:scale-110 xl:min-h-[250px]"
          />
          <div className="bg-[#323335] p-4">
            <h2 className="text-2xl group-hover:text-[#8C49E9]">Revo</h2>
            <p className="text-gray-300 font-normal">SaaS Framer Template</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <img
            src={"/project4.avif"}
            alt={"project"}
            className=" min-h-[300px] object-cover duration-300 group-hover:scale-110 xl:min-h-[250px]"
          />
          <div className="bg-[#323335] p-4">
            <h2 className="text-2xl group-hover:text-[#8C49E9]">Revo</h2>
            <p className="text-gray-300 font-normal">SaaS Framer Template</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <img
            src={"/project3.avif"}
            alt={"project"}
            className=" min-h-[300px] object-cover duration-300 group-hover:scale-110 xl:min-h-[250px]"
          />
          <div className="bg-[#323335] p-4">
            <h2 className="text-2xl group-hover:text-[#8C49E9]">Revo</h2>
            <p className="text-gray-300 font-normal">SaaS Framer Template</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
