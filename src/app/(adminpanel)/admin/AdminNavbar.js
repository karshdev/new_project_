import React from 'react'

const AdminNavbar = () => {
  return (
    <nav className="p-6 text-white bg-gradient-to-tr ">
      <div className=" flex items-center justify-between ">
        <div className="flex items-center">
          <h1 className="text-black font-semibold">Bhajans.com</h1>
        </div>
        <div className="space-x-4">
          <a
            href="/admin/chalisa"
            className=" bg-orange-500 p-2 border-transparent border-[3px] rounded-[10px] hover:underline text-[14px] text-black font-semibold sm:hover:underline sm:text-[20px] sm:text-black sm:font-semibold"
          >
            Add Chalisa
          </a>
          <a
            href="/admin/aarti"
            className="bg-orange-500 p-2 border-transparent border-[3px] rounded-[10px] hover:underline text-[14px] text-black font-semibold sm:hover:underline sm:text-[20px] sm:text-black sm:font-semibold"
          >
            Add Aarti
          </a>
          <a
            href="/admin/bhajans"
            className="bg-orange-500 p-2 border-transparent border-[3px] rounded-[10px] hover:underline text-[14px] text-black font-semibold sm:hover:underline sm:text-[20px] sm:text-black sm:font-semibold"
          >
            Add Bhajans
          </a>
          <a
            href="/admin/katha"
            className="bg-orange-500 p-2 border-transparent border-[3px] rounded-[10px] hover:underline text-[14px] text-black font-semibold sm:hover:underline sm:text-[20px] sm:text-black sm:font-semibold"
          >
            Add Kathas
          </a>
        </div>

        <button className="hover:underline w-[max-content] h-7 px-[8px] py-[8px] bg-red-600 border border-white justify-center items-center gap-[10px] inline-flex sm:hover:underline sm:w-[max-content] sm:h-10 sm:px-[20px] sm:py-[17px] sm:bg-red-600 sm:border sm:border-white sm:justify-center sm:items-center sm:gap-[10px] sm:inline-flex">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar
