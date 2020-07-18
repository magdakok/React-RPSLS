import React from "react";
import styled from "styled-components";
import symbols from "./rules";
import Button from "./Button";
import PlayAgainBtn from "./PlayAgainBtn";

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
  const computersChoice = keys[Math.floor(Math.random() * keys.length)];
  return (
    <Container>
      <UserPick>
        <PickHeader>You picked</PickHeader>
        <Button choice={symbols[props.choice]} />
      </UserPick>
      <MessageBox>
        <Message>You lose</Message>
        <PlayAgainBtn />
      </MessageBox>
      <ComputerPick>
        <PickHeader>The house picked</PickHeader>
        <Button choice={symbols[computersChoice]} />
      </ComputerPick>
    </Container>
  );
}

export default Battle;
