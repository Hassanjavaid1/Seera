import { RiHome4Line } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuFilePen } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-[20px] z-10 w-[95%] bg-[#2A2B2C] m-auto my-6 px-3 py-1 rounded-md sm:w-fit sm:px-5 sm:py-2 xl:py-1 xl:static">
      <div className="flex items-center justify-center gap-1 text-2xl xl:gap-4">
        <NavLink
          to="/Seera/"
          end
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
          title="Home"
        >
          <RiHome4Line />
        </NavLink>

        <NavLink
          to="/Seera/projects"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white  xl:p-3 ${
              isActive ? " bg-[#8C49E9] " : ""
            }`
          }
          title="Projects"
        >
          <FaRegFolder />
        </NavLink>

        <NavLink
          to="/Seera/tools"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
          title="Tools"
        >
          <FiTool />
        </NavLink>

        <NavLink
          to="/Seera/work"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
          title="Work"
        >
          <IoBriefcaseOutline />
        </NavLink>

        <NavLink
          to="Seera/thoughts"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
          title="Thoughts"
        >
          <LuFilePen />
        </NavLink>

        <NavLink
          to="/Seera/contact"
          className={({ isActive }) =>
            `p-2 rounded-md cursor-pointer hover:bg-[#8C49E9] hover:text-white xl:p-3 ${
              isActive ? "bg-[#8C49E9] " : ""
            }`
          }
          title="Contact"
        >
          <MdOutlineEmail />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
