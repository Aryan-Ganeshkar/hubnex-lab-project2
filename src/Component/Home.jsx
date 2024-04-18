import React from "react";
import Visual from "../assets/Visual.png";
import cylinder from '../assets/cylinder.png'
import cylinders from '../assets/cylinders.png'
import pulse1 from '../assets/pulse1.png';
import pulse2 from '../assets/pulse2.png'
import pulse3 from '../assets/pulse3.png'
import pulse4 from '../assets/pulse4.png'
import pulse5 from '../assets/pulse5.png'
import Arrow from '../assets/Arrow.png'
import '../home.css'
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

    <Navbar></Navbar>

      <div className="home-comp overflow-hidden mt-10 bg-gradient-to-r lg:h-[760px] from-[#EAEEFE] to-[#183EC2] ">
        <div className="flex mt-20 flex-wrap lg:mx-28  text-center items-center">
          <div className="text-left ml-5 lg:-mt-20 mt-10 w-72 lg:ml-5 justify-center lg:h-80 lg:w-96">
            
            <button className="font-medium rounded-lg text-sm px-5 border-2 bg-slate-200 border-slate-300 py-2">Version 2.0 is here</button>

            <h2 className="lg:text-7xl mt-5 text-5xl font-bold"> Pathway to productivity </h2>

            <p className="mt-10">
              {" "}
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="flex flex-wrap">
              <Link to='/cards'>
              <button className="px-6 py-3 bg-black text-white  rounded-lg mt-5 cursor-pointer hover:bg-purple-500">
                Get for free
              </button>
              </Link>
              <div className="flex ml-5 space-x-5 mt-7 flex-wrap">
              <p className="font-bold cursor-pointer"> Learn more</p>
              <img className="max-h-4 mt-1 cursor-pointer" src={Arrow} />
              </div>
              </div>
          </div>

          <div className="">
            <div className="cylinderimg  hidden lg:block lg:relative bottom-8 left-28 lg:ml-8">
              <img src={cylinder} />
            </div>

            <div className="hidden lg:block lg:relative  top-56 left-[700px]">
              <img src={cylinders} />
            </div>
          </div>

          <div>
          <div className="">
            <img className="mediumimg lg:relative top-5 lg:h-[600px] lg:-left-1 lg:w-[620px]" src={Visual} />
          </div>
          </div>

        </div>
      </div>


     <div className="home-last-comp">
      <marquee>
     <div className="flex lg:mx-20 h-32 mt-10 justify-around">
        <div className="">
          <img className="text-[#FFFFFF]" src={pulse1} />
        </div>

        <div>
          <img className="text-[#FFFFFF]" src={pulse2} />
        </div>

        <div>
          <img src={pulse3} />
        </div>

        <div>
          <img className="text-[#FFFFFF]" src={pulse4} />
        </div>

        <div>
          <img className="text-[#FFFFFF]" src={pulse5} />
        </div>
      </div>
      </marquee>
     </div>
    </>
  );
}

export default Home;
