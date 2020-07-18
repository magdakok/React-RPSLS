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
  @media only screen and (max-width: 700px) {
    position: relative;
    margin: 20px auto 20px auto;
    right: 0;
    bottom: 0;
  }
`;

function RulesBtn(props) {
  return <Btn>Rules</Btn>;
}

export default RulesBtn;
