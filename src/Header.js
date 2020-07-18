import React from "react";
import ScoreBox from "./ScoreBox";
import styled from "styled-components";
import logo from "./images/logo-bonus.svg";

const Container = styled.header`
  margin: 0px 24.3%;
  border: 3px solid var(--gray);
  border-radius: 16px;
  padding: 17px 23px 13px 28px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    margin: 0px 8.5%;
    padding: 11px 9px 11px 20px;
  }
`;

const Logo = styled.img`
  margin-top: 4px;
  @media only screen and (max-width: 700px) {
    width: 28%;
    height: 28%;
  }
`;

function Header(props) {
  return (
    <Container>
      <Logo src={logo} alt='Rock, paper, scissors, lizard, Spock game logo' />
      <ScoreBox points={props.points} />
    </Container>
  );
}

export default Header;
