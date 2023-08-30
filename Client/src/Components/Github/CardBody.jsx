import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { selectName } from "../../Store/changeBody";
import { ImLink } from "react-icons/im";
import { LuBookMarked } from "react-icons/lu";
import { useDispatch } from "react-redux";
import getContributions from "../../Private/getData";
function CardBody() {
  const Api = "https://api.github.com/users/Sanskar-tyagi/repos";
  const UserApi = "https://api.github.com/users/Sanskar-tyagi";
  const dispatch = useDispatch();
  const setBody = (item) => {
    dispatch(selectName(item));
  };
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const getUser = () => {
    axios
      .get(UserApi)
      .then((info) => {
        setUser(info.data);
        console.log(user);
      })
      .catch((err) => console.log(err.message));
  };
  const getData = () => {
    axios
      .get(Api)
      .then((info) => {
        setData(
          info.data?.map((obj) => ({
            name: obj.name,
            description: obj.description,
            language: obj.language,
          }))
        );
      })
      .catch((err) => console.log(info));
  };
  useEffect(() => {
    getData();
    getContributions();
    getUser();
  }, [axios]);
  return (
    <div class="container-xl flex  overflow-auto bgLdark px-3 px-md-4 pb-0 h-100 px-lg-5 pt-3">
      <div className="flex flex-col mt-4  w-5/12 justify-start">
        <div class=" mb-4 ">
          <div class=" mr-3 md:mr-0 flex-shrink-0">
            <img
              alt=""
              src={user?.avatar_url}
              width="300"
              height="300"
              class="avatar avatar-user rounded-full border m-0 color-bg-default"
            />

            <div className="relative h-6 w-12">
              <div class="absolute start-64 bottom-12 p-2 bgblack text-md rounded-full dark:border-gray-400 z-2 border-1">
                {" "}
                🎯{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="pb-3">
          <h1 class=" text-white text-base">
            <span class="text-3xl" itemprop="name">
              {user?.name}
            </span>
            <br />
            <span
              class="text-2xl font-light dark:text-gray-400"
              itemprop="additionalName"
            >
              {user?.login} ·<span className="text-2xl"> he/him</span>
            </span>
          </h1>
        </div>
        <div className="flex ">
          <div class="mb-3 w-80  dark:text-gray-100 ">
            <div>{user?.bio}</div>
          </div>
        </div>

        <div className="flex items-center   gap-2 py-2 text-sm dark:text-gray-500">
          <GoPeople size={"18px"} className=" dark:text-gray-100" />{" "}
          <span className=" dark:text-gray-100">{user?.followers}</span>{" "}
          followers
          <span className="dark:text-white">·</span>
          <span className="dark:text-gray-100">{user?.following}</span>{" "}
          following
        </div>
        <a
          href="https://leetcode.com/SanskarTyagi/"
          className="flex hover:underline hover:text-blue-500 items-center text-sm gap-2 mt-4 dark:text-gray-200"
        >
          <ImLink size={"16px"} className="  dark:text-gray-100" />{" "}
          https://leetcode.com/SanskarTyagi/
        </a>
        <a
          className="flex items-center hover:underline  hover:text-blue-500  gap-2 mt-2 text-sm dark:text-gray-200"
          href="https://www.linkedin.com/in/sanskar-tyagi-953a921b1/"
        >
          <AiFillLinkedin size={"16px"} className="  dark:text-gray-100" />{" "}
          in/sanskar-tyagi-953a921b1
        </a>

        <br />
        <div className="border-b-2 border-gray-800 w-72 ml-1"></div>
      </div>
      <div className="flex flex-col mt-4 relative w-3/4">
        <span className="absolute -start-5 -top-2 text-md text-gray-200  ">
          {" "}
          Pinned
        </span>
        <div class="grid grid-cols-2 gap-4 mt-4   mb-md-0">
          {data.map((item, index) => {
            return (
              <div
                key={item.name}
                className={`container ${
                  item.language == null ? "hide" : ""
                } rounded-xl flex flex-col   w-full max-w-xl p-3 mb-4 mx-auto border-gray-600 border-1 `}
              >
                <div className="flex justify-between">
                  <div
                    className="flex items-center hover:cursor-pointer hover:underline gap-2 text-blue-500  space-x-4"
                    onClick={() => {
                      setBody(item.name);
                    }}
                  >
                    <LuBookMarked className="text-gray-500" />{" "}
                    <span className="m-0">{item.name}</span>
                  </div>
                </div>
                <div className="py-2 space-y-2 text-xs dark:text-gray-400">
                  <p>{item.description}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-gray-600 text-xs mt-1">
                    {item.language}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* <img
          src="https://ghchart.rshah.org/39D353/Sanskar-tyagi"
          alt="Name Your Github chart"
        ></img> */}
        <table id="contribution-table"></table>
      </div>
    </div>
  );
}

export default CardBody;
