import React, { useState } from "react";
import styled from "styled-components";
import SVG from "../img/undraw.svg";
import { HeadLine, Grid } from "./AboutME";
import Ject1 from "../img/ject1.png";
import Ject2 from "../img/ject2.png";
import Ject3 from "../img/ject3.png";
import Ject4 from "../img/ject4.png";
import Ject5 from "../img/ject5.png";

export const Container = styled.div`
  padding: 2em 10em 2em 10em;

  @media (max-width: 768px) {
    padding: 1em;
  }

`;

const Grid_ = styled(Grid)`
  margin: 4em 0px 3em 0px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
  grid-template-columns: 1fr;
  margin: 1em;
  }
`;

const Grid_line3 = styled.div`
  padding-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 50%;
  grid-gap: 1.5em 2.5em;



`;

const HeadLine_ = styled(HeadLine)`
  letter-spacing: 5px;
  text-align: center;
`;

const Line = styled.hr`
  width: 20%;
  margin: auto;
  height: 0.3em;
  background-color: black;
`;

const Frame = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  right: 40%;
  top: 100px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  justify-items: center;
  align-items: center;
`;

const Image = styled.div`

  text-align: right;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  :hover {
    transition: transform .4s; /* Animation */
    transform: scale(1.02); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  
`;

const Detail = styled.div`
  margin: 1em 3em 1em 3em;
  text-align: center;

   @media (max-width: 768px) {
  margin: 1em;
  }

`;

const Title = styled.h3`
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
  margin-top: 1em;
  }
`;

const Tag = styled.button`
  color: palevioletred;
  margin: 2em 0.5em 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 10px;
  width: 60px;
  background-color: white;

  :hover {
    background-color: palevioletred;
    transition: 0.3s;
    color: white;
  }
`;

const Link = styled.a`
  color: palevioletred;
  :hover {
    color: pink;
  }
  text-decoration: none;
`;

const Project = () => {
  return (
    <div>
      <Container>
        <HeadLine_><span>P</span>ROJECT</HeadLine_>
        <Line />

        <Grid_>
          <Image>
            <img src={Ject1} width="100%" height="100%" />
          </Image>
          <div>
            <Title>KMITL Market Web Application</Title>
            <Detail>
              This web application is for booking a shop lock for the flea
              market in KMITL and you can view various details about the store
              and store reviews at the reservation can see my code at my
              <Link
                href="https://github.com/ifackerx/KMITL-Market"
                target="_blank"
              >
                {" "}
                git hub.
              </Link>
            </Detail>
            <Tag inputColor="">HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Vue JS</Tag>
            <Tag>Django</Tag>
          </div>
        </Grid_>

        <Grid_>
          <div>
            <Title>Queue-management System 🍒</Title>
            <Detail>
              Web application for Appointments for various tasks and can check
              the current job. The system will prioritize the work to be able to
              cuntomize by yourself see more in my
              <Link
                href="https://github.com/ifackerx/Queue-management-System"
                target="_blank"
              >
                {" "}
                git hub.
              </Link>
            </Detail>
            <Tag inputColor="">HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>React</Tag>
          </div>

          <Image>
            <img src={Ject2} width="100%" height="100%" />
          </Image>
        </Grid_>

        <Grid_line3>
          <Image>
            <img src={Ject3} width="100%" height="auoto" />
          </Image>{" "}
          <Image>
            <img src={Ject4} width="100%" height="auoto" />
          </Image>{" "}
          <Image>
            <img src={Ject5} width="100%" height="auoto" />
          </Image>
          <div><Title>Animal Fighter 2D GAME</Title></div>
          <div><Title>Hotel Vender Website</Title></div>
          <div><Title>Chonburi Web</Title></div>

        </Grid_line3>
      </Container>
    </div>
  );
};

export default Project;
