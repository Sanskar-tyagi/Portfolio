import React from "react";
import styled from "styled-components";
import animationData from "./ThreeD/animation_lkwewhj5.json";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
const Left = styled.div`
  width: 70vw;
  padding-top: 30vh;
  display: grid;
  grid-template-columns: auto auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    grid-template-columns: auto;
  }
  @media screen and (max-width: 1220px) {
    width: 100%;
    padding-top: 10vh;
  }
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;
  .parallax-effect-glare-scale {
    display: flex;
    background-size: contain;
    cursor: pointer;
    background-repeat: no-repeat;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    height: 75vh;
    @media screen and (max-width: 1370px) {
      width: 100%;
      height: 90vh;
    }
    width: 30vw;
    color: white;
    border: 5px solid white;
    border-radius: 20px;
    transform-style: preserve-3d;

    .inner-element {
      display: flex;
      flex-direction: column;
      height: 90%;
      align-items: center;
      justify-content: flex-end;
      font-size: 15px;
      font-style: italic;
      color: white;
      transform: translateZ(60px);
    }
  }

  img {
    max-width: 100%;
  }

  $title-font: "Space Grotesk", sans-serif;
  $subtitle-font: "Inter", sans-serif;
  $italic-font: "Playfair Display", serif;
  $blog-bg: #e9e6e4;
  $body-bg: #121418;
  $title-color: #121418;
  $subtitle-color: #161419;
  $border-color: #94918f;

  .blog {
    background-color: $blog-bg;
    max-width: 1350px;
    display: grid;
    height: 90vh;
    max-height: 800px;
    overflow: hidden;
    grid-template-columns: 15% 20% 35% 30%;
    grid-template-rows: 100%;
    width: 100%;
    padding: 40px 4px;
    @media screen and (max-width: 1030px) {
      grid-template-columns: 20% 50% 30%;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 25% 75%;
      width: 100%;
      max-width: none;
    }

    @media screen and (max-width: 560px) {
      grid-template-columns: 100%;
    }

    &-part {
      padding: 0 20px;

      &:not(:last-child) {
        border-right: 1px solid $border-color;
      }
    }

    &-menu {
      font-size: 22px;
      text-decoration: none;
      color: $subtitle-color;
      display: flex;
      letter-spacing: -0.5px;
      align-items: center;

      @media screen and (max-width: 1260px) {
        font-size: 1.6vw;
      }

      svg {
        width: 22px;
        margin-left: 4px;
      }

      & + & {
        margin-top: 24px;
      }

      &.mention {
        margin-top: auto;
        font-size: 19px;

        @media screen and (max-width: 1260px) {
          font-size: 1.4vw;
        }
      }

      &.subscribe {
        margin-top: 8px;
        font-size: 19px;

        @media screen and (max-width: 1260px) {
          font-size: 1.4vw;
        }

        &:before {
          content: "";
          width: 16px;
          height: 16px;
          background-color: $subtitle-color;
          left: 0;
          border-radius: 1px;
          margin-right: 14px;
        }
      }
      &.rounded {
        &:before {
          content: "";
          border-radius: 50%;
          width: 12px;
          height: 12px;
          background-color: $subtitle-color;
          margin-right: 12px;
        }
      }
    }

    .is-menu {
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 1030px) {
        display: none;
      }
    }

    &-big__title {
      font-size: 132px;
      font-family: $title-font;
      font-weight: 700;
      letter-spacing: -5px;
      line-height: 1;
      margin-bottom: 6px;

      @media screen and (max-width: 1400px) {
        font-size: 120px;
      }

      @media screen and (max-width: 1260px) {
        font-size: 9vw;
        letter-spacing: -2px;
      }

      @media screen and (max-width: 560px) {
        font-size: 36px;
        margin-bottom: 12px;
      }
    }

    &-header {
      display: flex;
      flex-direction: column;
    }

    &-article {
      padding: 0px 50px;

      img {
        height: 40%;
        width: 100%;
        @media screen and (max-width: 1370px) {
          height: 50%;
        }
      }
    }
  }

  .page-number {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    font-size: 72px;
    text-align: center;
    letter-spacing: -3px;
    font-weight: lighter;
    font-family: $title-font;
    border-right: 1px solid $border-color;
    white-space: nowrap;

    @media screen and (max-width: 1260px) {
      font-size: 5vw;
    }
  }

  .small-title {
    border-bottom: 1px solid $border-color;
    margin-bottom: 20px;
    padding-bottom: 20px;

    @media screen and (max-width: 560px) {
      font-size: 14px;
      top: 10px;
      right: 24px;
      border-bottom: 0;
    }
  }

  .date {
    display: flex;
    justify-content: flex-end;
  }

  .blog-article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
    height: 100%;
    h2 {
      font-size: 26px;
      font-weight: 500;
      line-height: 1.2;
      margin: 8px 0 8px;

      span {
        font-family: $italic-font;
      }
    }

    p {
      line-height: 1.5;
      margin: 14px 0;
    }

    a {
      color: $subtitle-color;
      text-decoration: none;
      font-size: 26px;
      letter-spacing: -1px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 1px solid $border-color;
      padding-top: 4px;

      svg {
        width: 26px;
        margin-right: 10px;
      }
    }
  }

  .blog-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    span {
      font-family: $italic-font;
    }
  }

  .blog-header-container {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    border-right: 1px solid $border-color;

    @media screen and (max-width: 768px) {
      border-right: 0;
    }

    & > * {
      flex-shrink: 0;
      min-height: 100%;
      scroll-snap-align: start;
    }

    .blog-article:not(.header-article) {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }

  marquee {
    font-size: 20px;
    background-color: $body-bg;
    color: $blog-bg;
    padding: 6px 0;
    width: calc(100% + 44px);
    margin-left: -20px;
    flex-shrink: 0;

    span:before {
      display: inline-block;
      content: "";
      border-radius: 50%;
      width: 10px;
      height: 10px;
      top: -1px;
      vertical-align: baseline;
      background-color: $blog-bg;
      margin: 0 16px;
    }
  }

  .blog-right {
    overflow: auto;
    height: calc(100% + 60px);
    .rounded {
      font-style: italic;
      font-size: 18px;
      &:before {
        content: "";
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background-color: rgb(22 20 25);
        margin-right: 6px;
      }
    }
  }

  .blog-right-title {
    font-size: 25px;
    font-family: $italic-font;
  }

  .blog-right-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $border-color;
    margin-bottom: 20px;
    padding-bottom: 20px;
    margin-top: 100px;
    letter-spacing: -1px;

    @media screen and (max-width: 1400px) {
      margin-top: 88px;
    }

    @media screen and (max-width: 1260px) {
      margin-top: 6vw;
    }

    @media screen and (max-width: 1030px) {
      margin-top: 5vw;
    }
  }

  .blog-title-date {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .blog-right-page {
    font-size: 56px;
    margin-bottom: 16px;
    font-family: $title-font;

    &-title {
      font-family: $title-font;
      font-size: 28px;
      font-weight: 600;
      max-width: 16ch;
      letter-spacing: -2px;
    }

    &-subtitle {
      max-width: 33ch;
      font-size: 15px;
      margin-top: 12px;
      line-height: 1.4;
    }
  }

  .blog-right-container + .blog-right-container {
    margin-top: 40px;
  }

  .right-blog {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      display: none;
    }

    .blog-menu {
      @media screen and (max-width: 1030px) {
        display: none;
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .circle {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: $body-bg;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: $blog-bg;
    padding: 20px;
    text-align: center;
    margin-top: 40px;

    &-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 12px;
      font-family: $title-font;

      @media screen and (max-width: 1030px) {
        display: none;
      }
    }

    &-subtitle {
      max-width: 30ch;
      font-size: 14px;
      line-height: 1.3;
      margin-bottom: 16px;
    }

    &-footer {
      font-family: $italic-font;
      font-size: 30px;
    }
  }

  .blog-is-sticky {
    @media screen and (max-width: 560px) {
      display: none;
    }
  }
`;
const Right = styled.div`
  margin-top: 28vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1 {
    font-size: 70px;
    font-family: "Space Grotesk", sans-serif;
    color: #fac2ff;
  }
  span {
    font-family: "Space Grotesk", sans-serif;
  }
  svg {
    max-height: 25vh;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 1260px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  .bgimg {
    height: 20vw;
    width: 20vw;
  }
  .leftBG {
    background: radial-gradient(
      50% 50% at 8% 40%,
      rgb(197 143 255 / 84%) 0px,
      rgba(133, 177, 255, 0) 100%
    );
    filter: blur(10px);
    mix-blend-mode: screen;
    z-index: 0;
  }
  .blogitem {
    transition: transform 0.525s;
  }

  .blogitem:hover {
    transform: scale(0.9);
  }
`;
export default function Blog({ data, profile }) {
  const item = data.item;
  item.forEach((item) => {
    item.itemName = profile.name;
  });
  console.log(item);
  const ToText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <Container className=" z-10">
      <div className="leftBG absolute w-100 h-100"></div>
      <img
        className="absolute rounded-full bgimg right-1 z-0 "
        src="https://images.ctfassets.net/mbkeph6hcz7u/2DPl1E9vUU0uFhdFieo1Qf/3158082fbf1abf191fcc8779f5cccd4b/archive-of-feelings-signpost.png?fm=jpg&fl=progressive&q=80&h=720"
        alt=""
      />

      <Left>
        {item.map((posts) => {
          return (
            <div key={posts.title}>
              <Tilt
                className="parallax-effect-glare-scale blogitem"
                perspective={900}
                glareEnable={true}
                tiltReverse={true}
                glareMaxOpacity={0.25}
                scale={0.9}
                transitionSpeed={2500}
              >
                <div className="inner-element">
                  <div class="blog-article">
                    <img className={`bg-white ${posts?.title === "Unlocking the Power of Closures: A Journey into JavaScript’s Hidden Gems" ? "object-contain" : " object-cover"}`} src={posts.thumbnail} alt="" />
                    <h2>{posts.title}</h2>
                    <div class="blog-detail">
                      <span>By {posts.author}</span>
                      <span>5 Min Read</span>
                    </div>
                    <p>
                      {ToText(posts.description.substring(0, 1000)).substring(
                        0,
                        104
                      )}
                    </p>
                    <a className="hover:text-purple-400" href={posts.link}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-corner-down-right"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 10l5 5-5 5" />
                        <path d="M4 4v7a4 4 0 004 4h12" />
                      </svg>
                      See More
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </Left>
      <Right className="relative z-10">
        <h1>Blogs</h1>
        <span>And I do like to write about things i love :3</span>
        <Lottie animationData={animationData} />
      </Right>
    </Container>
  );
}
