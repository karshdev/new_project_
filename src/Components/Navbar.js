import React from 'react'

const Navbar = () => {
  return (
    <main className="w-[100%] ">
      <div className="flex justify-between items-center  w-full max-w-screen-xl mx-auto h-20 lg:h-[110px] ">
        <a className="serif cursor-pointer">Bhajans.com</a>
        <section className="sticky flex items-center justify-center h-[4.5rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:h-[3.25rem] sm:w-[25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
          <nav className="flex flex-wrap text-[17px] items-center justify-center gap-y-1  font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <a href="/chalisa" className="p-2 serif cursor-pointer">
              Chalisa
            </a>
            <a href="/aarti" className="p-2 serif  serif cursor-pointer">
              Aarti
            </a>
            <a href="/bhajan" className=" p-2 serif  serif cursor-pointer">
              Bhajans
            </a>
            <a href="/katha"  className=" serif p-2 serif cursor-pointer">
              Kathas
            </a>
          </nav>
        </section>
        <nav className="flex gap-5">
          <a href='/contact-us' className="serif cursor-pointer">Contact Us</a>
          <a href='/about-us' className="serif cursor-pointer">About Us</a>
        </nav>
      </div>
    </main>
  );
}

export default Navbar
