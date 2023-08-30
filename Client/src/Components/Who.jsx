import React from "react";
import style from "styled-components";

const Section = style.div`
  height: 80vh; 
  scroll-snap-align: center;
  display: flex;
  justify-content: center; 
`;

const Container = style.div` 
  width: 1400px;
  display: flex;

  
`;
const Left = style.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = style.h1`
  font-size: 74px;
  font-weight:300;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const Right = style.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Span = style.span`
font-weight:500`;
const Desc = style.p`
  font-size: 20px;
  color: lightgray;
`;

const Who = () => {
  return (
    <Section id="about">
      <Container>
        <Left></Left>
        <Right>
          <Title>
            <Desc>Hi , My name is </Desc>Sanskar Tyagi <br /> I am{" "}
            <Span>Creative Developer </Span>
          </Title>
          <Desc>
            who relishes the pursuit of <Span>innovative</Span> solutions to
            real-world challenges. I thrive on the intricacies of system designs
            and find joy in unraveling patterns that others might miss. But
            while my technical expertise is undeniable, I also appreciate the
            value of balance. When I'm not lost in code, I indulge my
            non-technical passions, particularly in the art of chess♞
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
