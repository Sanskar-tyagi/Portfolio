import React, { Suspense, useState } from "react";
import style from "styled-components";
import code from "../assets/Code.svg";
import cursor from "../assets/Navigation.png";

const Section = style.div`  
display:flex;    
 justify-content: space-evenly;
 
`;
const Container = style.div`
display:flex;
width:1400px;    margin-top: 120px;
.followMe{
  transform:translate(-20%,-30%);
  pointer-events:none;
  @media only screen and (max-width: 768px) {
   display:none;
  }    
 top: 50vh;
 left:70vw; 
}
justify-content: space-between;
@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`;
const Left = style.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px; 
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
  .text{
    h1 {  
      animation: lights 5s 750ms linear infinite;
    }@keyframes lights {
      0% {
        color: hsl(230, 40%, 80%);
        text-shadow:
          0 0 1em hsla(320, 100%, 50%, 0.2),
          0 0 0.125em hsla(320, 100%, 60%, 0.3),
          -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
          1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
      }
      
      30% { 
        color: hsl(230, 80%, 90%);
        text-shadow:
          0 0 1em hsla(320, 100%, 50%, 0.5),
          0 0 0.125em hsla(320, 100%, 60%, 0.5),
          -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
          0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
      }
      
      40% { 
        color: hsl(230, 100%, 95%);
        text-shadow:
          0 0 1em hsla(320, 100%, 50%, 0.5),
          0 0 0.125em hsla(320, 100%, 90%, 0.5),
          -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
          0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
      }
      
      70% {
        color: hsl(230, 80%, 90%);
        text-shadow:
          0 0 1em hsla(320, 100%, 50%, 0.5),
          0 0 0.125em hsla(320, 100%, 60%, 0.5),
          0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
          -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
      }
      
      100% {
        color: hsl(230, 40%, 80%);
        text-shadow:
          0 0 1em hsla(320, 100%, 50%, 0.2),
          0 0 0.125em hsla(320, 100%, 60%, 0.3),
          1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
          -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
      }
      
    }
    
}
`;
const Right = style.div`
  flex: 3;
  cursor: none;
   
  border-top: 2px solid rgba(223, 239, 254, .14);
  border-radius: 20px;
  position: relative;
  .light{
    width: 400px;
    height: 200px;
    background-image: radial-gradient(circle closest-corner at 50% 0, rgba(200, 200, 200, .17), rgba(0, 0, 0, 0));
    position: absolute; 
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
  }
  .limeLight{ 
    width: 200px;
    height: 3px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(143, 143, 143, .76) 50%, rgba(0, 0, 0, 0));
    position: absolute;
    top: -2px;
    bottom: auto;
  }
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  .light{
      width: 200px;
      height: 200px;}
  }
  img{
    width: 1000px;
    height: 600px;
    object-fit: contain;
    @media only screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    } 
  }

`;
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: "70vw", y: "50vh" });
  const followImage = document.querySelector(".followMe");
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
    if (followImage) {
      followImage.style.top = e.pageY + "px";
      followImage.style.left = e.pageX + "px";
      followImage.animate(
        {
          left: e.pageX + "px",
          top: e.pageY + "px",
        },
        { duration: 300, fill: "forwards" }
      );
    }
  };
  const handleMouseLeave = () => {
    setMousePosition({ x: "70vw", y: "50vh" });
    if (followImage) {
      followImage.style.top = "50%";
      followImage.style.left = "50%";
      followImage.animate(
        {
          left: "70vw",
          top: "50vh",
        },
        { duration: 200, fill: "forwards" }
      );
    }
  };
  return (
    <Section>
      <Container>
        <Left>
          <div className="text pl-6">
            <h1 className="display-1">Creative</h1>
            <h1 className="display-1">Web</h1>
            <h1 className="display-1">Developer</h1>
          </div>
        </Left>
        <Right onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="light sm:left-1/3 left-0 top-0"></div>
          <div className="limeLight sm:left-1/3 left-0"></div>
          <img className="rounded-md" src={code} alt="" />
        </Right>
        <img
          className="w-20 h-20 absolute followMe "
          src={cursor}
          alt=""
          style={{
            top: `${mousePosition.y}`,
            left: `${mousePosition.x}`,
          }}
        />
      </Container>
    </Section>
  );
};

export default Hero;
