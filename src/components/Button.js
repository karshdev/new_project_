"use client"
import React from 'react'
import clsx from "clsx";
const Button = (props) => {
    const { className = "", lableText,url } = props;
  return (
    <div>
      <button
        className={clsx(
          "bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
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
