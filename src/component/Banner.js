import React from "react";
import styled from "styled-components";
import ProfilePic from "../img/profile.JPG";
import reactlogo from "../img/undraw_react.svg";

const Container = styled.div`
  padding: 3em;
  display: grid;
  grid-template-columns: 45% 50%;
  grid-template-rows: auto;
  background-color: white;
`;
const ColumnsBanner = styled.div`
  justify-content: start;
  // border: 1px solid black;
  word-wrap: break-word;

  img {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Content = styled.div`
  text-align: left;

  h1 {
    font-size: 3em;
  }

  h2 {
    margin-top: -20px;
    font-size: 3em;
  }
  p {
    font-size: 1.5em;
  }
`;

const BlockQuote = styled.div`
  position: relative;
  font-weight: 900;
  color: #2560ff;
  padding: 1em;
  margin: 0.2em;
  max-width: 33em;
  font-size: 1.15em;
  &:before {
    content: "“";
    font-family: serif;
    position: absolute;
    right: 100%;
    font-size: 4em;
    line-height: 0px;
    top: 50px;
    color: #78e08f;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    width: 5em;
    height: 0.2em;
    background: #e56d39;
    left: 1em;
  }
`;
const ButtonFrame = styled.div`
  margin-top: 1.25em;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 10em;
  cursor: pointer;
`;

const Banner = () => {
  return (
    <div>
      <Container>
        <ColumnsBanner>
          <img src={ProfilePic} width="60%"></img>
        </ColumnsBanner>

        <ColumnsBanner>
          <Content>
            <p>Welcome, My name is</p>
            <h1>THONG-NGURN YAMPRADIT</h1>
            <h2>- WEB DEVELOPER</h2>
            <BlockQuote>
              I'm a student who interest in web development especially in
              Front-end with ReactJS.
            </BlockQuote>

            <ButtonFrame>
              <Button>view</Button>
              <Button>contact</Button>
            </ButtonFrame>
          </Content>
        </ColumnsBanner>
      </Container>
    </div>
  );
};
export default Banner;
