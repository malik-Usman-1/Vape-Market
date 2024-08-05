import React from 'react'
import { useState } from 'react';
import { LuStore } from "react-icons/lu";
import { PiShippingContainerBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { AiOutlineClose } from 'react-icons/ai';
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
// import { MenuToggle } from "./MenuToggle";
import { Navigation } from './FramerMotion/Navigation';
import { MenuItem } from './FramerMotion/MenuItem';
import { MenuToggle } from './FramerMotion/MenuToggle';
import { useDimensions } from './FramerMotion/usedimesions';
import { Link } from 'react-router-dom';


const countries = [
    { name: 'Pakistan', flag: '../assets/img/images-removebg-preview.png' },
    { name: 'Phalastine', flag: '../assets/img/istockphoto-865196128-612x612-removebg-preview.png' },
    { name: 'Turkey', flag: '../assets/img/images__1_-removebg-preview.png' },
  ];

function Nav() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);


    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

      
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false);
  };

  return (
    <>
    
        <div>
        <div className='relative z-10  pb-16 '>
        <div className='grid grid-cols-2   lg:py-8 py-6 '>
          <div className=' flex items-center justify-center sm:gap-28 gap-10 '>
          <img src="../assets/img/logo (4).svg" alt="" className=' sm:hidden h-9 w-24 ' />

            <img src="../assets/img/logo (6).svg" alt="" className=' sm:block hidden' />
            <input type="text" name="" id="" className='h-14 w-96 rounded-full pl-16 relative outline-none hidden lg:block' placeholder='Search For' />
            <FaSearch className='lg:absolute -ml-4  text-xl text-orange-500' />
          </div>
          <div className=' flex items-center  justify-end lg:pr-16 pr-3 gap-2'>
            <div className='rounded-full bg-white flex overflow-hidden'>
              <div className='bg-orange-500 md:p-3 p-1'>
                <MdOutlineAccountCircle className='text-xl text-white' />
              </div>
              <div className='p-3 hidden lg:block'>
                <h2>My Account</h2>
              </div>
            </div>
            <div className='rounded-full bg-white flex overflow-hidden'>
              <div className='flex items-center gap-5 md:p-3 p-1'>
                <MdOutlineLocalGroceryStore className='text-xl text-orange-500' />
                <h2 className='text-black sm:text-lg text-sm hidden sm:block'>$0.00</h2>
              </div>
              <div className='p-3 bg-black hidden md:block'>
                <h2 className='text-xl text-white'>0</h2>
              </div>
            </div>
            <div className='relative rounded-full bg-white flex '>
              <div className='md:p-2 p-1 flex items-center sm:gap-5 gap-1'>
                <img src={selectedCountry.flag} alt={selectedCountry.name} className='md:h-12 h-5 md:w-12 w-5' />
                <h2 className='  md:text-base text-sm'>{selectedCountry.name}</h2>
              </div>
              <div className="md:p-2 p-1 flex items-center cursor-pointer" onClick={toggleDropdown}>
                <FaAngleDown />
              </div>
              {dropdownVisible && (
                <ul className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg py-2 z-20 w-36 transition-opacity duration-300 opacity-100 transform translate-y-0">
                  {countries.map((country) => (
                    <li
                      key={country.name}
                      className="px-2 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
                      onClick={() => selectCountry(country)}
                    >
                      <img src={country.flag} alt='' className="inline mr-2 h-12 w-12" />
                      {country.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='sm:py-4 py-2 bg-[#191919] grid grid-cols-2'>
        <div className=' pl-4 sm:pl-0    '>

        <motion.nav
        className=' lg:hidden block'
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background " variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
          
         
            <ul className='lg:flex text-white gap-12 pl-16 items-center pt-4 h-full hidden  '>
              
            <Link to='/'>
                
             <li>Home</li>
              </Link>

              <Link to='/about'>
              <li>About Us</li>
              </Link>
              <Link to='/about'>

              <li>Pages</li>
              </Link>
              <Link to='/about'>

              <li>Blog</li>
              </Link>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=' md:flex justify-end lg:pr-16 pr-3 gap-10  hidden'>
            <div className='flex items-center gap-5'>
              <div><LuStore className='text-white text-4xl' /></div>
              <div>
                <h2 className='text-gray-300 lg:text-base text-sm'>Picking Up?</h2>
                <p className='text-white lg:text-base text-sm'>Store One</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div><PiShippingContainerBold className='text-white text-4xl' /></div>
              <div>
                <h2 className='text-gray-300 lg:text-base text-sm '>Free Shipping</h2>
                <p className='text-white lg:text-base text-sm'>On Order Over $100</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </div>
    
    </>

  );
}

export default Nav;