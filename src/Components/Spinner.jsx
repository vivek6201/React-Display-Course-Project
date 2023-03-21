import React from 'react'
import { SpinnerCircular } from 'spinners-react'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-y-3 text-white text-xl justify-center items-center h-screen -translate-y-32'>
      <SpinnerCircular enabled={true}/>
      Loading...
      </div>
  )
}

export default Spinner