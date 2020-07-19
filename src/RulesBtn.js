import React, { useState } from "react";
import styled from "styled-components";
import rulesImg from "./images/image-rules-bonus.svg";
import closeImg from "./images/icon-close.svg";
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

const Btn = styled.span`
  color: white;
  letter-spacing: 2px;
  background-color: transparent;
  border: 1px solid white;
  padding: 8px 35px;
  border-radius: 10px;
  margin-top: 13px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: black;
    background-color: white;
  }
  @media only screen and (max-width: 700px) {
    position: relative;
    margin: 20px auto 20px auto;
    right: 0;
    bottom: 0;
  }
`;
const RulesContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.rulesOn ? "block" : "none")};
  z-index: 9;
`;
const RulesPopUp = styled.div`
  position: fixed;
  border-radius: 10px;
  padding: 2%;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(10px);
  z-index: 10;
  @media only screen and (max-width: 700px) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    width: 100vw;
    height: 100vh;
    padding: 30px;
    border-radius: 0;
  }
`;

const Img = styled.img`
  margin: 20px;
  min-width: 500px;
  @media only screen and (max-width: 700px) {
    min-width: 0;
    width: 80vw;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    height: 80vh;
  }
`;

const PopUpRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled.img`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2) !important;
  }
`;

function RulesBtn(props) {
  const [rulesOn, setRulesOn] = useState(false);

  const handleBackgroundClick = (e) => {
    e.target.id === "rulesBackground" && setRulesOn(false);
  };

  return (
    <>
      <RulesContainer
        id='rulesBackground'
        rulesOn={rulesOn}
        onClick={handleBackgroundClick}>
        <RulesPopUp>
          <PopUpRow>
            <span>Rules</span>
            <CloseIcon
              src={closeImg}
              alt='Close pop-up icon'
              onClick={() => setRulesOn(false)}
            />
          </PopUpRow>
          <ImgBox>
            <Img src={rulesImg} alt='Game rules' />
          </ImgBox>
        </RulesPopUp>
      </RulesContainer>

      <Btn onClick={() => setRulesOn(!rulesOn)}>Rules</Btn>
    </>
  );
}

export default RulesBtn;
