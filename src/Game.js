import React, { useState } from "react";
import styled from "styled-components";
import ButtonsPanel from "./ButtonsPanel";
import Header from "./Header";
import Battle from "./Battle";

const Container = styled.div`
  min-height: 100vh;
  padding: 46px 0;
  background-image: radial-gradient(
    circle at top,
    var(--gradient-lighter),
    var(--gradient-darker)
  );
  width: 100%;
`;

const HighlightContainer = styled.div`
  /* background-image: radial-gradient(
    700px 700px ellipse at 27% 40%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0.05) 30%,
    rgba(255, 255, 255, 0.05) 40%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  background-position: -20%; */
`;

function Game() {
  const [choice, setChoice] = useState("paper");

  const makeChoice = (choice) => {
    setChoice(choice);
  };

  return (
    <Container>
      <HighlightContainer>
        <Header />
        {choice ? (
          <Battle choice={choice} />
        ) : (
          <ButtonsPanel makeChoice={makeChoice} />
        )}
      </HighlightContainer>
    </Container>
  );
}

export default Game;
