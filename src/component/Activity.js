import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./Project";
import { HeadLine, Grid } from "./AboutME";
import openhouse from "../img/openhouse.jpg";
import propro from "../img/prepro.jpg";

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

const Activity = () => {
  return (
    <Container>
      <HeadLine_>
        <div>
          <span> 🔎 A</span>ctivity{" "}
        </div>
      </HeadLine_>
      <Grid_>
          <img src={openhouse} width="90%"/>
          <img src={propro} width="90%"/>
        </Grid_>
    </Container>
  );
};

export default Activity;
