import React from "react";
import cubehelix1 from "../assets/cubehelix1.png";
import cubehelix from "../assets/cubehelix.png";
import Navbar from "./Navbar";

function Managment() {
  return (
    <>

    <Navbar></Navbar>
      <div>
        <div className="mx-8 mt-24 flex flex-wrap justify-center lg:mt-24  ">
          <div className="text-center h-96 w-[480px]">
            <button className="px-4 py-2 bg-slate-200 rounded-xl mt-5">
              Everything you need
            </button>
            <p className="lg:text-5xl mt-10 text-4xl font-bold">
              {" "}
              Streamlined for easy management{" "}
            </p>
            <p className="mt-10 lg:mx-14">
              {" "}
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-28 justify-center">
          <div class="max-w-sm text-center rounded-2xl shadow-2xl">
            <img className="ml-8" src={cubehelix1} />
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold text-black">
                  Integration ecosystem
                </h5>
              </a>
              <p class="mb-3 font-normal text-black">
                Enhance your productivity by connecting  with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
            
          </div>

          <div class="max-w-sm text-center rounded-2xl shadow-2xl">
            <img className="ml-8" src={cubehelix} />
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold text-black">
                  Integration ecosystem
                </h5>
              </a>
              <p class="mb-3 font-normal text-black">
                Enhance your productivity by connecting   with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Managment;
