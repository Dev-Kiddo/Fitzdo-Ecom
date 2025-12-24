import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className="flex flex-col w-full max-w-7xl mx-auto gap-0.5">
      <section className="bg-white py-2 px-4 rounded-t-xl flex justify-between items-center">
        <div>Products List</div>
        <div className="w-3xl flex gap-12">
          <form className="max-w-md mx-auto flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-2 ps-9 border border-gray-medium rounded-full text-sm outline-none"
                placeholder="Search for Bookings, Equiries, Staffs & Client"
                required
              />
            </div>
          </form>

          <div className="flex items-center gap-2.5">
            <div className="font-medium text-right">
              <div className="text-sm">Prasanth S</div>
              <div className="text-xs font-normal text-body">Fullstack Developer</div>
            </div>
            <Link to="/register">
              <img className="w-10 h-10 p-1 rounded-full ring-gray-medium ring-2 ring-default" src="./profile-picture.jpg" alt="avatar" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-2 px-4 rounded-b-xl flex justify-end">
        <select className="bg-gray-light px-2 py-2  text-sm text-gray-dark">
          <option>Most Recent</option>
          <option>Trending</option>
        </select>
      </section>
    </header>
  );
};

export default NavBar;
