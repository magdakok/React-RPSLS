import React from "react";
import styled from "styled-components";
import ButtonsPanel from "./ButtonsPanel";
import Header from "./Header";
import { scissors, paper, rock, lizard, spock } from "./rules";

const Container = styled.div`
  height: 100vh;
  background-image: radial-gradient(
    circle at top,
    var(--gradient-lighter),
    var(--gradient-darker)
  );
  padding: 46px 24.3%;
  width: 100%;
`;

function Game() {
  return (
    <Container>
      <Header />
      <ButtonsPanel />
    </Container>
  );
}

export default Game;
