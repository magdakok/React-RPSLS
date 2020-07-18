import React from "react";
import styled from "styled-components";
import symbols from "./rules";

const keys = Object.keys(symbols);
const computersChoice = keys[Math.floor(Math.random() * keys.length)];

const Container = styled.div``;
const UserPick = styled.div``;
const ComputerPick = styled.div``;
const Message = styled.div``;

function Battle() {
  return (
    <Container>
      <UserPick></UserPick>
      <Message></Message>
      <ComputerPick></ComputerPick>
    </Container>
  );
}

export default Battle;
