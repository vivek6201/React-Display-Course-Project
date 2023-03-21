import React from "react";
import { filterData } from "../data";

const Filter = ({ category, setCategory, error}) => {

  const handleCategory = (title) => {
    setCategory(title);
  }

  console.log(category);
  return (
    <div className="flex flex-wrap justify-center gap-5 py-6">
      {filterData.map((data) => {
        return (
          <p onClick={() => handleCategory(data.title)} className={`px-5 py-2 bg-gray-500 rounded-md hover:bg-gray-400 text-white cursor-pointer transition-all duration-200 shadow-md ${(category === data.title) ? "bg-green-900": "bg-gray-500"} ${error ? "pointer-events-none" : "pointer-events-auto"}`} key={data.id}>
            {data.title} 
          </p>
        );
      })}
    </div>
  );
};

export default Filter;