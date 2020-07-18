import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  color: black;
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  margin-top: 13px;
  cursor: pointer;
`;

function PlayAgainBtn() {
  return <Btn>Play again</Btn>;
}

export default PlayAgainBtn;
