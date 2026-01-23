import { IoCartOutline } from "react-icons/io5";
import { useNavigate, NavLink } from "react-router-dom";
import { useCart } from "../store";

export default function Navbar() {
  const navigate = useNavigate();
  const { items } = useCart();
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
      <button className="relative">
        <IoCartOutline
          onClick={() => navigate("/cart")}
          className="text-3xl text-white cursor-pointer"
        />
        {items.length != 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-xs font-bold text-MentGrean bg-white rounded-full">
            {items.length}
          </span>
        )}
      </button>
    </nav>
  );
}
