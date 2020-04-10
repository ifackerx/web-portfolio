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
    border: 2px solid palevioletred;
    border-radius: 50%;
    background: palevioletred;
    z-index: 1;
  }

  ::after {
    content: "";
    border-left: 2px solid palevioletred;
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
          <span>3rd year student</span>
          <h3>King Mongkut's Institute of Technology Ladkrabang</h3>
          <p>Faculty of Infomation Technology GPA 3.08</p>
        </Timeline_item>
        <Timeline_item>
          <span>2014-2016</span>
          <h3>Thai-Austrian Technical college</h3>
          <p>Vocational Certificate in IT GPA 3.72</p>
        </Timeline_item>
      </Timeline_>
  );
};

export default TimeLine;
