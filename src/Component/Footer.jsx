import React from "react";
import helix1 from "../assets/helix1.png";
import helix2 from "../assets/helix2.png";
import logo from "../assets/logo.png";
import Socials from "../assets/Socials.png";
import Socials1 from "../assets/Socials1.png";
import Socials2 from "../assets/Socials2.png";
import Socials3 from "../assets/Socials3.png";
import Socials4 from "../assets/Socials4.png";
import Socials5 from "../assets/Socials5.png";
import "../home.css";
import Navbar from "./Navbar";
import Arrow from '../assets/Arrow.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mt-20 md:-mt-72  lg:mt-28 flex flex-wrap overflow-hidden justify-center bg-gradient-to-r  from-[#FFFFFF] to-[#D2DCFF]">
        <div className="footerimg footerimgss hidden sm:block lg:block ">
          <img src={helix1} />
        </div>

        <div>
          <div className="mx-8 mt-10 flex flex-wrap justify-center lg:mx-28  ">
            <div className="text-center h-96 max-w-sm lg:max-w-lg ">
              <p className="lg:text-5xl mt-10 text-4xl font-bold">
                {" "}
                Sign up for free today{" "}
              </p>
              <p className="mt-10 lg:mx-14">
                {" "}
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts.
              </p>
              <div className="flex flex-wrap justify-center">
              <Link to='/home'>
              <button className="px-4 py-2 bg-black text-white rounded-xl mt-5 cursor-pointer hover:bg-purple-500">
                Get for free
              </button>
              </Link>
              <div className="flex ml-5 space-x-5 mt-7 flex-wrap">
              <p className="font-bold cursor-pointer"> Learn more</p>
              <img className="max-h-4 mt-1 cursor-pointer" src={Arrow} />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            className="footerimgs footerimgsss lg:relative lg:left-2 lg:top-20 hidden sm:block lg:block"
            src={helix2}
          />
        </div>
      </div>

      <footer class="bg-white md:-mt-72 lg:mt-1 overflow-hidden dark:bg-black">
        <div class="mx-auto lg:mx-3 w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 flex flex-col space-y-4">
              <a class="flex items-center">
                <img
                  src={logo}
                  class="h-10 me-3 cursor-pointer
                  "
                />
              </a>
              <h6 class="max-w-xs text-white text-sm">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website.
              </h6>

              <div class="sm:flex sm:items-center sm:justify-between lg:hidden md:hidden">
            <div class="flex mt-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img
                  src={Socials}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
               
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials1}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials2}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials3}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials4}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials5}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
            </div>
          </div>
            </div>
            <div class="grid grid-cols-1 gap-8 sm:gap-6 lg:-mx-56 sm:grid-cols-4 lg:grid-cols-4">
              <div>
                <h2 class="mb-6 text-sm font-bold cursor-pointer text-gray-900  dark:text-white">
                  Product
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 space-y-6 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Updates
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      FAO
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-bold cursor-pointer text-gray-900 dark:text-white">
                  Company
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 space-y-6 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Manifesto
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-bold cursor-pointer text-gray-900 dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 space-y-6 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Examples
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Docs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-bold cursor-pointer text-gray-900 dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 space-y-6 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="sm:flex hidden sm:items-center sm:justify-between">
            <div class="flex mt-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img
                  src={Socials}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
               
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials1}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials2}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials3}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials4}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img
                  src={Socials5}
                  class="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                />
                
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
