import React from "react";
import Products from "../assets/Products.png";
import pyramid from "../assets/pyramid.png";
import pyramids from "../assets/pyramids.png";
import Vectors from '../assets/Vectors.png'
import Vectors1 from '../assets/Vectors1.png'
import Vectors2 from '../assets/Vectors2.png'
import Vectors3 from '../assets/Vectors3.png'
import Arrow from '../assets/Arrow.png'
import '../home.css'
import Navbar from "./Navbar";

function Effective() {
  return (
    <>
      <Navbar></Navbar>

      <div className="">
        <div className="mx-8 flex flex-wrap justify-center lg:mt-24 mt-24">
          <div className="text-center h-96 w-[480px]">
          <button className="px-4 py-2 bg-slate-200 rounded-xl mt-5">
            Boost your productivity
          </button>
          <p className="lg:text-5xl mt-10 text-4xl font-bold">
            {" "}
            A more effective way to track progress{" "}
          </p>
          <p className="mt-10 lg:mx-14">
            {" "}
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
          </div>
        </div>

        <div className="md:-mt-56 lg:-mt-56 overflow-hidden">
        <div className="effectimg  bg-gradient-to-r effectimgs lg:relative hidden sm:block md:block lg:block lg:top-[400px] lg:ml-[560px]">
            <img src={pyramid} />
        </div>
 
        <div className="lg:-mt-20  bg-gradient-to-r  to-[#FFFFFF] from-[#D2DCFF]">
          <img className="lg:mx-40" src={Products} />
        </div>
       
        <div className="effectimgs  relative hidden sm:block lg:block lg:bottom-[400px] lg:ml-36">
            <img src={pyramids} />
        </div>

        </div>

        <div className="flex flex-wrap bg-gradient-to-r  to-[#FFFFFF] from-[#D2DCFF] md:-mt-64 lg:-mt-64 lg:w-full justify-center">
          
            <div class="max-w-xs p-6 rounded-lg ">
              <img class="w-5 h-5 mb-3" src={Vectors} />
               
              <a href="#">
                <h5 class="mb-2 text-xl tracking-tight text-black font-bold">
                Integration ecosystem
                </h5>
              </a>
              <p class="mb-3 text-black">
              Track your progress and motivate your efforts everyday.
              </p>
              <a
                href="#"
                class="inline-flex font-medium items-center text-black"
              >
               Learn more
                <img className="px-2 mt-1" src={Arrow} />
              </a>
            </div>

            <div class="max-w-xs p-6 rounded-lg ">
              <img class="w-5 h-5 mb-3" src={Vectors1} />
               
              <a href="#">
                <h5 class="mb-2 text-xl tracking-tight text-black font-bold">
                Goal setting and tracking
                </h5>
              </a>
              <p class="mb-3 text-black">
              Set and track goals with manageable task breakdowns.
              </p>
              <a
                href="#"
                class="inline-flex font-medium items-center text-black"
              >
               Learn more
                <img className="px-2 mt-1" src={Arrow} />
              </a>
            </div>

            <div class="max-w-xs p-6 rounded-lg">
              <img class="w-5 h-5 mb-3" src={Vectors2} />
               
              <a href="#">
                <h5 class="mb-2 text-xl tracking-tight text-black font-bold">
                Secure data encryption
                </h5>
              </a>
              <p class="mb-3 text-black">
              Ensure your data’s safety with top- tier encryption.
              </p>
              <a
                href="#"
                class="inline-flex font-medium items-center text-black"
              >
               Learn more
                <img className="px-2 mt-1" src={Arrow} />
              </a>
            </div>

            <div class="max-w-xs p-6 rounded-lg">
              <img class="w-5 h-5 mb-3" src={Vectors3} />
               
              <a href="#">
                <h5 class="mb-2 text-xl tracking-tight text-black font-bold">
                Customizable notifications
                </h5>
              </a>
              <p class="mb-3 text-black">
              Get alerts on tasks and deadlines that matter most.
              </p>
              <a
                href="#"
                class="inline-flex font-medium items-center text-black"
              >
               Learn more
                <img className="px-2 mt-1" src={Arrow} />
              </a>
            </div>
            
        </div>
        
      </div>
      
    </>
  );
}

export default Effective;
