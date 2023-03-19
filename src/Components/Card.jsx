import React from 'react'
import {FcLike} from "react-icons/fc"

const Card = ({image, title,description}) => {
  return (
    <div className='w-[25rem] flex flex-col gap-y-3 p-3 text-white shadow-lg rounded-md bg-slate-800'>
        <div className='relative'>
            <img src={image.url} alt={image.alt} />
            <button className='absolute -bottom-4 right-2 rounded-full bg-white bg-opacity-75 w-[3rem] h-[3rem] grid place-items-center'>
                <FcLike fontSize={"1.8rem"}/>
            </button>
        </div>
        <h4 className='font-bold text-xl '>{title}</h4>
        <p className='opacity-70'>{description.substring(0,100)}...</p>
    </div>
  )
}

export default Card