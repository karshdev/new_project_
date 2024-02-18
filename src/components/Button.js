"use client"
import React from 'react'
import clsx from "clsx";
const Button = (props) => {
    const { className = "", lableText, url, bgColor } = props;
  return (
    <div>
      <button
        className={clsx(
          `${bgColor}  hover:scale-[1.1] transition-all text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`,
          className
        )}
        onClick={() => {
          window.location.href = url; 
        }}
      >
        {lableText}
      </button>
    </div>
  );
}
export default Button