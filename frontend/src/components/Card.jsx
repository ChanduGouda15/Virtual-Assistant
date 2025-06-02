import React from 'react'

function Card({image}) {
  return (
    <div className='w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[#0000ff26] rounded-2xl overflow-hidden
      hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white'>
        <img src={image} className='h-full object-cover'>
        </img>
    </div>
  )
}

export default Card