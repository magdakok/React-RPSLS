import React from "react";
import ScoreBox from "./ScoreBox";
import styled from "styled-components";
import { scissors, paper, rock, lizard, spock } from "./rules";
import logo from "./images/logo-bonus.svg";

const Container = styled.header`
  border: 3px solid var(--gray);
  border-radius: 16px;
  padding: 17px 23px 13px 28px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin-top: 4px;
`;

function Header() {
  return (
    <Container>
      <Logo src={logo} alt='Rock, paper, scissors, lizard, Spock game logo' />
      <ScoreBox />
    </Container>
  );
}

export default Header;
