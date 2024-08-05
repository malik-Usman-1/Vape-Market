import React from 'react'

const Card4 = ({Data}) => {
  return (
    <>
      <div className='group relative  gap-6 text-center flex flex-col items-center'>
        <div className=' h-28  w-52 border-2  border-gray-800 rounded-xl flex justify-center  items-center cursor-pointer img-hover-white '>
            <div>

            <img src={Data.img5} alt="" className=' img5 h-full w-full  object-cover   ' />
            </div>

          {/* <div className='card h-[21vh] w-[21vh] rounded-full relative overflow-hidden  '>
            <img src={Data.img} alt="" className='absolute inset-0 h-full w-full rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100' />
            <div className=' bg-orange-600 absolute inset-0 h-full w-full rounded-full transition-opacity duration-300  opacity-0 group-hover:opacity-65'></div>
             <div className='   absolute inset-0 p-11  rounded-full'>
             <img src={Data.img1} alt="" className='     z-30  ' />

             </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Card4