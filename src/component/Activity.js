import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./Project";
import { HeadLine, Grid } from "./AboutME";
import openhouse from "../img/openhouse.jpg";

import ject6 from "../img/ject6.jpg";

import propro from "../img/prepro.jpg";
import TimeLine, { Timeline_item, Timeline_} from "./TimeLine";

const HeadLine_ = styled(HeadLine)`
  display: flex;
  justify-content: space-between;
  letter-spacing: 3px;
  background-color: #f5eef8;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
`;

const Grid_ = styled(Grid)`
    margin: 2em;
    grid-gap: 2em;
    padding: 2em;
    img {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const TimeLineCustom = styled(Timeline_)`



`

const Timeline_itemCustom = styled(Timeline_item)`

text-align:left;
`



const Activity = () => {
  return (
    <Container>
      
      <HeadLine_>
        <div>
          <span> 🔎 A</span>ctivity{" "}
        </div>
      </HeadLine_>




      <Grid_>
              <TimeLineCustom>
        
        <Timeline_itemCustom>
        <span>2017</span>
          <h3>Teacher Assistant in Preprogramming Class</h3>
          <p>Volunteer as a TA in Python class for 1st year student</p>
        </Timeline_itemCustom>

        <Timeline_itemCustom>
        <span>2018</span>
          <h3>Open house IT Ladkrabang</h3>
          <p>Coordinater / staff at openhouse</p>
        </Timeline_itemCustom>

        <Timeline_itemCustom>
        <span>2019</span>
          <h3>IT CAMP 14-15</h3>
          <p>Staff - Entertainer - Moderator</p>
        </Timeline_itemCustom>

      </TimeLineCustom>
          <img src={openhouse} width="90%"/>
          <img src={propro} width="90%"/>
          <img src={ject6} width="90%"/>

        </Grid_>

      
    </Container>
  );
};

export default Activity;
