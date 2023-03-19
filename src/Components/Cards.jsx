import React from "react";
import Card from "./Card";

const Cards = ({courses}) => {

  const getCourseCard = () => {
    let allCourses = [];
    Object.values(courses).forEach(array => {
        array.forEach((element) =>{
            allCourses.push(element);
        })
    });

    return allCourses;
  } 

  
  return <div className="flex py-5 gap-10 flex-wrap justify-center">
    {getCourseCard().map((course)=>{
        console.log(course);
        return <Card {...course}/>
    })}
  </div>;
};

export default Cards;
