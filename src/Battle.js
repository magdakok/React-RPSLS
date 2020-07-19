import React, { useState, useEffect } from "react";
import styled from "styled-components";
import symbols from "./rules";
import Button from "./Button";
import PlayAgainBtn from "./PlayAgainBtn";
import { animationBattle } from "./animations";
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

const keys = Object.keys(symbols);

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 73px;
  color: white;
  text-align: center;
  @media only screen and (max-width: 700px) {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row dense;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    column-gap: 20px;
    row-gap: 40px;
  }
`;
const PickHeader = styled.span`
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 23px;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    order: 1;
  }
`;
const UserPick = styled.div`
  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
const ComputerPick = styled.div`
  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
const MessageBox = styled.div`
  align-self: center;
  margin: 0 20px;
  @media only screen and (max-width: 700px) {
    grid-column: 1/-1;
    margin: 20px;
  }
`;
const Message = styled.div`
  font-size: 55px;
  @media only screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

function Battle(props) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [computersChoice, setComputersChoice] = useState(
    keys[Math.floor(Math.random() * keys.length)]
  );

  useEffect(() => {
    if (symbols[props.choice].name === computersChoice) {
      setTitle(`It's a draw`);
    } else if (symbols[props.choice].beat.includes(computersChoice)) {
      setTitle("You win");
      setTimeout(function () {
        props.setPoints(props.points + 1);
      }, 1100);
    } else {
      setTitle("You lose");
      setTimeout(function () {
        props.setPoints(props.points - 1);
      }, 1100);
    }

    const opponents = new Set([symbols[props.choice].name, computersChoice]);
    console.log(opponents.size);
    if (opponents.size === 2) {
      if (opponents.has("scissors") && opponents.has("paper")) {
        setDescription("Scissors cut Paper");
      } else if (opponents.has("paper") && opponents.has("rock")) {
        setDescription("Paper covers Rock");
      } else if (opponents.has("rock") && opponents.has("lizard")) {
        setDescription("Rock crushes Lizard");
      } else if (opponents.has("lizard") && opponents.has("spock")) {
        setDescription("Lizard poisons Spock");
      } else if (opponents.has("spock") && opponents.has("scissors")) {
        setDescription("Spock smashes Scissors");
      } else if (opponents.has("scissors") && opponents.has("lizard")) {
        setDescription("Scissors decapitate Lizard");
      } else if (opponents.has("lizard") && opponents.has("paper")) {
        setDescription("Lizard eats Paper");
      } else if (opponents.has("paper") && opponents.has("spock")) {
        setDescription("Paper disproves Spock");
      } else if (opponents.has("spock") && opponents.has("rock")) {
        setDescription("Spock vaporizes Rock");
      } else if (opponents.has("scissors") && opponents.has("rock")) {
        setDescription("Rock crushes Scissors");
      }
    } else {
      setDescription("Game over! Bazinga!");
    }
  }, []);

  return (
    <Container>
      <UserPick>
        <PickHeader>You picked</PickHeader>
        <Button choice={symbols[props.choice]} />
      </UserPick>
      <MessageBox>
        <Anime
          initial={[
            {
              targets: "#title",
              ...animationBattle,
            },
          ]}>
          <div id='title' style={{ opacity: "0" }}>
            {description}
            <Message>{title}</Message>
          </div>
        </Anime>

        <PlayAgainBtn restart={props.restart} />
      </MessageBox>
      <ComputerPick>
        <PickHeader>The house picked</PickHeader>
        <Anime
          initial={[
            {
              targets: "#computerBtn",
              ...animationBattle,
            },
          ]}>
          <div id='computerBtn'>
            <Button
              choice={symbols[computersChoice]}
              style={{ opacity: "0" }}
            />
          </div>
        </Anime>
      </ComputerPick>
    </Container>
  );
}

export default Battle;
