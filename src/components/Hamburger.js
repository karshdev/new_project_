"use client"
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import {motion} from "framer-motion"
const Hamburger = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative h-[100%] w-[100%] flex items-center justify-center cursor-pointer z-[1000000]">
      <div className="sm:hidden absolute right-[10px] text-[20px]">
        <FiMenu onClick={() => setMenu(!menu)} />
      </div>
      {menu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-[0px] mb-[2px] z-[1000] right-0 mt-10 bg-white shadow-md rounded-lg h-[100px] w-[200px]"
        >
          <div className="p-4 flex flex-col gap-2">
            <motion.a
              href="/contact-us"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" text-black"
            >
              Contact Uss
            </motion.a>
            <motion.a
              href="/about-us"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" text-black"
            >
              About Us
            </motion.a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
