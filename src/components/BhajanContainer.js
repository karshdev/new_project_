import React from 'react'
import BhajanCard from './BhajanCard';

const BhajanContainer = () => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h1 className="text-center font-serif text-[30px] mb-4">Top Bhajans</h1>
      <div className="flex w-[100%] gap-10 p-4 flex-wrap bg-red-lightest">
        <BhajanCard
          title="Hanuman Bhajan"
          description="Hanuman ji Best bhajan"
          imgSrc="/hanumanJi.webp"
          audioSrc="/shankh.mp3"
        />
        <BhajanCard
          title="Shiv Bhajan"
          description="Shiv Ji Best bhajan"
          imgSrc="/shivJi.jpeg"
          audioSrc="/shankh.mp3"
        />
      </div>
    </div>
  );
}

export default BhajanContainer
