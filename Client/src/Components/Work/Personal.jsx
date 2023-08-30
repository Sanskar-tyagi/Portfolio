import Container from "./Container";
import Netflix from "../../assets/Desktop/Netflix.jpg";
import BnB from "../../assets/Desktop/BnB.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/images/logo.png";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";
function Personal() {
  let i = 0;
  const Box = styled.div`
    width: 100vw;

    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: var(--swiper-pagination-bottom, -6px);
    }
    .swiper-pagination-bullet {
      background: white !important;
    }
    .swiper {
      height: 100%;
    }
  `;
  const Data = [
    {
      left: {
        title: "BnB Your Home",
        img: BnB,
        ProductName: "AirBnB",
        company: logo,

        links: {
          showCase: "https://bnb-house.vercel.app/",
          github: "https://github.com/Sanskar-tyagi/BnBhouse",
        },
      },
      right: {
        timeline: "Aug 1, 2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laudantium nisi. Eos, eum cupiditate sint accusantium soluta dignissimos reiciendis vel, aspernatur in voluptate voluptas animi ipsum quas dolorum harum molestias!",
        tech: [
          { name: "react", fill: "#61DAFB" },
          { name: "Nextjs", fill: "#000000" },
          { name: "Prisma", fill: "#1B222D" },
          { name: "TS", fill: "none" },
          { name: "mongoDB", fill: "#47A248" },
          { name: "Tailwind", fill: "#38B2AC" },
        ],
      },
    },
    {
      left: {
        title: "Netflix n' Anime",
        img: Netflix,
        ProductName: "Netflix",
        company: logo,
        links: {
          showCase: "https://iappsolution.tech/",
          github: "https://github.com/Sanskar-tyagi/Netflix_Clone",
        },
      },
      right: {
        timeline: "Feb 19, 2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laudantium nisi. Eos, eum cupiditate sint accusantium soluta dignissimos reiciendis vel, aspernatur in voluptate voluptas animi ipsum quas dolorum harum molestias!",
        tech: [
          { name: "react", fill: "#61DAFB" },
          { name: "node", fill: "#6CC24A" },
          { name: "express", fill: "#000000" },
          { name: "mongoDB", fill: "#47A248" },
        ],
      },
    },

    {
      left: {
        title: "LinkShortner",
        img: "LinkShortner",
        ProductName: "LinkBit",
        company: logo,

        links: {
          showCase: "",
          github: "https://github.com/Sanskar-tyagi/LinkShortner",
        },
      },
      right: {
        timeline: "Jul 14, 2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laudantium nisi. Eos, eum cupiditate sint accusantium soluta dignissimos reiciendis vel, aspernatur in voluptate voluptas animi ipsum quas dolorum harum molestias!",
        tech: [
          { name: "node", fill: "#6CC24A" },
          { name: "express", fill: "#000000" },
          { name: "mongoDB", fill: "#47A248" },
        ],
      },
    },
  ];
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        grabCursor={"true"}
        spaceBetween={30}
        centeredSlides={"true"}
        className="mySwiper"
        navigation
        modules={[Pagination, Navigation]}
        pagination={true}
      >
        {" "}
        {Data.map((item) => {
          return (
            <SwiperSlide>
              <Container data={item} key={i++} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default Personal;
