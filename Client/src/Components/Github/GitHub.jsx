import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  .leftBG {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #c58fff 0,
      rgba(133, 177, 255, 0) 100%
    );
    filter: blur(10px);
    mix-blend-mode: screen;
    z-index: 0;
  }
  .bgblack {
    background: #010409;
  }
  padding-top: 20vh;
  .borderWhite {
    border: 1px solid #30363d;
    padding: 5px;
    border-radius: 6px;
  }
  .vh {
    @media (max-width: 767px), (max-width: 991px) {
      display: block;
    }
    display: none;
  }

  .bg-contain {
    background-size: contain !important;
  }
  .right-15 {
    right: 4%;
  }
`;
function GitHub() {
  return (
    <Container>
      <div className="leftBG absolute w-100 h-100"></div>
      <Heading className="relative">My Git</Heading>
      <div
        className="absolute z-10 right-24 w-24 h-24 -mt-16  bg-contain"
        style={{
          background: `url('https://assets.website-files.com/64a6ae6546e30da3d60e40f2/64a6bf989490e3d08102a269_Point-p-500.png')`,
        }}
      ></div>
      <Card />
    </Container>
  );
}

export default GitHub;
const Heading = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: calc(1.375rem + 2vw) !important;
  color: white;
  padding-left: 40px;
  margin-bottom: 10vh;
`;
