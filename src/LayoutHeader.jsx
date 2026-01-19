
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function LayoutHeader() {
  const [BarsOpen, setBarsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">
              Furni<span className="text-Gray text-3xl">.</span>
            </h1>

            <Navbar />

            <FaBars
              onClick={() => setBarsOpen(!BarsOpen)}
              className="md:hidden text-3xl text-Gray cursor-pointer"
            />
          </div>

          {BarsOpen && (
            <div className="md:hidden mt-6 flex flex-col gap-6 text-Gray text-lg font-semibold">
              <NavLink to="/" onClick={() => setBarsOpen(false)}>Home</NavLink>
              <NavLink to="/shop" onClick={() => setBarsOpen(false)}>Shop</NavLink>
              <NavLink to="/aboutUs" onClick={() => setBarsOpen(false)}>About us</NavLink>
              <NavLink to="/services" onClick={() => setBarsOpen(false)}>Services</NavLink>
              <NavLink to="/blog" onClick={() => setBarsOpen(false)}>Blog</NavLink>
              <NavLink to="/contactUs" onClick={() => setBarsOpen(false)}>Contact us</NavLink>

              <div className="flex items-center gap-3 text-white">
                <IoCartOutline className="text-3xl" />
              </div>
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
