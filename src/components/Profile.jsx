import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Profile() {
  return (
    <section className="bg-[#2A2B2C] mx-3 px-4 my-8 py-6 rounded-xl xl:h-max xl:sticky xl:top-[40px]" data-aos="fade-down">
      <div className="p-4">
        <img src="/Seera/user.jpg" alt="user" className="w-[80%] m-auto object-cover rounded-xl sm:w-[60%] md:w-[45%] xl:w-full" />
        <div className="flex flex-col items-center justify-center gap-3 mt-5">
          <h1 className="text-3xl lg:text-4xl">Abraham James</h1>
          <p className="text-gray-300 text-center">Product Designer & Developer Istanbul, Turkey</p>
          <div className="flex items-center justify-around gap-5 text-2xl">
            <a href="/Seera" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg duration-300 hover:bg-[#8C49E9]"><FaDribbble /></a>
            <a href="/Seera" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg duration-300 hover:bg-[#8C49E9]"><FaXTwitter  /></a>
            <a href="/Seera" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg duration-300 hover:bg-[#8C49E9]"><FaInstagram   /></a>
            <a href="/Seera" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center rounded-lg duration-300 hover:bg-[#8C49E9]"><CiMail    /></a>
          </div>
          <button className="bg-[#8C49E9] p-3 px-12 rounded-lg mt-4 cursor-pointer sm:px-20">Let's Talk</button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
