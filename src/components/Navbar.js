import React from 'react'
import { FiMenu } from "react-icons/fi";
import Hamburger from './Hamburger';



const Navbar = () => {
  return (
    <main className="w-[100%]  ">
      <div className="sm:flex sm:justify-between sm:items-center  sm:w-full sm:max-w-screen-xl sm:mx-auto h-20 lg:h-[110px] ">
        <a className=" cursor-pointer hidden sm:block" href='/'>Bhajans.com</a>
        <section className="fixed sm:left-[36%] w-[100%] flex items-center justify-between sm:justify-center h-[4.5rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:h-[3.25rem] sm:w-[25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
          <nav className="flex flex-wrap text-[17px] items-center justify-center gap-y-1  font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <a href="/chalisa" className="p-2  cursor-pointer">
              Chalisa
            </a>
            <a href="/aarti" className="p-2  cursor-pointer">
              Aarti
            </a>
            <a href="/bhajan" className=" p-2  cursor-pointer">
              Bhajans
            </a>
            <a href="/katha" className=" p-2  cursor-pointer">
              Kathas
            </a>
          </nav>
          <nav className="flex flex-wrap text-[17px] items-center justify-center gap-y-1  font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <Hamburger />
          </nav>
        </section>
        <nav className="flex gap-5">
          <a
            href="/contact-us"
            className=" cursor-pointer hidden sm:block"
          >
            Contact Us
          </a>
          <a href="/about-us" className=" cursor-pointer hidden sm:block">
            About Us
          </a>
        </nav>
      </div>
    </main>
  );
}

export default Navbar
