import React from "react";
import { BsSearch } from "react-icons/bs"; // Assuming you're using React Icons for the search icon

function Sidebar() {
  return (
    <div className="hidden sm:w-1/3 sm:block bg-white shadow-lg p-4 rounded-lg">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow outline-none"
        />
        <BsSearch className="text-gray-500 cursor-pointer" />
      </div>

      {/* Heading: Top Features */}
      <h2 className="text-center font-serif text-[30px]">Top Featured</h2>

      {/* Photo with Description */}
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 ">
          <img
            src="/hanumanJi.webp"
            alt="Profile"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="ml-2">
          <p className="font-semibold">Photo Title</p>
          <p className="text-sm text-gray-500">Some description here</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
