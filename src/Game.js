import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { scissors, paper, rock, lizard, spock } from "./rules";

const Container = styled.div`
  height: 100vh;
  background-image: radial-gradient(
    circle at top,
    var(--gradient-lighter),
    var(--gradient-darker)
  );
  padding: 50px 25%;
`;

function Game() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default Game;
