import React from "react";
import styled from "styled-components";
import Button from "./Button";
import pentagonShape from "./images/bg-pentagon.svg";
import symbols from "./rules";

const Container = styled.div`
  margin: 102px auto 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pentagon = styled.div`  
  background-image: url("${pentagonShape}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  min-width: 330px;
  min-height: 330px;
  position: relative;
  `;

function ButtonsPanel(props) {
  return (
    <Container>
      <Pentagon>
        <Button symbol={symbols.scissors} makeChoice={props.makeChoice} />
        <Button symbol={symbols.paper} makeChoice={props.makeChoice} />
        <Button symbol={symbols.rock} makeChoice={props.makeChoice} />
        <Button symbol={symbols.lizard} makeChoice={props.makeChoice} />
        <Button symbol={symbols.spock} makeChoice={props.makeChoice} />
      </Pentagon>
    </Container>
  );
}

export default ButtonsPanel;
