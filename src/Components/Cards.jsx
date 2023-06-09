import React from "react";
import Card from "./Card";

const Cards = ({ courses, category, liked, setLiked }) => {
  
  const getCourseCard = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((element) => {
          allCourses.push(element);
        });
      });

      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex py-5 gap-10 flex-wrap justify-center">
      {getCourseCard().map((course) => {
        return <Card {...course} key={course.id} liked = {liked} setLiked = {setLiked}/>;
      })}
    </div>
  );
};

export default Cards;
