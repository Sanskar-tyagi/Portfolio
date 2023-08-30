import React from "react";
import styled from "styled-components";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .data {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    margin-bottom: 1em;
    gap: 20px;
    align-items: center;
  }
  @media only screen and (max-width: 968px) {
    .data {
      max-width: 80vw;
      align-items: center;
      justify-content: center;
    }
  }

  .img {
    width: 2.25em;
    height: 2.25em;
    background: none;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 2.25em;
      height: 2.25em;
    }
  }

  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 0.5em;
    font-family: Montserrat;
    color: white;
  }
  h1 {
    margin: 0;
  }
`;
function Left({ data }) {
  return (
    <Box>
      <div class="data">
        <div class="img">
          <img src={data?.company} alt="" />
        </div>
        <div class="text">
          <h1>{data.title}</h1>
        </div>
      </div>
      <Card img={data.img} ProductName={data.ProductName} links={data.links} />
    </Box>
  );
}

export default Left;
