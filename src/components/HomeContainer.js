import React from "react";
import MostSearchEd from "./MostSearchEd";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addchalisa?key=mostsearched",{
      cache:"no-cache"
    });
    const data = await res.json();
    if (data.length >= 1) {
      return data;
    } else {
      throw new Error("err");
    }
  } catch (err) {
    console.log(err);
  }
};

const HomeContainer = async () => {
  const data = await getData();
  return (
    <div className="w-[100%] sm:w-2/3 bg-white shadow-lg p-4 rounded-lg">
      <h1 className="text-center font-serif text-[30px] mb-4">
        Most Visited Chalisa
      </h1>
      {data?.map((value, index) => (
        <MostSearchEd value={value} key={index} />
      ))}
    </div>
  );
};

export default HomeContainer;
