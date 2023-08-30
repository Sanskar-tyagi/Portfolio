import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Terminal from "react-console-emulator";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../Store/openModal";
import Draggable from "react-draggable";
import { AnimatePresence, motion } from "framer-motion";
import { setName, setEmail } from "../Store/UserData";
const ListItem = styled.div`
  .list {
    display: flex;
    padding-top: 3px;
    padding-bottom: 3px;
    gap: 2px;
    li {
      list-style: none;
    }
  }
`;


function TerminalModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.open.isOpen);
  const handleSwitch = () => {
    dispatch(toggleOpen());
    console.log(isOpen);
  };
  const CommandList = [
    { name: "Help", desc: "Show a list of available commands." },
    {
      name: "clear",
      desc: " Empty the terminal window.",
    },
    {
      name: "Name",
      desc: "use this command followed by your name to save in my dir",
    },
    { name: "Email", desc: "use this command to save your Email in my dir" },
    { name: "Message", desc: "use this command to send a message to me" },
    { name: "User", desc: "Display current user" },
    { name: "Projects", desc: "Shows a list of all available the Projects" },
    {
      name: "{ProjectName}",
      desc: "Enter project Name from the list to open in new tab",
    },

    // {
    //   name: "{PageName}",
    //   desc: "use this command to go to certain page in the site",
    // },
  ];
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setmail] = useState("");
  const [message, setMessage] = useState("");
  const Project = [
    {
      name: "Plearn",
      link: "https://plearngame.netlify.app/",
    },
    {
      name: "AirBnB",
      link: "https://bnb-house.vercel.app/",
    },
    {
      name: "Netflix-Clone",
      link: "https://netflixxui.netlify.app/",
    },
    {
      name: "IappTech",
      link: "https://iappsolution.tech/",
    },
    {
      name: "HissaArt",
      link: "http://hissaart.com/",
    },
  ];

  const terminalRef = useRef(null);
  const commands = {
    Name: {
      description: "use this command to add your name",
      fn: function (arg1) {
        if (arg1 === "") {
          return (
            <>
              <span className="text-white">Please Enter a valid name</span>
            </>
          );
        }
        dispatch(setName(arg1));
        setname(arg1);
        const Message = () => {
          return (
            <>
              <span className="text-white">Thanks for reaching out </span>
              {arg1}
              <br />
              <span className="text-white">
                Please use email space followed with your email to save
              </span>
            </>
          );
        };

        return Message();
      },
    },
    email: {
      description: "use this command to add your email",
      fn: async function (arg1) {
        const validEmail = (arg1) => {
          const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
          // ^[A-Za-z][A-Za-z0-9_]{7,29}$
          return emailPattern.test(arg1);
        };
        if (arg1 === "" || !validEmail(arg1)) {
          return (
            <>
              {console.log(validEmail(arg1))}
              {console.log(arg1)}
              <span className="text-white">Please Enter a valid Email</span>
            </>
          );
        }
        dispatch(setEmail(arg1));
        setmail(arg1);
        const Message = () => {
          return (
            <>
              <span className="text-white">Thanks for reaching out </span>
              {arg1}
              {console.log(validEmail(arg1))}
              {console.log(arg1)}

              <br />
              <span className="text-white">
                Please use Message space followed with your message to send
              </span>
            </>
          );
        };
        return Message();
      },
    },
    Message: {
      description: "use this command to Reach out!",
      fn: async function (arg1) {
        setMessage(arg1);
        if (arg1 == "") {
          return (
            <>
              <span className="text-white">Please Enter a valid Message</span>
            </>
          );
        }
        if (name == "" || email == "") {
          const Message = () => {
            return (
              <>
                <span>
                  Please input your name and email before reaching out using the
                  commands
                </span>
              </>
            );
          };
          return Message();
        }
        const Message = () => {
          return new Promise(async (resolve, reject) => {
            const userData = {
              message,
              name,
              email
            };
            try {
              const response = await fetch('http://localhost:5000/Post', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ UserData: userData })
              });
              const data = await response.json();
              console.log(data.message);
              const content = (
                <div>
                  <span>
                    Thanks for reaching out! {name === "" ? email : name}
                  </span>
                </div>
              );
              resolve(content)
            } catch (error) {
              console.error('Error:', error);
              reject(error);
            }
          });
        };

        return Message();
      },
    },
    User: {
      description: "use this command to view the current User",
      fn: () => {
        if (name == "" && email == "") {
          return (
            <>
              <span className="text-white">
                <span className="text-red-500 font-bold">Opps..!</span> <br /> Looks like you're new here
              </span>{" "}
              <br />
              <span className="text-white">
                No Worries use the commands to tell me who you are!
              </span>
            </>
          );
        }
        return (
          <>
            <span className="text-white">Current User Name:</span>
            <span>{name}</span>
            <br />
            <span className="text-white">Current User Email: </span>
            {email}
          </>
        );
      },
    },
    help: {
      description: "use this command to list all the Commands",
      fn: () => {
        return CommandList.map((item) => {
          return (
            <ListItem>
              <div className="list">
                <li className=" text-slate-200">{item.name}</li>
                <span className="text-green-400">- {item.desc}</span>
              </div>
            </ListItem>
          );
        });
      },
    },
    clear: {
      fn: () => {
        terminalRef.current.clearStdout();
        return;
      },
    },
    Projects: {
      description: "use this command to list all the Commands",
      fn: () => {
        return (
          <div className="flex gap-2">
            {" "}
            {Project.map((item) => {
              return (
                <div className="list proje flex">
                  <li className="text-green-500 list-none">{item.name}</li>
                </div>
              );
            })}
          </div>
        );
      },
    },
    delay: {
      description: "Delays return of value by 1000 ms.",
      fn: () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve("Finished!"), 1000);
        });
      },
    },
  };

  Project.forEach((item) => {
    commands[item.name] = {
      fn: () => {
        setTimeout(() => window.open(item.link, "_blank"), 750);
        return `Opening ${item.name} in a new tab...`;
      },
    };
  });
  const returntext = () => {
    return (
      <span className="text-green-500">
        Sanskar@React
        <span className="text-blue-400">:/Portfolio/cmd~</span>
        <span className="text-white">$</span>
      </span>
    );
  };
  const welcomeMessage = () => {
    return (
      <div className="flex flex-col">
        <span className="">
          Use <span className="text-white">Help</span> to show Commands
        </span>
      </div>
    );
  };
  const [isDisable, setisDisable] = useState(false);
  const [min, setMin] = useState("");
  const [tools, settools] = useState("d-none");

  useEffect(() => {
    if (min == "maximize") {
      setTimeout(() => {
        setMin("");
      }, 1000);
    }
    setMin("maximize");
  }, [isOpen])
  const [D, setD] = useState("d-none");
  useEffect(() => {
    if (D === "minimize") {
      setTimeout(() => {
        setD("d-none");
      }, 1000);
    } else {
      setD("minimize");
      setTimeout(() => {
        setD("d-none");
      }, 400);
    }
  }, [isOpen])
  const [tool, settool] = useState("");
  useEffect(() => {
    setTimeout(() => {
      settools("isDis");
      settool("trans")
    }, 800);
    if (tools == "isDis") {
      settools("isDat");
      settool("");
    }
  }, [isDisable])

  return (
    <Draggable handle=".handle" disabled={isDisable}>
      <Box
        className={`fixed  top-24 rounded-xl md:left-1/3 
             ${!isOpen ? D : min}  `}
      >
        <div class="cont" id="canvas2">
          <div
            class={`Terminal__Toolbar 
            ${isDisable ? "mintools" : "max"} ${isDisable ? tool : ''}  handle focus-visible:cursor-grabbing cursor-grab  `}
          >
            <div class="Toolbar__buttons">
              <button
                class="Toolbar__button   Toolbar__button--exit"
                onClick={() => {
                  handleSwitch();
                }}
              >
                &#10005;
              </button>

              <button
                class="Toolbar__button"
                onClick={() => {
                  setisDisable(false);
                }}
              >
                &#9723;{" "}
              </button>
              <button
                class="Toolbar__button"
                onClick={() => {
                  setisDisable(true);
                }}
              >
                &#9472;
              </button>
            </div>
            <p class="Toolbar__user me-56">cody@ubuntu:~</p>
          </div>
          <div class={`Terminal ${isDisable ? "min" : "max"} ${isDisable ? tools : ''} `}  >
            <AnimatePresence>
              {!isDisable && (
                <motion.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <Terminal
                    noDefaults
                    ignoreCommandCase
                    className="p-0"
                    ref={terminalRef}
                    commands={commands}
                    welcomeMessage={welcomeMessage()}
                    promptLabel={returntext()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Box>
    </Draggable>

  );
}

export default TerminalModal;
const Box = styled.div`
  z-index: 999;
  width: 40vw;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  background: #212121;
  
  span,
  input {
    font-size: 15px;
    font-family: "Space Grotesk", sans-serif;
  }
  @media only screen and (max-width: 868px) { 
    width:90vw;
  }
  input {
    padding: 4px 0px 0px 7px !important;
    color: white !important;
  }
  
  .max {
    width: 100%;
    height: 100%;
    transition: .5s all;
  }
  .mintools{ 
    width: 54% !important;
    transition: .5s all;
  }
  .trans{
    right:0;
    position:absolute;
    top:80vh; 
  }
  .min {
    width: 54%!important;
    transition: 0.5s all;
  }
  .isDis{
    transform: translate(-500px, 1500px) scale(0);
    transition: 0.8s all;
  }
  .isDat{
    transform: translate(0px, 0px) scale(1);
    transition: 0.8s all;
  }
  .cont {
    display: flex;
    width: 100%;
    height: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Terminal {
    background: rgba(56, 4, 40, 0.9) !important;
    border-radius: 6px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  }
  div[name="react-console-emulator__content"] {
    padding: 10px 0px 0px 10px !important;
    color: #33da7a !important;
    background: rgba(56, 4, 40, 0.9) !important;
  }
  div[name="react-console-emulator"] {
    background: rgba(56, 4, 40, 0.9) !important;
    height: 70vh;
  }
  div[name="react-console-emulator"] {
    background: rgba(56, 4, 40, 0.9) !important;
    height: 70vh;
  }
  .Terminal__Toolbar {
    background: linear-gradient(#504b45 0%, #3c3b37 100%);
    width: 100%;
    padding: 10px 16px;
    box-sizing: border-box;
    height: 32px;
    display: flex;
    align-items: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    justify-content: space-between;
  }

  .Toolbar__buttons {
    display: flex;
    align-items: center;
  }

  .Toolbar__button {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 0;
    padding: 0.6rem !important;
    font-size: 10px;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
    border: none;
    margin-right: 4px;
  }
  .Toolbar__button:hover {
    cursor: pointer;
  }
  .Toolbar__button--exit {
    background: #f25d2b;
    background: linear-gradient(#f37458 0%, #de4c12 100%);
    background-clip: padding-box;
  }
  .Toolbar__button:focus {
    outline: none;
  }

  .Toolbar__user {
    margin-left: 4px;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 1px;
  }
  .Terminal__body {
    background: rgba(56, 4, 40, 0.9);
    height: calc(100% - 25px);
    margin-top: -1px;
    padding-top: 2px;
    font-family: "Ubuntu mono";
  }
  .Terminal__text {
    color: #ddd;
  }

  .Terminal__Prompt {
    margin-top: 10px;
    display: flex;
  }

  .Prompt__user {
    color: #87d441;
  }
  .Prompt__location {
    color: #6d85a9;
  }
  .Prompt__dollar {
    color: #ddd;
  }
  .Prompt__cursor {
    height: 17px;
    width: 8px;
    background: white;
    display: block;
    margin-left: 8px;
    animation: 2000ms ease infinite alternate blink;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 500px) {
    width:100vw;
  }
`;
