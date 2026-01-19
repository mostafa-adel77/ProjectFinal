import { IoCartOutline } from "react-icons/io5";
import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
      const navigate = useNavigate();
  return (
          <nav className="hidden md:flex items-center gap-7 text-lg font-medium text-Gray">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "hover:text-white relative pb-2 " +
                (isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-Yellow"
                  : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Shop"
              className={({ isActive }) =>
                "hover:text-white relative pb-2 " +
                (isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-Yellow"
                  : "")
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                "hover:text-white relative pb-2 " +
                (isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-Yellow"
                  : "")
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                "hover:text-white relative pb-2 " +
                (isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-Yellow"
                  : "")
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                "hover:text-white relative pb-2 " +
                (isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-Yellow"
                  : "")
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/ContactUs"
              className={({ isActive }) =>
                "hover:text-white relative pb-2 " +
                (isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-Yellow"
                  : "")
              }
            >
              Contact us
            </NavLink>
            <IoCartOutline
              onClick={() => navigate("/cart")}
              className="text-3xl text-white cursor-pointer"
            />
          </nav>
  )
}
