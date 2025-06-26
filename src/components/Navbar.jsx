import { RiHome4Line } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuFilePen } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-[20px] z-10 w-[95%] bg-[#2A2B2C] m-auto my-6 px-3 py-1 rounded-md sm:w-fit sm:px-5 sm:py-2 xl:py-1">
      <div className="flex items-center justify-center gap-1 text-2xl xl:gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
        >
          <RiHome4Line />
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white  xl:p-3${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
        >
          <FaRegFolder />
        </NavLink>

        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
        >
          <FiTool />
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
        >
          <IoBriefcaseOutline />
        </NavLink>

        <NavLink
          to="/thoughts"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
        >
          <LuFilePen />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
        >
          <MdOutlineEmail />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
