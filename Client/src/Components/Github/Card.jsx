import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiShare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCopy } from "react-icons/lu";
import Nav from "./Nav";
import Tab from "./Tab";
import CardBody from "./CardBody";
import Code from "./Code";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import logo from "../../assets/images/logo.png";
const Container = styled.div`
  .card {
    width: 80vw;
    height: 120vh;
    background: lightgrey;
    display: flex;
    border: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .circles,
  .browser {
    height: 30px;
    display: flex;
    align-items: center;
  }

  .circles {
    width: 20%;
    gap: 8px;
    padding: 10px;
  }

  .c {
    width: 09px;
    height: 9px;
    border-radius: 50%;
    box-shadow: inset 2px 2px 5px rgba(235, 235, 235, 0.356);
  }
  .hide {
    display: none;
  }
  .c:first-child {
    background-color: red;
  }

  .c:nth-child(2) {
    background-color: rgb(204, 167, 4);
  }

  .c:last-child {
    background-color: green;
  }

  .browser {
    width: 40%;
    padding: 5px;
    display: flex;
    height: 35px;
    gap: 10px;
  }

  .chevrons {
    display: flex;
  }

  .search-bar {
    position: relative;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: rgb(88, 88, 88);
    background: #eaeef1;
    box-shadow: inset 2px 2px 2px #05050525;
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 9px;
    width: 20%;
  }

  .circle {
    padding: 0 4px;
  }
  .bgLdark {
    background: #0d1117;
  }
  .box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
  }
  @media (max-width: 767px), (max-width: 991px) {
    display: none;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }

  .search-bar svg {
    position: absolute;
    left: 10px;
  }
  table {
    border-collapse: separate;
    border-spacing: 2px;
    width: 100%;
  }

  td {
    height: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  .color-0 {
    background-color: #fff;
  }
  .color-1 {
    background-color: #9be9a8;
  }
  .color-2 {
    background-color: #40c463;
  }
  .color-3 {
    background-color: #30a14e;
  }
  .color-4 {
    background-color: #216e39;
  }
`;
function Card() {
  const CurrentBody = useSelector((state) => state.selectedName);
  const [isVisible, setIsVisible] = useState(true);
  const HandleEnter = () => {
    setTimeout(() => {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-2">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img className="h-10 w-10 rounded-full" src={logo} alt="" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">Pro Tip</p>
                <p className="mt-1 text-sm text-gray-500">
                  You cab use the circles in the Safari tab
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }, 2000);
  };

  useEffect(() => {
    const logHelloOnMouseEnter = () => {
      HandleEnter();
      document
        .getElementById("container")
        .removeEventListener("mouseenter", logHelloOnMouseEnter);
    };

    document
      .getElementById("container")
      .addEventListener("mouseenter", logHelloOnMouseEnter);
    return () => {
      document
        .getElementById("container")
        .removeEventListener("mouseenter", logHelloOnMouseEnter);
    };
  }, []);
  return (
    <>
      <Container
        className="flex  justify-center"
        id="container"
        onMouseEnter={() => {}}
      >
        <div
          class="card flex"
          style={{ height: `${!isVisible ? "auto" : "120vh"}` }}
        >
          <div className="flex justify-between items-center px-6 py-2 gap-14">
            <div class="tools">
              <div
                class="circle"
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                <span class="red hover:scale-125  hover:cursor-pointer transition-all ease-in duration-300  box"></span>
              </div>
              <div class="circle">
                <span
                  class="yellow hover:scale-125 hover:cursor-pointer transition-all ease-in duration-300  box"
                  onClick={() => {
                    setIsVisible(true);
                  }}
                ></span>
              </div>
              <div class="circle">
                <span class="green hover:scale-125 hover:cursor-pointer transition-all ease-in duration-300  box"></span>
              </div>
            </div>
            <div class="browser">
              <div class="chevrons">
                <svg
                  viewBox="0 0 20 20"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="20"
                  id="_20"
                >
                  <path
                    transform="translate(6.25 3.75)"
                    d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z"
                    id="Fill"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="20"
                  id="_20"
                >
                  <path
                    transform="translate(6.625 3.75)"
                    d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z"
                    id="Fill"
                  ></path>
                </svg>
              </div>
              <div class="search-bar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.89"
                  height="7.887"
                  viewBox="0 0 16.89 16.887"
                >
                  <path
                    id="Fill"
                    d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z"
                    transform="translate(0.003 0)"
                  ></path>
                </svg>
                github.com/Sanskar-tyagi
                <div></div>
              </div>
            </div>
            <div className="icons flex gap-3 px-9 ">
              <FiShare />
              <AiOutlinePlus />
              <LuCopy />
            </div>
          </div>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="bgblack h-100"
                initial={{ opacity: 0, y: -100 }} // Start off-screen (collapsing from the top)
                animate={{ opacity: 1, y: 0 }} // Animate to the original position (unfolding from the top)
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Nav />
                <Tab />
                {CurrentBody.selectName == null ? (
                  <CardBody />
                ) : (
                  <Code CurrentBody={CurrentBody.selectName}></Code>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
      <div className="vh p-4 bg-gray-800 w-50 mx-auto rounded-full text-center">
        Please use Bigger screen to view this pannel
      </div>
    </>
  );
}

export default Card;
