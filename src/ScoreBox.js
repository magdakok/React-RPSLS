import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 11px 47px;
  @media only screen and (max-width: 700px) {
    padding: 11px 20px;
  }
`;

const ScoreTitle = styled.div`
  color: var(--blue);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 2px;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

const ScoreNumber = styled.div`
  color: var(--gray);
  font-size: 66px;
  line-height: 66px;
  font-weight: 700;
  @media only screen and (max-width: 700px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

function ScoreBox(props) {
  return (
    <Container>
      <ScoreTitle>SCORE</ScoreTitle>
      <ScoreNumber>{props.points}</ScoreNumber>
    </Container>
  );
}

export default ScoreBox;
