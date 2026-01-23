import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useCart } from "./store";
export default function MainLayout() {
  const [BarsOpen, setBarsOpen] = useState(false);
  const { items } = useCart();
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <header className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-5">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-4xl font-semibold">
              Furni<span className="text-Gray text-3xl">.</span>
            </Link>
            <Navbar />
            <FaBars
              onClick={() => setBarsOpen(!BarsOpen)}
              className="md:hidden text-3xl text-Gray cursor-pointer"
            />
          </div>
          {BarsOpen && (
            <div className="md:hidden mt-6 flex flex-col gap-6 text-Gray text-lg font-semibold">
              <NavLink to="/" onClick={() => setBarsOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/shop" onClick={() => setBarsOpen(false)}>
                Shop
              </NavLink>
              <NavLink to="/aboutUs" onClick={() => setBarsOpen(false)}>
                About us
              </NavLink>
              <NavLink to="/services" onClick={() => setBarsOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/blog" onClick={() => setBarsOpen(false)}>
                Blog
              </NavLink>
              <NavLink to="/contactUs" onClick={() => setBarsOpen(false)}>
                Contact us
              </NavLink>
              <button className="relative">
                <IoCartOutline
                  onClick={() => navigate("/cart")}
                  className="text-3xl text-white cursor-pointer"
                />
                {items.length != 0 && (
                  <span className="absolute -top-2 right-87 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-xs font-bold text-MentGrean bg-white rounded-full">
                    {items.length}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </header>
      {/* PAGE CONTENT */}
      <main className="w-full ">
        <Outlet />
      </main>
    </>
  );
}
