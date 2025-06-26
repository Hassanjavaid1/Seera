import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
  return (
    <section className="relative group bg-[#2A2B2C] duration-200 hover:bg-[#8C49E9] cursor-pointer m-3 p-4 rounded-xl lg:p-6 xl:my-20" data-aos="fade-down">
      <h1 className="text-4xl py-4 mr-10 lg:text-[48px] xl:text-[58px] xl:leading-tight xl:mr-22">
        Let's{" "}
        <span className="text-[#8C49E9] group-hover:text-white">
          Collaborate
        </span>
      </h1>
      <div className="absolute top-[19px] right-[12px] flex items-center justify-center bg-white text-[#8C49E9] w-[49px] h-[49px] rounded-full duration-300 group-hover:scale-110 xl:right-[20px]">
        <FaArrowRightLong className="text-2xl rotate-[324deg]" />
      </div>

      <p className="text-gray-300">
        Unlock the potential of your product with expert design and development
        services. Let’s collaborate to create user-centered solutions that not
        only meet your goals but also delight your users. Made by T
      </p>
    </section>
  );
}

export default Contact;
