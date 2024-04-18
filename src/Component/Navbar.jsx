import React from "react";
import logo from "../assets/logo.png";
import vector from '../assets/vector.png'
import { useState } from "react";
import Arrows from '../assets/Arrows.png'
import { Link } from "react-router-dom";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (

    <>


    <div className="fixed top-0 left-0 w-full z-10">
    <div className="nav-component">
  <div className="text-sm h-10  text-white flex justify-center space-x-2 items-center text-center py-2 bg-black">
    <p className="lg:block hidden text-[#FFFFFF99]">
      This page is included in a free SaaS Website Kit.
    </p>
    <p>View the complete Kit</p>
    <img className=" cursor-pointer mt-1 w-5" src={Arrows} />
  </div>
</div>

      <div className="navbar-compt">
        <nav className="bg-white">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex flex-wrap space-x-2 flex-shrink-0">
                <img
                  className="text-white text-lg cursor-pointer font-bold"
                  src={logo}
                  alt="Logos"
                />
                <p className="mt-2"> made by</p>
               <img className="h-6 mt-2" src={vector} />
               <p className="font-bold mt-2"> Framer</p>
              </div>
              <div className="hidden md:block">
                <div className=" flex items-baseline lg:-mx-56 space-x-16 ">
                  <div className="relative left-10 space-x-4 lg:space-x-7">
                    <Link to='/effective'>
                    <a className="text-[#8E8E8E] hover:underline hover:decoration-[#5C27C0]  cursor-pointer">
                    About
                    </a>
                    </Link>

                   <Link to='/managment'>
                   <a className="text-[#8E8E8E] ] hover:underline hover:decoration-[#5C27C0] cursor-pointer">
                    Features
                    </a>
                   </Link>

                    <Link to='/cards'>
                    <a className="text-[#8E8E8E] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    Customers
                    </a>
                    </Link>

                    <Link to='/testimonial'>
                    <a className="text-[#8E8E8E] ] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    Updates
                    </a>
                    </Link>

                    <Link to='/footer'>
                    <a className="text-[#8E8E8E] ] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                     Help
                    </a>
                    </Link>
                  </div>

                  <div>
                    <Link to='/cards'>
                    <button className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:hover:bg-blue-700">
                      Get for free
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleNavbar}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                >
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3 text-center">

              <div className="flex flex-col justify-center">
                    <Link to='/effective'>
                    <a className="text-[#8E8E8E] hover:underline hover:decoration-[#5C27C0]  cursor-pointer">
                    About
                    </a>
                    </Link>

                   <Link to='/managment'>
                   <a className="text-[#8E8E8E] ] hover:underline hover:decoration-[#5C27C0] cursor-pointer">
                    Features
                    </a>
                   </Link>

                    <Link to='/cards'>
                    <a className="text-[#8E8E8E] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    Customers
                    </a>
                    </Link>

                    <Link to='/testimonial'>
                    <a className="text-[#8E8E8E] ] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    Updates
                    </a>
                    </Link>

                    <Link to='/footer'>
                    <a className="text-[#8E8E8E] ] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                     Help
                    </a>
                    </Link>
                  </div>

              <div>

                <Link to='/cards'>
                <button
                  className="text-white bg-black  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-6 py-3 text-center
            hover:bg-blue-700"
                >
                  Get for free
                </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
      
    </>
  );
}

export default Navbar;
