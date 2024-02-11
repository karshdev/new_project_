import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const MostSearchEd = ({ value }) => {
  return (
    <main className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:items-start mt-10 z-[100] bg-gradient-to-br from-gray-200 to-white p-6 rounded-lg shadow-md">
      <div className="h-[100%] ">
        <Image
          src={value.image}
          alt="image"
          width={400}
          height={400}
          quality={100}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center sm:gap-5 sm:items-start">
        <div className="w-full flex items-center justify-center sm:justify-start gap-1">
          <a
            href={`/chalisa/${value._id}`}
            className="font-bold text-[20px] underline text-orange-500"
          >
            {value.title}
          </a>
          <a href={`/chalisa/${value._id}`}>
            <FaExternalLinkAlt className="text-[15px] flex items-center justify-center text-orange-500" />
          </a>
        </div>
        <p className="font-extralight sm:max-w-[300px] text-center sm:text-start">
          {value.description}
        </p>
      </div>
    </main>
  );
};

export default MostSearchEd;
