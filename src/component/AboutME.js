import React, { useState } from "react";
import styled from "styled-components";
import SVG from "../img/undraw.svg";
import TimeLine from "./TimeLine";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

  }

`;

const ProfileGrid = styled(Grid)`
  /* background-color: #F5EEF8; */
  padding: 10px;
  width: auto;
  /* box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
  p {
    margin: 0.2em;
    letter-spacing: 1px;

    h6 {
      letter-spacing: 0px;
      color: rebeccapurple;
    }
  }


  @media (max-width: 768px) {
    padding: 1px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;

  }
`;

export const HeadLine = styled.h1`
  font-size: 3em;
  font-weight: 900;
  text-align: left;
  
  span {
    color: purple;
  }
`;

const HeadLineProfile = styled(HeadLine)`
  font-size: 1em;
  font-weight: 900;
  text-align: left;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Container = styled.div`
  padding: 4em 10em 2em 10em;


  @media (max-width: 768px) {
  padding: 1rem;


  }

`;

export const Line = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 40%;
  height: 4px;
  background-color: black;

  @media (max-width: 768px) {
    display: none;


  }

`;

const Content = styled.p`
  font-size: 1.25em;
  margin: 2em 2em 0px 0px;
  text-align: left;
  text-justify: inter-word;


  @media (max-width: 768px) {
    margin: 0px;

  }
`;
const AboutME = () => {
  return (
    <Container>
      <Grid>
        <div>
          <HeadLine>
            <span>A</span>bout Me{" "}
            <Line />
          </HeadLine>

          <Content>
            Hi! My name is Thonngurn Yampradit, a information technology 3rd
            year student in KMITL who enjoys develop website both of front-end
            and back-end
            <HeadLineProfile> 📋 Personal Profile</HeadLineProfile>
            <ProfileGrid>
              <p>
                <h6>Name</h6>Thonngurn{" "}
              </p>
              <p>
                <h6>Surname</h6>Yampradit{" "}
              </p>
              <p>
                <h6>Date of Birth</h6>18/12/1998
              </p>
              <p>
                <h6>weight</h6> 61
              </p>
              <p>
                <h6>Military Status</h6>Exempt
              </p>
              <p>
                <h6>height</h6> 175
              </p>
            </ProfileGrid>
          </Content>
        </div>
        <div>
          <HeadLine>
            <img src={SVG} width="100%"></img>
            
          </HeadLine>
        </div>
      </Grid>

      <Grid>
        
        <TimeLine />

        <TimeLine />
      </Grid>
    </Container>
  );
};

export default AboutME;
