import React, { useState } from "react";
import styled from "styled-components";
import ButtonsPanel from "./ButtonsPanel";
import Header from "./Header";
import Battle from "./Battle";

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
  const [choice, setChoice] = useState(null);

  const makeChoice = (choice) => {
    setChoice(choice);
  };

  return (
    <Container>
      <Header />
      {choice ? (
        <Battle choice={choice} />
      ) : (
        <ButtonsPanel makeChoice={makeChoice} />
      )}
    </Container>
  );
}

export default Game;
