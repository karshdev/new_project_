import React from 'react'
import "../app/globals.css"
import AartiCard from './AartiCard';
const AartiContainer = () => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h1 className="text-center font-serif text-[30px] mb-4">Top Aarti</h1>
      <div className="flex w-[100%] gap-10 p-4 flex-wrap bg-red-lightest">
        <AartiCard />
        <AartiCard />

        <AartiCard />
        <AartiCard />

      </div>
    </div>
  );
}

export default AartiContainer
