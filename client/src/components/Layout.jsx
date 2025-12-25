import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import ProductSlider from "./ProductSlider";

const Layout = () => {
  return (
    <>
      <main className="w-full max-w-7xl mx-auto grid grid-cols-[200px_1fr] gap-2 m-2">
        <div className="bg-white py-2 px-4 rounded-xl min-h-screen">
          <Link to="/">
            <img className="w-30 mt-5 place-self-center" src="/fitzdo.svg" alt="sidebar-logo" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 min-h-screen">
          <NavBar />
          <div className="bg-white py-2 px-4 rounded-xl h-full">
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="w-full max-w-7xl h-20 flex items-center justify-center mx-auto bg-white py-2 px-4 rounded-xl">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
