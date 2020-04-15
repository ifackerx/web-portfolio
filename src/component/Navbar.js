import React, { useState } from 'react';
import styled from "styled-components";

const Logo = styled.div`
  margin-right: auto;
  color: palevioletred;

`;

const HeaderNav = styled.div`
  display: flex;
  font-size: 1em;
  font-weight: 50;
  color: white;
  background: #F0EFFF;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 7%;
`;

const MenuBar = styled.ul``;

const MenuItem = styled.li`
    list-style: none;
    color: palevioletred;
    font-weight: 1000;
    display: inline-block;
    padding: 9px 20px;
    align-items: center;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    letter-spacing: 2px;
    a{
      color: palevioletred;
      text-decoration: none
    }

    a:hover {
      color: #b35b78	;
    }

    :hover {
      color: #b35b78	;
    }
`

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
      <Logo></Logo>
      <nav>
        <MenuBar>
          <MenuItem>🧡About</MenuItem>
          <MenuItem>📚Project</MenuItem>
          <MenuItem>🔎Activity</MenuItem>
          <MenuItem><a href = "mailto: thong.ngurnx@gmail.com">📞Contact</a></MenuItem>
        </MenuBar>
      </nav>
    </HeaderNav>
  );
};

export default NavBar;
