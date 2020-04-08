import React, { useState } from 'react';
import styled from "styled-components";

const Logo = styled.div`
  margin-right: auto;
`;

const HeaderNav = styled.div`
  display: flex;
  font-size: 1em;
  font-weight: 50;
  color: white;
  background: black;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 7%;
`;

const MenuBar = styled.ul``;

const MenuItem = styled.li`
   {
    list-style: none;
    color: "palevioletred";
    display: inline-block;
    padding: 9px 20px;
    align-items: center;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    letter-spacing: 2px;

    :hover {
      color: #696969;
    }
  }
`;

const ButtonNav = styled.button`
  border-radius: 50px;
  padding: 9px 25px;
  border: none;
  background-color: #1890ff;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: white;
  :hover {
    background-color: #1c83e2;
  }
`;

const NavBar = () => {
  return (
    <HeaderNav>
      <Logo>Home</Logo>
      <nav>
        <MenuBar>
          <MenuItem>About</MenuItem>
          <MenuItem>Project</MenuItem>
          <MenuItem>Activity</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuBar>
      </nav>
    </HeaderNav>
  );
};

export default NavBar;
