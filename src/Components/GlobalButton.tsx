import React from "react";
import styled from "styled-components";

interface BUT {
  text: string;
  br: string;
  bg: string;
  tt: string;
  by: string;
  be: string;
  bm: string;
  bc: string
}

const GlobalButton: React.FC<BUT> = ({ text, br, bg, tt, by, be, bm, bc }) => {
  return (
    <Container br={br} bg={bg} tt={tt} by={by} be={be} bm={bm} bc={bc}>
      {text}
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div<{ br: string; bg: string; tt: string; by: string; be:string; bm:string; bc: string}>`
  background-color: ${({by}) => (by ? "#FBAF1B" : "white")};
  padding: ${({bc}) => (bc ? "10px 20px" : "10px 30px")};
  color: ${({bm}) => (bm ? "white" : "black")};
  border: ${({be}) => (be ? "1px solid blue" : "#FBAF1B")};
  border-radius: ${({ br }) => (br ? "5px" : "5px")};
  transition: all 350ms;
  font-size: 15px;

  :hover {
    cursor: pointer;
    transform: ${({ tt }) => (tt )};
    background-color: ${({ bg }) => (bg)};
  }
`;
