import React from "react";
import styled from "styled-components";
import { scissors, paper, rock, lizard, spock } from "./rules";
import logo from "./images/logo-bonus.svg";

const Container = styled.header`
  border: 3px solid var(--gray);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ScoreBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const ScoreTitle = styled.div`
  color: var(--blue);
`;

const ScoreNumber = styled.div`
  color: var(--gray);
`;

function Header() {
  return (
    <Container>
      <img src={logo} alt='Rock, paper, scissors, lizard, Spock game logo' />
      <ScoreBox>
        <ScoreTitle>SCORE</ScoreTitle>
        <ScoreNumber>12</ScoreNumber>
      </ScoreBox>
    </Container>
  );
}

export default Header;
