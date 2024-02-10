import React from 'react'
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa";
const MostSearchEd = () => {
  return (
    <main className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:items-start mt-10">
      <div>
        <Image
          src="/hanumanJi.webp"
          alt="image"
          width={350}
          height={350}
          className="rounded-lg "
        />
      </div>
      <div className="flex items-center justify-center flex-col sm:gap-5 sm:items-start ">
        <div className=" w-[100%] flex items-center  sm:justify-start justify-center gap-1">
          <a
            href="/chalisa/12312312"
            className="font-bold text-[20px] underline   text-orange-500"
          >
            Hanuman Chalisa
          </a>
          <FaExternalLinkAlt className="text-[15px] flex items-center justify-center text-orange-500" />
        </div>
        <p className=" font-extralight sm:max-w-[300px] ">
          Hanuman is depicted as a vanara (monkey) deity, with a human-like form
          but possessing the strength of a thousand elephants. His divine
          powers, devotion to Lord Rama, and his role in the epic Hindu
          scripture, the Ramayana, make him a symbol of loyalty, humility, and
          selflessness{" "}
        </p>
      </div>
    </main>
  );
}

export default MostSearchEd
