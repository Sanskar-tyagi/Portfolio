import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { RiRecordCircleLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

function Nav() {
  return (
    <div>
      <header className="p-4 px-0  bgblack dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex  justify-between items-center gap-1">
            <div className="borderWhite ">
              <IoIosMenu size={"20px"} />
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center pl-4"
            >
              <BsGithub size={"36px"} />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-3 -mb-1 border-b-2 dark:border-transparent"
                >
                  Sanskar-Tyagi
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 sm:hidden gap-3 lg:flex">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block  w-100 py-2 pl-10  text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type [/] to search"
                required
              />
            </div>
            <div className="border-r-2 border-gray-500 w-2 h-5 "></div>
            <div className="borderWhite hover:cursor-pointer flex justify-center items-center gap-2 px-2 ">
              <AiOutlinePlus fill="#7d8590" size={"20px"} />
              <MdArrowDropDown />
            </div>
            <div className="borderWhite hover:cursor-pointer">
              <RiRecordCircleLine fill="#7d8590" size={"20px"} />
            </div>

            <div className="borderWhite p-2 hover:cursor-pointer">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                height={"16px"}
                width={"16px"}
                class="text-gray-500  dark:text-gray-400"
                data-view-component="true"
                fill="#7d8590"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={"0.5"}
                  d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
                ></path>
              </svg>
            </div>
            <div className="borderWhite p-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                height={"16px"}
                width={"16px"}
                class="text-gray-500 hover:cursor-pointer dark:text-gray-400"
                data-view-component="true"
                fill="#7d8590"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={"0.5"}
                  d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
                ></path>
              </svg>
            </div>
            <img
              alt=""
              src="https://avatars.githubusercontent.com/u/79279348?v=4"
              className="object-cover lg:block hidden w-12 h-12 rounded-full  mx-4 shadow dark:bg-gray-500"
            />
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
export default Nav;
