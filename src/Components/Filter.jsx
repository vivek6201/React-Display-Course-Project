import React from "react";
import { filterData } from "../data";

const Filter = ({ category, setCategory }) => {

  const handleCategory = (title) => {
    setCategory(title);
  }

  return (
    <div className="flex justify-center gap-x-5 py-6">
      {filterData.map((data) => {
        return (
          <p onClick={() => handleCategory(data.title)} className="px-5 py-2 bg-gray-500 rounded-md hover:bg-gray-400 text-white cursor-pointer transition-all duration-200 shadow-md">
            {data.title}
          </p>
        );
      })}
    </div>
  );
};

export default Filter;