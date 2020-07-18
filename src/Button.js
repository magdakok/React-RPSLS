import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorLight};
  box-shadow: inset 0px -6px 0px 0px ${(props) => props.colorDark};
`;

const ContainerSmall = styled(Container)`
  width: 147px;
  height: 147px;
  position: absolute;
  ${(props) => props.position};
  cursor: pointer;
`;

const ContainerBattle = styled(Container)`
  width: 300px;
  height: 300px;
  margin: 65px 35px;
  position: relative;
  z-index: 5;
  /* &::before {
    content: "";
    overflow: hidden;
    display: block;
    position: absolute;
    width: 700px;
    height: 700px;
    background-image: radial-gradient(
      700px 700px ellipse,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(255, 255, 255, 0.05) 30%,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: -1;
  } */
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

const Image = styled.img`
  width: 50%;
  height: 50%;
`;

function Button(props) {
  return props.symbol ? (
    <ContainerSmall
      colorLight={props.symbol.colorLight}
      colorDark={props.symbol.colorDark}
      position={props.symbol.position}
      onClick={() => props.makeChoice(props.symbol.name)}>
      <SymbolBox>
        <Image
          src={require(`./images/icon-${props.symbol.name}.svg`)}
          alt={`${props.symbol.name} icon`}
        />
      </SymbolBox>
    </ContainerSmall>
  ) : (
    <ContainerBattle
      colorLight={props.choice.colorLight}
      colorDark={props.choice.colorDark}>
      <SymbolBox>
        <Image
          src={require(`./images/icon-${props.choice.name}.svg`)}
          alt={`${props.choice.name} icon`}
        />
      </SymbolBox>
    </ContainerBattle>
  );
}

export default Button;
