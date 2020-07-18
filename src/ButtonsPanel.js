import React from "react";
import styled from "styled-components";
import Button from "./Button";
import pentagonShape from "./images/bg-pentagon.svg";
import { scissors, paper, rock, lizard, spock } from "./rules";

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

function ButtonsPanel() {
  return (
    <Container>
      <Pentagon>
        <Button symbol={scissors} />
        <Button symbol={paper} />
        <Button symbol={rock} />
        <Button symbol={lizard} />
        <Button symbol={spock} />
      </Pentagon>
    </Container>
  );
}

export default ButtonsPanel;
