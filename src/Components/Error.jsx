import React from 'react'
import errorImage from "../assets/errorImage.png"

const Error = () => {
  return (
    <div className='flex flex-col gap-5 place-items-center h-screen place-content-center -translate-y-20'>
      <img src={errorImage} className="w-20 h-20"/>
      <p className='text-white font-bold text-2xl'>Error</p>
    </div>
  )
}

export default Error