import React from "react";
import right from '../assets/right.png';
import rightwhite from '../assets/rightwhite.png';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>

      <Navbar></Navbar>

      <div className="mt-28 lg:mt-28">
        <div className="mx-8 flex flex-wrap justify-center   ">
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
              no-code SaaS website in just minutes with the set of free
              components for Framer.
            </p>
          </div>
        </div>

        <div className="mediacard grid grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:w-full gap-4 place-items-center lg:justify-center ">
        <div class="mt-5 lg:mt-36 hover:bg-blue-500 max-w-sm p-4 cursor-pointer rounded-3xl sm:p-8">
          <h5 class="mb-4 text-xl font-medium text-black">
            Free
          </h5>
          <div class="flex items-baseline mt-10 text-black">
            <span class="text-5xl font-bold">$</span>
            <span class="text-5xl ">0</span>
            <span class="ms-1 text-xl font-normal text-black">
              /monthly
            </span>
          </div>

          <Link to='/home'>
          <button
            type="button"
            class="text-white mt-10 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-20 py-2.5 inline-flex justify-center  text-center"
          >
            Get started for free
          </button>
          </Link>


          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Up to 5 project members
              </span>
            </li>
            
            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Unlimited tasks and projects
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                2GB storage
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Integrations
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Basic support
              </span>
            </li>
          </ul>
         
        </div>

        <div class=" bg-black max-w-sm h-[570px] cursor-pointer hover:bg-purple-500 lg:mt-20 p-4 rounded-3xl sm:p-8">
          <div className="flex gap-36 flex-wrap">
          <h5 class="text-xl font-medium text-white">
            Pro
          </h5>
          <button className="text-white bg-gradient-to-r from-[#DD7DFF] to-[#E1CD86] via-[#8BCB92] ` px-4 py-1 rounded-xl hover:bg-slate-100 cursor-pointer "> Most Popular </button>
          </div>
          <div class="flex items-baseline mt-10 text-white">
            <span class="text-5xl font-bold">$</span>
            <span class="text-5xl ">9</span>
            <span class="ms-1 text-xl font-normal text-white">
              /monthly
            </span>
          </div>

         <Link to='/home'>
         <button
            type="button"
            class="text-black mt-10 bg-white hover:bg-blue-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-24 py-2.5 inline-flex justify-center  text-center"
          >
            Sign up now
          </button>
         </Link>


          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <img src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                Up to 50 project members
              </span>
            </li>
            
            <li class="flex items-center">
              <img  src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                Unlimited tasks and projects
              </span>
            </li>

            <li class="flex items-center">
              <img src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                50GB storage
              </span>
            </li>

            <li class="flex items-center">
              <img src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                Integrations
              </span>
            </li>

            <li class="flex items-center">
              <img  src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                Priority support
              </span>
            </li>

            <li class="flex items-center">
              <img  src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                Advanced support
              </span>
            </li>

            <li class="flex items-center">
              <img  src={rightwhite} />
              <span class="text-base font-normal leading-tight text-white ms-3">
                Export support
              </span>
            </li>

    
          </ul>
         
        </div>

        <div class=" max-w-sm cursor-pointer p-4 hover:bg-red-500 rounded-3xl sm:p-8">
          <h5 class="mb-4 text-xl font-medium text-black">
            Business
          </h5>
          <div class="flex items-baseline mt-10 text-black">
            <span class="text-5xl font-bold">$</span>
            <span class="text-5xl ">19</span>
            <span class="ms-1 text-xl font-normal text-black">
              /monthly
            </span>
          </div>

          
          <Link to='/home'>
          <button
            type="button"
            class="text-white mt-10 bg-black hover:bg-blue-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-24 py-2.5 inline-flex justify-center  text-center"
          >
            Sign up now
          </button>
          </Link>

          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Up to 5 project members
              </span>
            </li>
            
            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Unlimited tasks and projects
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                200GB storage
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Integrations
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Dedicated account manager
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Custom fields
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Advanced analytics
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Export capabilities
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                API access
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Advanced security features
              </span>
            </li>

            <li class="flex items-center">
              <img src={right} />
              <span class="text-base font-normal leading-tight text-black ms-3">
                Basic support
              </span>
            </li>
          </ul>
         
        </div>

        </div>

      </div>
    </>
  );
}

export default Cards;
