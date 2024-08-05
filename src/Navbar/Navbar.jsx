// import React, { useState, useEffect } from 'react';
// import { LuStore } from "react-icons/lu";
// import { PiShippingContainerBold } from "react-icons/pi";
// import { FaSearch } from "react-icons/fa";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { MdOutlineLocalGroceryStore } from "react-icons/md";
// import { FaAngleDown } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { AiOutlineClose } from 'react-icons/ai';
// import { useRef } from "react";
// import { motion, sync, useCycle } from "framer-motion";
// // import { useDimensions } from "./use-dimensions";
// // import { MenuToggle } from "./MenuToggle";
// import { Navigation } from './FramerMotion/Navigation';
// import { MenuItem } from './FramerMotion/MenuItem';
// import { MenuToggle } from './FramerMotion/MenuToggle';
// import { useDimensions } from './FramerMotion/usedimesions';
// import { Link } from 'react-router-dom';



// const images = [
//   '../assets/img/banner-two-image1.jpg',
//   '../assets/img/banner-two-image2.jpg',
//   '../assets/img/banner-two-image3.jpg',
// ];

// const countries = [
//   { name: 'Pakistan', flag: '../assets/img/images.jpeg' },
//   { name: 'Phalastine', flag: '../assets/img/istockphoto-865196128-612x612.jpg' },
//   { name: 'Turkey', flag: '../assets/img/images (1).jpeg' },
// ];

// function Navbar() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [animateText, setAnimateText] = useState(false);
//   const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);


//   const sidebar = {
//     open: (height = 1000) => ({
//       clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 20,
//         restDelta: 2
//       }
//     }),
//     closed: {
//       clipPath: "circle(30px at 40px 40px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 40
//       }
//     }
//   };


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setAnimateText(true);
//       setTimeout(() => setAnimateText(false), 5000); // Reset animation after 5 seconds
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const selectCountry = (country) => {
//     setSelectedCountry(country);
//     setDropdownVisible(false);
//   };

//   return (
//     <>
//     <div className='relative overflow-hidden '>
//       <div className='relative z-10 overflow-hidden pb-16 '>
//       <div className=' Navbar'>

//         <div className='grid grid-cols-2   lg:py-10 py-6 '>
//           <div className='bg-blue-500 flex items-center justify-center sm:gap-28 gap-10 '>
//           <img src="../assets/img/logo (3).svg" alt="" className=' sm:hidden h-9 w-24 ' />

//             <img src="../assets/img/logo (3).svg" alt="" className=' sm:block hidden' />
//             <input type="text" name="" id="" className='h-14 w-96 rounded-full pl-16 relative outline-none hidden lg:block' placeholder='Search For' />
//             <FaSearch className='lg:absolute -ml-4  text-xl text-orange-500' />
//           </div>
//           <div className='bg-red-500 flex items-center  justify-end lg:pr-16 pr-3 gap-2'>
//             <div className='rounded-full bg-white flex overflow-hidden'>
//               <div className='bg-orange-500 md:p-3 p-1'>
//                 <MdOutlineAccountCircle className='text-xl text-white' />
//               </div>
//               <div className='p-3 hidden lg:block'>
//                 <h2>My Account</h2>
//               </div>
//             </div>
//             <div className='rounded-full bg-white flex overflow-hidden'>
//               <div className='flex items-center gap-5 md:p-3 p-1'>
//                 <MdOutlineLocalGroceryStore className='text-xl text-orange-500' />
//                 <h2 className='text-black sm:text-lg text-sm hidden sm:block'>$0.00</h2>
//               </div>
//               <div className='p-3 bg-black hidden md:block'>
//                 <h2 className='text-xl text-white'>0</h2>
//               </div>
//             </div>
//             <div className='relative rounded-full bg-white flex '>
//               <div className='md:p-2 p-1 flex items-center sm:gap-5 gap-1'>
//                 <img src={selectedCountry.flag} alt={selectedCountry.name} className='md:h-12 h-5 md:w-12 w-5' />
//                 <h2 className='  md:text-base text-sm'>{selectedCountry.name}</h2>
//               </div>
//               <div className="md:p-2 p-1 flex items-center cursor-pointer" onClick={toggleDropdown}>
//                 <FaAngleDown />
//               </div>
//               {dropdownVisible && (
//                 <ul className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg py-2 z-20 w-36 transition-opacity duration-300 opacity-100 transform translate-y-0">
//                   {countries.map((country) => (
//                     <li
//                       key={country.name}
//                       className="px-2 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
//                       onClick={() => selectCountry(country)}
//                     >
//                       <img src={country.flag} alt={country.name} className="inline mr-2 h-12 w-12" />
//                       {country.name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className='sm:py-5 py-2 bg-gray-900 grid grid-cols-2'>
//         <div className='border-2 border-white pl-4 sm:pl-0  '>

//         <motion.nav
//         className=' lg:hidden block'
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div className="background " variants={sidebar} />
//       <Navigation />
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
          
//           {/* <button onClick={() => setIsCenterModalOpen(!isCenterModalOpen)} className='  lg:hidden xl:hidden h-12 text-3xl sm:flex flex  sm:justify-center sm:items-center  md:flex justify-center items-center w-14  text-white'>
//                  <BiMenuAltLeft />
                
//               </button> */}
             
//               {/* {isCenterModalOpen && (
//                 <div className='fixed top-0 left-0 right-0 bottom-24 bg-black p-6 shadow-lg overflow-y-auto  z-50'>
//                   <button className=' text-white ' onClick={()=> setIsCenterModalOpen(false)}>X</button>
//                   <ul className=' text-white text-2xl space-y-5'>
//                   <li>Home</li>
//               <li>About Us</li>
//               <li>Pages</li>
//               <li>Blog</li>
//               <li>Contact Us</li>
//                   </ul>
                 

          

//         </div>

//                       )} */}
//           {/* <BiMenuAltLeft className=' text-white text-4xl sm:hidden' /> */}
//             <ul className='lg:flex text-white gap-12 pl-16 items-center h-full hidden '>
//               <Link to='/'>
                
//               <li>Home</li>
//               </Link>

//               <Link to='/about'>
//               <li>About Us</li>
//               </Link>
//               <Link to='/about'>

//               <li>Pages</li>
//               </Link>
//               <Link to='/about'>

//               <li>Blog</li>
//               </Link>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//           <div className='border-2 border-red-400 md:flex justify-end lg:pr-16 pr-3 gap-10  hidden'>
//             <div className='flex items-center gap-5'>
//               <div><LuStore className='text-white text-4xl' /></div>
//               <div>
//                 <h2 className='text-gray-300 lg:text-base text-sm'>Picking Up?</h2>
//                 <p className='text-white lg:text-base text-sm'>Store One</p>
//               </div>
//             </div>
//             <div className='flex items-center gap-5'>
//               <div><PiShippingContainerBold className='text-white text-4xl' /></div>
//               <div>
//                 <h2 className='text-gray-300 lg:text-base text-sm '>Free Shipping</h2>
//                 <p className='text-white lg:text-base text-sm'>On Order Over $100</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//         <div className={`border-2 border-red-300 lg:w-1/2  px-16 space-y-8 pt-20 ${animateText ? 'animate-slide-in' : ''}`}>
//           <div className={`slide-in-text ${animateText ? 'animate-delay-1' : ''}`}>
//             <div className='flex items-center gap-2'>
//               <img src="../assets/img/fire.svg" alt="" />
//               <h2 className='text-xl text-white font-bold'>GET <span className='text-orange-500'>25% OFF</span> NOW</h2>
//             </div>
//           </div>
//           <div className={`slide-in-text ${animateText ? 'animate-delay-2' : ''}`}>
//             <h2 className='sm:text-7xl text-4xl font-bold text-white'>Find Everything For <span className='text-orange-500'>Vaping</span></h2>
//           </div>
//           <div className={`slide-in-text ${animateText ? 'animate-delay-3' : ''}`}>
//             <p className='text-gray-300'>Sell Globally In Minutes With Localized Currencies Languages, And Expire In Every Market. Only A variety Of Vaping Products</p>
//           </div>
//           <div className={`slide-in-text ${animateText ? 'animate-delay-4' : ''}`}>
//             <div>
//               <p className='text-gray-300'>Starting Price</p>
//               <h2 className='text-white sm:text-3xl text-2xl font-bold'>$99.00</h2>
//             </div>
//           </div>
//           <div className={`slide-in-text ${animateText ? 'animate-delay-5' : ''}`}>
//             <div className='space-x-6 flex'>
//               <button className='rounded-full h-12 w-32 bg-orange-500 text-white'>Shop Now</button>
//               <button className='rounded-full h-12 w-32 bg-white text-orange-500'>View Details</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {images.map((image, index) => (
//         <div key={index} className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}>
//           <img src={image} alt={`Image ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//     </>

//   );
// }

// export default Navbar;