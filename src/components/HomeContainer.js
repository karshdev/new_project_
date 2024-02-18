import React from "react";
import MostSearchEd from "./MostSearchEd";

const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/addchalisa?key=mostsearched`
    );
    const data = await res.json();
    if (data.length >= 1) {
      return data;
    } else {
      throw new Error("err");
    }
  } catch (err) {

  }
};

const HomeContainer = async () => {
  const data = await getData();
  return (
    <div className=" sm:w-2/3  bg-white shadow-lg p-4 rounded-lg">
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
