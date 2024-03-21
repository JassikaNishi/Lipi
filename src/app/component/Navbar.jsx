// 'use client'
// import React, { useState } from "react";

// const Navbar = () => {
//  const [isOpen, setIsOpen] = useState(false);

//  const toggleMenu = () => {
//     setIsOpen(!isOpen);
//  };

//  return (
//     <nav className="bg-black items-center flex text-white w-full justify-around h-[84px] ">
//       <div className="logo">
//         <img src="ecell_logo.svg" alt="Logo" className="h-full w-auto" />
//       </div>
//       <ul className="nav-links space-x-16 hidden gap-3 sm:gap-10 items-center justify around font-medium md:flex text-3xl">
//         <li className="cursor-pointer">Home</li>
//         <li className="cursor-pointer">About Us</li>
//         <li className="cursor-pointer">Contact Us</li>
//         <li className="cursor-pointer">Log In</li>
//       </ul>

//       {/* Hamburger menu icon */}
//       <div className="cursor-pointer text-white md:hidden" onClick={toggleMenu}>
//         &#9776;
//       </div>
//       <div
//         className={`md:flex flex-col z-10 bg-gray-800 bg-opacity-75 p-4 rounded-md top-[6vh] h-[20vh] ${
//           isOpen ? "absolute right-0" : "hidden"
//         } md:hidden`}
//       >
//         <ul className="flex flex-col justify-around items-center space-x-4 h-full">
//           <li className="cursor-pointer">Home</li>
//           <li className="cursor-pointer">About Us</li>
//           <li className="cursor-pointer">Contact Us</li>
//           <li className="cursor-pointer">Log In</li>
          
//         </ul>
//       </div>
//     </nav>
//  );
// };

// export default Navbar;
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
// import logo from '@/app/assets/Logo.png';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black z-2">
            <div className="max-w-screen flex flex-wrap items-center justify-around p-2">
                <a href="" className="flex items-center space-x-3">
                    {/* <img src="img1.jpg" className="h-24 w-40 -m-8" alt="Logo" /> */}
                    {/* <Image src={logo} alt="Logo" width={160} height={40} /> */}
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <a href="/signin" className="text-gray-300 hover:bg-[#E48EDB] hover:text-white px-3 py-2 rounded-full text-1.5xl font-medium ">Login</a>
                    <a href="/signup" className="text-black hover:bg-[#E48EDB] bg-white hover:text-white px-3 py-2 rounded-full text-1.5xl font-medium">Register</a>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-black" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:black text-1.5xl">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-[#E48EDB] md:dark:text-[#E48EDB]" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E48EDB] md:dark:hover:text-[#E48EDB] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                        </li>
                        <li>
                            <a href="#features" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E48EDB] md:dark:hover:text-[#E48EDB] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#whyus" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E48EDB] md:dark:hover:text-[#E48EDB] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Why Us</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E48EDB] md:dark:hover:text-[#E48EDB] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
