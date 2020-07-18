import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 147px;
  width: 147px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorLight};
  box-shadow: inset 0px -6px 0px 0px ${(props) => props.colorDark};
  ${(props) => props.position};
  cursor: pointer;
`;

const SymbolBox = styled.div`
  background-color: white;
  box-shadow: inset 0px 6px 0px 0px rgba(237, 237, 237, 1);
  border-radius: 100%;
  height: 78%;
  width: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Button(props) {
  const symbol = require(`./images/icon-${props.symbol.name}.svg`);
  return (
    <Container
      colorLight={props.symbol.colorLight}
      colorDark={props.symbol.colorDark}
      position={props.symbol.position}>
      <SymbolBox>
        <img src={symbol} />
      </SymbolBox>
    </Container>
  );
}

export default Button;
