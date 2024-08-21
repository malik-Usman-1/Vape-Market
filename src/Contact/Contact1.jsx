import React from 'react'

const Contact1 = () => {
  return (
  <>
  <div>
    <div className=' bg-black  sm:px-14 px-5'>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-10 py-24'>
        <div className='relative '>
    <img src="../assets/img/01.jpg" alt="" className="w-full  " />
    <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <p className='text-white text-xl'>Your Text Here</p>
    </div>
</div>
            <div className='  sm:space-y-12 space-y-6'>
                <input type="text" className='  bg-[#191919] placeholder:text-white rounded-xl w-full h-14 pl-6  outline-none border border-transparent focus:border-orange-500 ' placeholder='Name' />
                <input type="text" className='  bg-[#191919] placeholder:text-white rounded-xl w-full h-14 pl-6  outline-none border border-transparent focus:border-orange-500 ' placeholder='Email' />
                <textarea name="" className='  bg-[#191919] placeholder:text-white rounded-xl w-full h-52 pl-6 pt-3 outline-none border border-transparent focus:border-orange-500 ' placeholder='Message' id=""></textarea>
                <div className=' flex gap-3 items-center  '>
                    <div className=' h-8 w-8 rounded-full border-2 border-orange-500 flex justify-center items-center'>
                        <div className=' h-2 w-2 bg-orange-500 rounded-full'></div>
                    </div>
                    <p className=' text-white'>I accept your terms & conditions</p>
                </div>
                <button className=' relative   rounded-xl h-14 w-36 bg-orange-500 text-white  font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-orange-500 duration-300'>Sumbit Now</span>

  <div className='absolute inset-0 bg-white rounded-xl  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>

            </div>

        </div>
    </div>
  </div>
  </>
  )
}

export default Contact1
