import React, { useState } from "react";
import styled from "styled-components";



import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaGoogleDrive,
  FaRegCopyright,
} from "react-icons/fa";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: #f0efff;
`;

const Footer_ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrap = styled(IconGroup)`
    font-size: 0.75em;
    align-items: center;
    margin-top: -3em;
    p {
        margin-left: 3px;
    }
`

const Icon = styled.i`
  font-size: 2em;
  cursor: pointer;
  margin: 0.75em 0.5em 0px 0.5em;
  text-decoration: none;
  a {
    color: #884ea0;
  }
  a:hover {
    transition: transform 0.4s;
    color: palevioletred;
  }
`;

const Footer = () => {
  return (
    <Container>
      <IconGroup>
        <Icon>
          <a href="https://www.github.com/ifackerx/" target="_blank">
            <FaGithub />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.github.com/ifackerx/" target="_blank">
            <FaFacebook />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.github.com/ifackerx/" target="_blank">
            <FaTwitter />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.github.com/ifackerx/" target="_blank">
            <FaGoogleDrive />
          </a>
        </Icon>
      </IconGroup>
      <Wrap>
      <FaRegCopyright/> <p>Design & build By Thong-ngurn Yampradit with React styled-compenent.</p>
      </Wrap>


    </Container>
  );
};

export default Footer;
