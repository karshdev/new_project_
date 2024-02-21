import AartiContainer from '@/components/AartiContainer';
import BhajanContainer from '@/components/BhajanContainer';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import HomeContainer from '@/components/HomeContainer';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import Suggestion from '@/components/Suggestion';

import React from 'react'

const Landing = () => {
   const buttons = [
     { labelText: "History", bgColor: "bg-[#80669d]", url: "/history" },
     { labelText: "Stories", bgColor: "bg-[#dd7973]", url: "/stories" },
     { labelText: "Strategies", bgColor: "bg-[#55c2da]", url: "/strategies" },
     { labelText: "Lessons", bgColor: "bg-[#5dbea3]", url: "/lessons" },
     { labelText: "Games", bgColor: "bg-[#dd7973]", url: "/games" },
   ];
  return (
    <Layout>
      <Heading />
      <div className=" hidden sm:flex-row sm:flex w-[100%] items-center justify-center gap-4 mt-[10px] sm:mb-[10px] p-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`flex-grow text-white font-semibold py-4 px-8 rounded-lg  text-[18px]  focus:outline-none focus:ring-2 focus:ring-${button.bgColor.slice(
              3
            )}`}
            lableText={button.labelText}
            url={button.url}
            bgColor={button.bgColor}
          />
        ))}
      </div>
      <div className="flex  sm:px-12 gap-2 mt-[15px] sm:mt-0">
        <HomeContainer />
        <Sidebar />
      </div>
      <div className="w-[100%] sm:px-12 mt-[15px] sm:mt-0">
        <BhajanContainer />
      </div>
        <div className='w-[100%] sm:px-12 mt-[15px] sm:mt-0'>
        <AartiContainer />

        </div>
      
      
        <Suggestion />

    </Layout>
  );
}

export default Landing
