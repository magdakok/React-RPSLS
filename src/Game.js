import React, { useState } from "react";
import styled from "styled-components";
import ButtonsPanel from "./ButtonsPanel";
import Header from "./Header";
import Battle from "./Battle";
import RulesBtn from "./RulesBtn";

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

function Game() {
  const [choice, setChoice] = useState(null);
  const [points, setPoints] = useState(0);

  const makeChoice = (choice) => {
    setChoice(choice);
  };

  const restart = () => {
    setChoice(null);
  };

  return (
    <Container>
      <Header points={points} />
      {choice ? (
        <Battle
          choice={choice}
          restart={restart}
          points={points}
          setPoints={setPoints}
        />
      ) : (
        <ButtonsPanel makeChoice={makeChoice} />
      )}
      <RulesBtn />
    </Container>
  );
}

export default Game;
