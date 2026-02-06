import React from 'react'

const TechStackCard = (props) => {
  return (
    <div className='flex flex-col justify-center hover:shadow-blue-500/50 transition-all duration-500 hover:shadow-lg items-center font-poppins bg-[#292929b3] py-2 px-3 md:p-5 rounded-lg hover:scale-[1.02]'>
        <img className='w-24 md:w-32 ' src={props.image} />
        <p className='text-white mt-2 text-sm lg:text-xl'>{props.name}</p>
    </div>
  )
}

export default TechStackCard