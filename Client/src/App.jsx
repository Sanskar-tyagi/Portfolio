import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import React from "react";
import style from "styled-components";
import Wrapper from "./Components/Wrapper";
import Call from "./Private/Call";
import bg from "./assets/images/bg.jpg";
import GitHub from "./Components/Github/GitHub";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { Toaster } from "react-hot-toast";
import Terminal from "./Components/Terminal";

const Container = style.div` 
background: #0d0d0d;
scroll-behaviour:smooth; 
color:white;
&::-webkit-scrollbar{
  display:none;
}  
.webgiCanva {
  background:none;
  height: 100vh; 
  width: 100vw;  
}    
`;
function App() {
  return (
    <Provider store={store}>
      <Container>
        <Toaster />
        <Nav />
        <Wrapper></Wrapper>
        <Terminal />
        <Call />
        <GitHub />
        <Contact />
      </Container>
    </Provider>
  );
}

export default App;
