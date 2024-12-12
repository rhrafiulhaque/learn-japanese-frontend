import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSidebar";

const Layout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <div className="bg-[#F5F3FF] min-h-screen flex relative">
      <AdminSideBar
        showMobileMenu={showMobileMenu}
        toggleMenu={toggleMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <div
        className="lg:hidden md:hidden fixed top-4 left-4 z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        <CiMenuBurger className="text-[30px] p-2 text-white bg-black rounded-full" />
      </div>
      <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
