import React, { useRef, useState } from "react";
import style from "styled-components";
import Leetcode from "./ThreeD/Logos/animation_lkwhb4dr.json";
import CodeForces from "./ThreeD/Logos/animation_lkwhejhe.json";
import Medium from "./ThreeD/Logos/animation_lkwhhyv9.json";
import HashNode from "./ThreeD/Logos/animation_lkwhl83c.json";
import Gmail from "./ThreeD/Logos/animation_lkwhoa41.json";
import Lottie from "lottie-react";
import videos from "../assets/bg-compressed.mp4";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: videos,
    },
  ],
};

const options = {
  fullscreen: {
    enabled: false,
  },
  controls: false,
  autoplay: true,
  muted: true,
  loop: { active: true },
  storage: { enabled: false },
};
const MyComponent = React.memo(() => {
  return (
    <>
      <Plyr source={videoSrc} frameborder="0" options={options} />
    </>
  );
});
const Section = style.div` 
padding-top: 15vh; 
margin-top: 30vh;
justify-content: space-between;  
display:flex;
flex-direction:column; 
height: 100vh !important;
align-items:center;
scroll-snap-align:center;
.colored{
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(107deg, #f74986, #5e54f3);
  -webkit-background-clip: text;
 } 
h1{ 
  font-family: "Space Grotesk", sans-serif;
  text-decoration:underline;
  font-size: calc(1.375rem + 1.5vw) !important;
  line-height:4rem;
}
a{
  text-decoration:none; 
}
.plyr{
  height:60%!important;
}
.body { 
  display: flex; 
          justify-content: center; 
          align-items: center;  
          perspective: 90rem; 
          perspective-origin: 34% 61%; 
}
   .where{
    background-image: url("https://assets.website-files.com/6481a6c4b3cce6fad9f8027f/6486f3b2d4b5647da106567a_pic.svg");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto;
    padding-right: 82px;
   } 
  
  .top-50{ 
    left: 50%;
    transform: translate(-50%, -20%);
  }
  svg{
    width:10vh !important;
    height:10vh !important; 
    fill:white;
   }
   .increase{
      cursor:pointer;
   }
`;

export default function Contact() {
  const Data = [
    {
      img: Leetcode,
      link: "https://leetcode.com/SanskarTyagi/",
      profileStates: "",
      siteName: "LeetCode",
    },
    {
      img: CodeForces,
      link: "https://codeforces.com/profile/Oculus_KAMI",
      profileStates: "",
      siteName: "Codeforces",
    },
    {
      img: Medium,
      link: "https://medium.com/@sanskarbhartityagi",
      profileStates: "",
      siteName: "medium",
    },
    {
      img: HashNode,
      link: "https://tyagi-writes.hashnode.dev/",
      profileStates: "",
      siteName: "HashNode",
    },
    {
      img: Gmail,
      link: "mailto:sanskarbhartityagi@gmail.com",
      profileStates: "",
      siteName: "Email",
    },
  ];
  const [i, setI] = useState(0);
  const handleIncrease = () => {
    if (i < 4) {
      setI((prevI) => prevI + 1);
    }
    console.log(i);
  };

  const handleDecrease = () => {
    if (i > 0) {
      setI((prevI) => prevI - 1);
    }
    console.log(i);
  };
  return (
    <Section className=" relative bg-black h-100">
      <h1>
        <h1 className="colored">Last but not least ,</h1>{" "}
        <h1 className="where">Where</h1>
        <h1 className="colored"> else do i exist?</h1>
      </h1>
      <div className="flex w-50 z-20 absolute pt-4  top-50   justify-between items-center">
        <div
          className="increase"
          onClick={() => {
            handleDecrease();
          }}
        >
          <img src={plus} className="w-10" alt="" />
        </div>
        <div
          className="increase"
          onClick={() => {
            handleIncrease();
          }}
        >
          <img src={minus} className="w-10" alt="" />
        </div>
      </div>
      <div className="flex z-20 absolute  top-50  pt-4 gap-4 justify-center items-center flex-col">
        <Lottie
          className={` ${i == 1 || i == 2 ? "dark:bg-white" : ""} ${
            i == 1 ? "rounded-full" : "rounded-lg"
          }`}
          loop={false}
          animationData={Data[i]?.img}
        />
        <a className="hover:text-purple-400" href={Data[i].link}>
          {Data[i]?.siteName}
        </a>
      </div>

      <MyComponent />
    </Section>
  );
}
