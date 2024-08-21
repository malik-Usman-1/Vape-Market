import React from 'react'

const Card5 = ({Data}) => {
  return (
    <>
    <div className='  bg-[#191919] sm:p-6 p-4  w-96  rounded-xl space-y-5 '>
         <img src={Data.img6} alt="" />
         <div>
            
         </div>
         <h2  className=' text-white sm:text-[21px] text-[19px]'>{Data.head4}</h2>
         <div className=' flex items-center justify-between'>
         <button className=' relative  rounded-full p-2 w-24 bg-white text-orange-500 font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Vapers</span>

  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>
            <p className=' text-gray-400'>2 Weeks Ago</p>
         </div>
      
    </div>
    </>

  )
}

export default Card5
