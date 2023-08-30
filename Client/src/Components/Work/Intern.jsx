import Container from "./Container";
import Plearn from "../../assets/Desktop/Plearn.jpg";
import Iapp from "../../assets/Desktop/Iapp.jpg";
import HissaArt from "../../assets/Desktop/HissaArt.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";
function Intern() {
  const Data = [
    {
      left: {
        title: "Cryptostien",
        img: Plearn,
        ProductName: "Plearn",
        company:
          "https://media.licdn.com/dms/image/C4E0BAQGFlqZwJC5ejQ/company-logo_100_100/0/1677745478946?e=1698883200&v=beta&t=_SfmN-807Fsa7zGZ6cEWN8rmVPMBZz_wpH4RknZ_Z48",
        links: {
          showCase: "https://plearngame.netlify.app/",
          github: "",
        },
      },
      right: {
        timeline: "Oct 2022 - Curr",
        desc: "I led the creation of PLEARN, harnessing MERN stack's power for a dynamic web app. Crafted an inviting gateway via an interactive landing page, enhancing user immersion. Skillfully implemented React Redux for seamless state management, ensuring a flawless experience. Designed a visually pleasing UI to captivate and retain users. Seamlessly integrated in-game purchases, enabling effortless transactions within the site.!",
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
        title: "Codishk",
        img: Iapp,
        ProductName: "iAppSolutions",
        company:
          "https://media.licdn.com/dms/image/C4E0BAQHzcU72Cl2E5A/company-logo_200_200/0/1644921454734?e=2147483647&v=beta&t=qBWhLK1boAF2AqBXwdFARI3qyhITevWp-WdePU_kT9M",
        links: {
          showCase: "https://iappsolution.tech/",
          github: "",
        },
      },
      right: {
        timeline: "June 2022 - Oct 2022",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laudantium nisi. Eos, eum cupiditate sint accusantium soluta dignissimos reiciendis vel, aspernatur in voluptate voluptas animi ipsum quas dolorum harum molestias!",
        tech: [
          { name: "Js", fill: "#F7DF1E" },
          { name: "Css", fill: "#1572B6" },
          { name: "Html", fill: "#E34F26" },
        ],
      },
    },
    {
      left: {
        title: "Codishk",
        img: HissaArt,
        ProductName: "Hissa Art",
        company:
          "https://media.licdn.com/dms/image/C4E0BAQHzcU72Cl2E5A/company-logo_200_200/0/1644921454734?e=2147483647&v=beta&t=qBWhLK1boAF2AqBXwdFARI3qyhITevWp-WdePU_kT9M",

        links: {
          showCase: "",
          github: "",
        },
      },

      right: {
        timeline: "June 2022 - Oct 2022",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laudantium nisi. Eos, eum cupiditate sint accusantium soluta dignissimos reiciendis vel, aspernatur in voluptate voluptas animi ipsum quas dolorum harum molestias!",
        tech: [
          { name: "Js", fill: "#F7DF1E" },
          { name: "Css", fill: "#1572B6" },
          { name: "Html", fill: "#E34F26" },
        ],
      },
    },
  ];
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
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        grabCursor={"true"}
        spaceBetween={30}
        centeredSlides={"true"}
        navigation
        className="mySwiper"
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

export default Intern;
