import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
function Card({ img, links, ProductName }) {
  return (
    <Container>
      <div class="card" style={{ background: `url(${img})` }}>
        <div className="h1">
          <h1>{ProductName}</h1>
        </div>
      </div>
      <div class="btns">
        {links.github && (
          <a href={links?.github} class="likes">
            <BsGithub />
          </a>
        )}
        <a href={links?.showCase} class="comments">
          <BiLinkExternal />
        </a>
      </div>
    </Container>
  );
}
export default Card;

const Container = styled.div`
  backdrop-filter: blur(4px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  height: 60vh;
  width: 45vw;
  border-top-right-radius: 0;
  border-right: 0px !important;
  border-bottom-right-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  .card {
    width: 100%;
    height: 60vh;
    transition: 0.4s ease-in-out;
    border-radius: 7px;
    cursor: pointer;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    h1 {
      transition: 0.2s ease-in-out;
      opacity: 0;
    }
  }
  @media only screen and (max-width: 968px) {
    .main {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
     {
      width: 90vw;
    }
  }

  .fl {
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  .fl:hover .fullscreen {
    scale: 1.2;
  }

  .fl:hover .fullscreen_svg {
    fill: white;
  }

  &:hover .fl {
    opacity: 1;
    cursor: pointer;
    margin-right: 0.5em;
  }

  .text_m {
    font-weight: bold;
    font-size: 0.9em;
  }

  .btns {
    display: flex;
    gap: 0.5em;
    transition: 0.2s ease-in-out;
    a {
      margin-right: 10px;
      color: white;
    }
  }

  .likes {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5em;
    height: 1.4em;
    border-radius: 4px;
    margin-top: -0.5em;
    opacity: 0;
    background-color: #444857;
    transition: 0.2s ease-in-out;
  }

  .likes_text {
    font-family: Montserrat;
    font-size: 0.8em;
    margin-left: 0.25em;
    color: white;
  }

  .likes_svg {
    width: 12px;
    height: 12px;
    fill: white;
  }

  .likes:hover {
    background-color: #5a5f73;
    cursor: pointer;
  }

  .comments {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5em;
    height: 1.4em;
    border-radius: 4px;
    margin-top: -0.5em;
    opacity: 0;
    background-color: #444857;
    transition: 0.34s ease-in-out;
  }

  .comments_text {
    font-family: Montserrat;
    font-size: 0.8em;
    margin-left: 0.25em;
    color: white;
  }

  .comments_svg {
    width: 12px;
    height: 12px;
    fill: white;
  }

  .comments:hover {
    background-color: #5a5f73;
    cursor: pointer;
  }

  &:hover .likes {
    opacity: 1;
    z-index: 99;
    transform: translate(10px, -30px);
  }

  &:hover .h1 {
    backdrop-filter: blur(5px);
    background: rgb(0, 0, 0, 0.2);
  }
  .h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0px;
    color: white;
  }
  &:hover .card h1 {
    opacity: 1;
    transform: translate(10px, -30px);
  }
  &:hover .comments {
    z-index: 99;
    transform: translate(10px, -30px);
    opacity: 1;
  }

  &:hover .views {
    margin-top: 0.5em;
    opacity: 1;
  }
`;
