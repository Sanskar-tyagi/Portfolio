import React from "react";
import mona from "../../assets/mona-loading-dark.gif";
import styled from "styled-components";

const Container = styled.div`
  img {
    max-height: 50px;
    max-width: 50px;
  }
`;
function Code({ CurrentBody }) {
  return (
    <Container className="p-4 flex flex-col gap-2">
      <img src={mona} alt="" typeof="gif" />
      <span className="text-rose-400">
        Heh.. I'm still working on this part :3
      </span>
      <h1>{CurrentBody}</h1>
      <span className="text-gray-400">
        You can click on Overview to go back!
      </span>
    </Container>
  );
}

export default Code;
