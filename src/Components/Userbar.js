import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import down from "../Images/down.svg";
import trash from "../Images/trash.svg";
import toggle from "../Images/switch.svg";
import mail from "../Images/mail.svg";

const UBContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.4rem;
  height: 7rem;
  align-items: center;
  border-bottom: 1px solid var(--color-black);
  color: var(--color-grey-light);
`;

const UBUsername = styled.h3`
  height: 100%;
  font-weight: 400;
  color: var(--color-highlight);
  padding: 1rem 1.5rem;
  border-right: 1px solid var(--color-black);

  display: flex;
  align-items: center;
`;

const UBDropDown = styled.div`
  height: 100%;
  width: 10%;
  padding: 1.5rem;
  border-right: 1px solid var(--color-black);
  display: flex;
  align-items: center;
  flex-direction: column;
  }
`;

const UBArrow = styled(SVG)`
  fill: var(--color-grey);
  background-color: var(--color-grey-light);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

const UBText = styled.p`
  width: 40%;
  height: 100%;
  padding: 0 5rem;
  border-right: 1px solid var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UBToolbar = styled.div`
  border-right: 1px solid var(--color-black);
  border-left: 1px solid var(--color-black);
  height: 100%;

  margin: 20%;
  padding: 3rem;

  display: flex;
  align-items: center;
`;

const Tool = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease;
    color: var(--color-white);
  }

  &:hover > * {
    transition: all 0.2s ease;
    fill: var(--color-white);
  }
`;

const Icon = styled(SVG)`
  fill: var(--color-grey-light);
  transform: ${props => props.off && "scaleX(-1)"};
`;

const Userbar = () => {
  return (
    <UBContainer>
      <UBUsername>Sunt</UBUsername>

      <UBDropDown>
        <UBArrow src={down} />
        Beatae Vita
      </UBDropDown>

      <UBText>Doloremque laudantium otam Doloremque laudantium otam</UBText>

      <UBToolbar>
        <Tool>
          <Icon src={trash} />
          Archieto
        </Tool>

        <Tool>
          <Icon off src={toggle} />
          Aperiam
        </Tool>

        <Tool>
          <Icon src={toggle} />
          Totam
        </Tool>

        <Tool>
          <Icon src={mail} />
          Rem
        </Tool>
      </UBToolbar>
    </UBContainer>
  );
};

export default Userbar;
