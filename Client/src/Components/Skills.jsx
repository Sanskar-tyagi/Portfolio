import React, { useState } from "react";
import style from "styled-components";
import code from "../assets/careers.png";
import Lottie from "lottie-react";
import animationData from "./ThreeD/animation_lktj80ps.json";
import animationData2 from "./ThreeD/animation_lktjr46n.json";
import animationData3 from "./ThreeD/animation_lktjtatp.json";
import animationData4 from "./ThreeD/animation_lktk7xqa.json";
import animationData5 from "./ThreeD/animation_lktka14t.json";
import animationData6 from "./ThreeD/animation_lktkcoku.json";
import animationData7 from "./ThreeD/animation_lktkfuqf.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
const Section = style.div` 
background-image: url("https://assets.website-files.com/64943f2936915879aa1dae17/649941b81cddf21f55969b93_Ellipse%20footer.svg");
background-position: 50% 100%;
background-repeat: no-repeat;
background-size: 100% 64%;
display: flex;   
gap:10vh;
justify-content: flex-start;
position: relative;
color: black;
font-size: 14px;
font-weight: 300;
flex-direction: column;@media only screen and (max-width: 1400px) {
  width: 100%; 
} 
.swiper-pagination-bullet{
  background:white;
}
align-items: flex-start; 
`;

const Container = style.div`
  width: 100%;

 svg{
  max-height: 60vh; 
}
`;
const Heading = style.h1`
  font-family: "Space Grotesk", sans-serif; 
  font-size: calc(1.375rem + 2vw) !important;

color: white;
margin-left:30px;
@media only screen and (max-width: 768px) {
  margin-left:0px;
} 
align-items: flex-end;
display: flex;

max-height: 20vh;
.float{
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
 }
@keyframes float {
	0% {
 
		transform: translatey(10px);
	}
	50% {
 
		transform: translatey(-15px);
	}
	100% {
		 
		transform: translatey(10px);
	}
}
`;

export default function Skills() {
  return (
    <Section className="dark:bg-black">
      <Heading>
        Tech I love to <img className="float" src={code} alt="" />
      </Heading>
      <Container className="container pb-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={"true"}
          className="mySwiper"
          navigation
          modules={[Pagination, Navigation]}
          pagination={true}
        >
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData2} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData3} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData4} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData5} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData6} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Lottie animationData={animationData7} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
}
