import React from 'react'

const Home3 = () => {
  return (
    <>
      <div className=' Home3 bg-black  sm:px-14 md:px-40 lg:px-14  px-5 relative'>
        <div className=' grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 relative -top-28 '>

        <div className=' row-span-2 col-span-1  rounded-xl flex flex-col  justify-center  overflow-hidden '>
          <img src="../assets/img/view-image1 (1).jpg" alt="" />
          <div className='  bg-[#191919] sm:p-11 p-8 sm:space-y-10 space-y-5'>
            <h2  className=' sm:text-4xl text-2xl text-white font-bold'>The Best E-Liqued Bundles</h2>
            <p className=' text-gray-300 sm:text-base text-sm'>Sell Globally In Minutes With Localized Currencies Languages, And Experie In Every Market. Only A Variety Of Vaping Products</p>
            <div className=' sm:flex space-y-5 justify-between'>
            <button className=' relative  rounded-full h-12 w-32 bg-white text-orange-500 font-bold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Shop Now</span>

  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>
            <button className='rounded-full h-12  w-60 border-2 border-gray-800  flex items-center gap-2 justify-center  '>
            <img src="../assets/img/fire.svg" alt="" />
            <h2 className='text-lg text-white font-bold'>GET <span className='text-orange-500'>25% OFF</span> NOW</h2>
            </button>
            </div>
          </div>
        </div>
        <div className=' rounded-xl flex  overflow-hidden'>
        
          <div className='  bg-[#191919] sm:p-11 p-8 sm:space-y-10 space-y-5'>
            <h2  className=' sm:text-3xl text-2xl text-white font-bold'>New To Vapeing?</h2>
            <p className=' text-gray-300 sm:text-base text-sm'>Whereas Recognition Of The Inherent Dignity</p>
        
            <button className=' relative  rounded-full h-12 w-32 bg-white text-orange-500 font-bold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Shop Now</span>

  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>
           
            
          </div>
          
      
          <img src="../assets/img/view-image2 (1).jpg" alt="" />
            
          

        </div>
        <div className=' rounded-xl flex overflow-hidden '>
        <div className='  bg-[#191919] sm:p-11 p-8 sm:space-y-10 space-y-5'>
            <h2  className=' sm:text-3xl text-2xl text-white font-bold'>Vap Mode</h2>
            <p className=' text-gray-300 sm:text-base text-sm'>Whereas Recognition Of The Inherent Dignity</p>
        
            <button className=' relative  rounded-full h-12 w-32 bg-white font-bold text-orange-500 overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Shop Now</span>

  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>
           
            
          </div>
          
      
          <img src="../assets/img/view-image3 (1).jpg" alt="" />
            
        </div>
        </div>

      </div>
    </>
  )
}

export default Home3