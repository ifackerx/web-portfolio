import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./AboutME";


const Timeline_ = styled.div`
    h1 {
        text-align: left;
        margin-bottom: 2rem;
    }
`;

const Timeline_item = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  line-height: 1.5em;
  position: relative;
  text-align: left;
  padding-bottom: 1em;



  ::before {
    display: inline-block;
    position: absolute;
    content: "";
    top: 0;
    left: -10px;
    height: 1rem;
    width: 1rem; 
    border: 2px solid white;
    border-radius: 50%;
    background: #1d1f20;
    z-index: 1;
  }

  ::after {
    content: "";
    border-left: 2px solid black;
    height: calc(100% + 4rem);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0; 
    z-index: 0;
  }
`;


const TimeLine = () => {
  return (
      <Timeline_>
          <h1>Education</h1>
        <Timeline_item>
          <span>2008</span>
          <h3>King mongut initute technologu ladkeabang</h3>
          <p>GPA 3.08</p>
        </Timeline_item>
        <Timeline_item>
          <span>2008</span>
          <h3>King mongut initute technologu ladkeabang</h3>
          <p>GPA 3.08</p>
        </Timeline_item>
      </Timeline_>
  );
};

export default TimeLine;
