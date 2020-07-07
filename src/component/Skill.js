import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./AboutME";


export const Tag = styled.button`
  color: palevioletred;
  margin: 2em 0.5em 1em;
  padding: 4em;
  border: 1px solid palevioletred;
  border-radius: 10px;
  height: 80px;
  background-color: white;
  :hover {
    background-color: palevioletred;
    transition: 0.3s;
    color: white;
  }

    @media (max-width: 1024px) {
     padding: 2em;
}


    @media (max-width: 768px) {
     padding: 1em;
}
`;


const Timeline_ = styled.div`
    text-align: left;
    h1 {
        text-align: left;
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

`;


const Skill = () => {
     return (
          <Timeline_>
               <h1>Skill</h1>
               <Tag>
                    HTML
           </Tag>
               <Tag>
                    CSS
           </Tag>
               <Tag>
                    JACASCRIPT
           </Tag>
               <Tag>
                    ReactJs
           </Tag>
               <Tag>
                    VueJs
           </Tag>
               <Tag>
                    NodeJs
           </Tag >
          </Timeline_ >
     );
};

export default Skill;
