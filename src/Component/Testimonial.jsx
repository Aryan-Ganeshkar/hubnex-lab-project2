import React from "react";
import Ellipsess from "../assets/Ellipsess.png";
import Ellipsess1 from "../assets/Ellipsess1.png";
import Ellipsess2 from "../assets/Ellipsess2.png";
import Ellipsess3 from "../assets/Ellipsess3.png";
import Ellipsess4 from "../assets/Ellipsess4.png";
import Ellipsess5 from "../assets/Ellipsess5.png";
import Ellipsess6 from "../assets/Ellipsess6.png";
import Ellipsess7 from "../assets/Ellipsess7.png";
import Ellipsess8 from "../assets/Ellipsess8.png";
import '../home.css'
import Navbar from "./Navbar";


function Testimonial() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mt-32 lg:mt-32">
        <div className="text-center">
          <button className="px-4 py-2 bg-gray-200 rounded-xl">
            Testimonials
          </button>
          <p className="text-4xl mt-5 font-bold">What our users say</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:gap-6 lg:grid-cols-3 md:grid-cols-3 lg:w-full gap-4 place-items-center">
       
        <div>
          <a href="#" class="block max-w-xs p-6 text-left blur-none">
            <p class="font-normal">
              As a seasoned designer always on the lookout for innovative tools,
              Framer.com instantly grabbed my attention.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="">
                <img className="mt-2" src={Ellipsess} />
              </div>
              <div className="sm:text-left ml-1">
                <h2>Theresa Webb</h2>
                <p> HR Manager, Amazon </p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class="block max-w-xs p-6 text-left blur-none ">
            <p class="font-normal">
              I was amazed at how quickly we were able to integrate this app
              into our workflow.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess1} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Casey Jordan</h2>
                <p> @caseyj </p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class="block max-w-xs p-6 text-left blur-none">
            <p class="font-normal">
              Adopting this app for our team has streamlined our project
              management and improved communication across the board.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess2} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Jordan Patels</h2>
                <p> @jpatelsdesign </p>
              </div>
            </div>
          </a>
        </div>
        
        <div>
          <a href="#" class=" max-w-xs p-6 text-left hidden sm:block ">
            <p class="font-normal">
              Our team’s productivity has skyrocketed since we started using
              this tool.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess3} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Josh Smith</h2>
                <p> @jjsmith </p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class=" max-w-xs p-6 text-left hidden sm:block ">
            <p class="font-normal">
              Planning and executing events has never been easier. This app
              helps me keep track of all the moving parts, ensuring nothing
              slips through the cracks.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess4} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Taylor Kim</h2>
                <p> @taylorkimm</p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class=" max-w-xs p-6 text-left hidden sm:block ">
            <p class="font-normal">
              With this app, we can easily assign tasks, track progress, and
              manage documents all in one place.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess5} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Sam Dawson</h2>
                <p> @dawsontechtips </p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class=" max-w-xs p-6 text-left hidden sm:block">
            <p class="font-normal">
              This app has completely transformed how I manage my projects and
              deadlines.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess6} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Morgan Lee</h2>
                <p> @morganleewhiz </p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class=" max-w-xs p-6 text-left hidden sm:block">
            <p class="font-normal">
              The customizability and integration capabilities of this app are
              top-notch.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess7} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Riley Smith</h2>
                <p> @rileysmith1 </p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" class=" max-w-xs p-6 text-left hidden sm:block">
            <p class="font-normal">
              Its user-friendly interface and robust features support our
              diverse needs.
            </p>

            <div className="flex flex-wrap mt-5">
              <div className="mt-2">
                <img className="" src={Ellipsess8} />
              </div>
              <div className="sm:text-left ml-4">
                <h2>Casey Harper</h2>
                <p> @casey09 </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
