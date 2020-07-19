import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  color: black;
  background-color: white;
  border: 2px solid transparent;
  padding: 12px;
  border-radius: 8px;
  margin-top: 13px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: transparent;
    border: 2px solid white;
  }
`;

function PlayAgainBtn(props) {
  return <Btn onClick={() => props.restart()}>Play again</Btn>;
}

export default PlayAgainBtn;
