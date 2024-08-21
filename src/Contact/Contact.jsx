import React from 'react'
import { MdHome } from "react-icons/md";


const Contact = () => {
  return (
    <>
    <div  id='about'>
     <div className=' bg-black  py-36 About1 flex justify-center items-center text-center  '>
         <div className=' space-y-6'>
             <h2 className=' text-white text-4xl font-bold'>Contact Us</h2>
             <p className=' text-white text-sm  font-semibold flex items-center   justify-center'><MdHome className=' text-xl' />  Home / Contact Us</p>
         </div>
     </div>
    </div>
    </>
  )
}

export default Contact
