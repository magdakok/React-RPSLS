import React, { useState, useEffect } from "react";
import styled from "styled-components";
import symbols from "./rules";
import Button from "./Button";
import PlayAgainBtn from "./PlayAgainBtn";
import { animationBattle } from "./animations";
import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;

const keys = Object.keys(symbols);

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 73px;
  color: white;
  text-align: center;
`;
const PickHeader = styled.span`
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 23px;
`;
const UserPick = styled.div``;
const ComputerPick = styled.div``;
const MessageBox = styled.div`
  align-self: center;
  margin: 0 20px;
  /* display: none; */
`;
const Message = styled.div`
  font-size: 55px;
`;

function Battle(props) {
  const [title, setTitle] = useState(null);
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
