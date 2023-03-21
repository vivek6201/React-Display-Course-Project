import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ image, id, title, description, liked, setLiked }) => {
  
  const addToLiked = () => {
    if (liked.includes(id)) {
      setLiked((prev) => prev.filter((cid) => cid !== id));
      toast.warning("Removed from Liked Courses");
    } else {
      if (liked.length === 0) {
        setLiked([id]);
        toast.success("Added To Liked Courses.");
      } else {
        setLiked((prev) => [...prev, id]);
        toast.success("Added To liked Courses");
      }
    }
  };

  return (
    <div className="w-[25rem] flex flex-col gap-y-3 p-3 text-white shadow-lg rounded-md bg-slate-800">
      <div className="relative">
        <img src={image.url} alt={image.alt} />
        <button
          onClick={addToLiked}
          className="absolute -bottom-4 right-2 rounded-full bg-white bg-opacity-75 w-[3rem] h-[3rem] grid place-items-center"
        >
          {liked.includes(id)? <FcLike fontSize={"1.8rem"}/> : <FcLikePlaceholder fontSize={"1.8rem"}/>}
          
        </button>
      </div>
      <h4 className="font-bold text-xl ">{title}</h4>
      <p className="opacity-70">{description.substring(0, 100)}...</p>
    </div>
  );
};

export default Card;
