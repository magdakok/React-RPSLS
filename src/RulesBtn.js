import React from "react";
import styled from "styled-components";

const Btn = styled.span`
  color: white;
  letter-spacing: 2px;
  background-color: transparent;
  border: 1px solid white;
  padding: 8px 35px;
  border-radius: 10px;
  margin-top: 13px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
`;

function RulesBtn(props) {
  return <Btn>Rules</Btn>;
}

export default RulesBtn;
