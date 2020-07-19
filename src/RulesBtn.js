import React, { useState } from "react";
import styled from "styled-components";
import rulesImg from "./images/image-rules-bonus.svg";
import closeImg from "./images/icon-close.svg";

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
  max-width: 600px;
  max-height: 600px;
  padding: 2%;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const ImgBox = styled.img`
  min-width: 500px;
  min-height: 500px;
`;

const PopUpRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled.img`
  cursor: pointer;
`;

function RulesBtn(props) {
  const [rulesOn, setRulesOn] = useState(false);

  // START WITH THIS! CLICKING ON BACKGROUND SHOULD CLOSE RULES POPUP
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
          <ImgBox src={rulesImg} alt='Game rules' />
        </RulesPopUp>
      </RulesContainer>

      <Btn onClick={() => setRulesOn(!rulesOn)}>Rules</Btn>
    </>
  );
}

export default RulesBtn;
