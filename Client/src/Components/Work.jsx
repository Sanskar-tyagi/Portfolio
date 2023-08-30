import React, { useRef, useState } from "react";
import style from "styled-components";
import Personal from "./Work/Personal";
import Intern from "./Work/Intern";
const Section = style.div` 
display: flex;
align-items: center;
-webkit-box-pack: center;
justify-content: flex-start;
flex-direction: column;   

padding-bottom:10vh;
background-repeat: no-repeat; 
  .tab-button { 
    font-size: 16px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
  }
  .tab-button {
    padding: 10px 30px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;  
  }
  
  .tab-button.active {
    transform: translateX(15px); 
    opacity: 0.4;     
  }
  
`;

const List = style.ul`
  display: flex;
  gap: 20px;
  margin-top: 10vh;
  list-style: none;
  justify-content:center;
  width:40vh;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  align-items: center;
  padding: 10px 10px;

`;

const ListItem = style.li`
  cursor: pointer;
  list-style: none;
  color: white;
  font-family: sans-serif; 
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer; 
  
`;
export default function Work() {
  const [state, setState] = useState(false);
  const handleStates = () => {
    setState(!state);
  };
  return (
    <Section className="pt-5">
      {state ? <h1> Recent Project</h1> : <h1>Recent Work</h1>}
      <List className="menu-bar">
        <ListItem
          className={`tab-button ${state ? "" : "active"}`}
          onClick={() => handleStates()}
        >
          Projects
        </ListItem>
        <ListItem
          className={`tab-button ${state ? "active" : ""}`}
          onClick={() => handleStates()}
        >
          Work
        </ListItem>
      </List>
      <div style={{ display: `${state ? "none" : " inherit"}` }}>
        <Intern />
      </div>
      <div style={{ display: `${state ? "inherit" : "none"}` }}>
        <Personal />
      </div>
    </Section>
  );
}
