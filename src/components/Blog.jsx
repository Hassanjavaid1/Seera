function Blog() {
  return (
    <section className="p-4 xl:my-20">
      <h1 className="text-4xl text-center py-4 lg:text-[58px] xl:text-start xl:leading-tight" data-aos="fade-down">
        Design Thoughts and <span className="text-[#8C49E9]">Perspectives</span>
      </h1>
      {/* Blog */}
      <div className="grid grid-cols-1 gap-6 mt-3 lg:grid-cols-2 lg:gap-6" data-aos="fade-down">
        <div className="relative  cursor-pointer overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <div className="overflow-hidden">
            <img
              src={"/Seera/blog1.avif"}
              alt={"project"}
              className=" min-h-[300px] object-cover duration-500 group-hover:scale-110 xl:min-h-[200px] overflow-hidden xl:h-[300px] xl:w-full"
            />
          </div>
          <div className="bg-[#323335] p-4">
            <span className=" text-gray-300">Apr 2, 2025</span>
            <p className="text-2xl group-hover:text-[#8C49E9] font-normal">
              Lorem ipsum dolor sit amet consectetur natus.
            </p>
          </div>
        </div>
        <div className="relative  cursor-pointer overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <div className="overflow-hidden">
            <img
              src={"/Seera/blog2.avif"}
              alt={"project"}
              className=" min-h-[300px] object-cover duration-500 group-hover:scale-110 xl:min-h-[200px] overflow-hidden xl:h-[300px] xl:w-full"
            />
          </div>
          <div className="bg-[#323335] p-4">
            <span className=" text-gray-300">Apr 21, 2024</span>
            <p className="text-2xl group-hover:text-[#8C49E9] font-normal">
              Lorem ipsum dolor sit amet consectetur natus.
            </p>
          </div>
        </div>
        <div className="relative  cursor-pointer overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <div className="overflow-hidden">
            <img
              src={"/Seera/blog3.avif"}
              alt={"project"}
              className=" min-h-[300px] object-cover duration-500 group-hover:scale-110 xl:min-h-[200px] overflow-hidden xl:h-[300px] xl:w-full"
            />
          </div>
          <div className="bg-[#323335] p-4">
            <span className=" text-gray-300">Apr 21, 2024</span>
            <p className="text-2xl group-hover:text-[#8C49E9] font-normal">
              Lorem ipsum dolor sit amet consectetur natus.
            </p>
          </div>
        </div>
        <div className="relative  cursor-pointer overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <div className="overflow-hidden">
            <img
              src={"/Seera/blog4.avif"}
              alt={"project"}
              className=" min-h-[300px] object-cover duration-500 group-hover:scale-110 xl:min-h-[200px] overflow-hidden xl:h-[300px] xl:w-full"
            />
          </div>
          <div className="bg-[#323335] p-4">
            <span className=" text-gray-300">Apr 21, 2024</span>
            <p className="text-2xl group-hover:text-[#8C49E9] font-normal">
              Lorem ipsum dolor sit amet consectetur natus.
            </p>
          </div>
        </div>
        <div className="relative  cursor-pointer overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <div className="overflow-hidden">
            <img
              src={"/Seera/blog5.avif"}
              alt={"project"}
              className=" min-h-[300px] object-cover duration-500 group-hover:scale-110 xl:min-h-[200px] overflow-hidden xl:h-[300px] xl:w-full"
            />
          </div>
          <div className="bg-[#323335] p-4">
            <span className=" text-gray-300">Apr 21, 2024</span>
            <p className="text-2xl group-hover:text-[#8C49E9] font-normal">
              Lorem ipsum dolor sit amet consectetur natus.
            </p>
          </div>
        </div>
        <div className="relative  cursor-pointer overflow-hidden rounded-xl group sm:w-[80%] sm:m-auto lg:w-full">
          <div className="overflow-hidden">
            <img
              src={"/Seera/blog6.avif"}
              alt={"project"}
              className=" min-h-[300px] object-cover duration-500 group-hover:scale-110 xl:min-h-[200px] overflow-hidden xl:h-[300px] xl:w-full"
            />
          </div>
          <div className="bg-[#323335] p-4">
            <span className=" text-gray-300">Apr 21, 2024</span>
            <p className="text-2xl group-hover:text-[#8C49E9] font-normal">
              Lorem ipsum dolor sit amet consectetur natus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
