import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";
const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

function Container({ data }) {
  return (
    <Section>
      <Left data={data.left} />
      <Right data={data.right} />
    </Section>
  );
}

export default Container;
