import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import useravatar from "../Images/UserAvatar.png";
import down from "../Images/down.svg";

const NavBar = styled.div`
  width: 100%;
  background-color: var(--color-black);
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: ${props =>
    props.active ? "var(--color-gold)" : "var(--color-white)"};
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserDropDown = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: var(--color-grey-light);
  margin-right: 5rem;

  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.2s ease;
    color: var(--color-white);
  }
`;

const Down = styled(SVG)`
  fill: var(--color-white);
  transform: translateY(3px);
  cursor: pointer;
`;

const UserAvatar = styled.img`
  height: 3rem;
  padding: 0.2rem 3rem;
`;

const Nav = () => {
  return (
    <NavBar>
      <NavLinks>
        <NavLink>Iste Natus</NavLink>
        <NavLink>Explicabo</NavLink>
        <NavLink>Omnis</NavLink>
        <NavLink>Ipsa quae</NavLink>
        <NavLink active>Perspiciatis Unde</NavLink>
      </NavLinks>

      <User>
        <UserDropDown>
          Veris Veritatis
          <Down src={down} />
        </UserDropDown>
        <UserAvatar src={useravatar} alt="User Avatar" />
      </User>
    </NavBar>
  );
};

export default Nav;
