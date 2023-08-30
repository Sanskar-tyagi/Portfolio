import React from "react";
import Who from "./Who";
import styled from "styled-components";
import Skills from "./Skills";
import Work from "./Work";
import Hero from "./Hero";

const Section = styled.div`
  .gradient-background {
    background: url("https://a5.behance.net/1735e4e1b69e2cf608642c02bca7bba9377d7bdc/img/assets_discovery/category-all/assets-header.jpg");

    background-position: 53% -9%;
  }

  .web {
    position: fixed;
    top: 100vh;
    height: 200vh;
    width: 100vw;
  }
`;
export default function Wrapper() {
  return (
    <Section id="/">
      <div className="gradient-background">
        <Hero />
        <Who></Who>
      </div>{" "}
      <Skills />
      <Work />
    </Section>
  );
}
