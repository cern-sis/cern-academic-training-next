import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import Link from "next/link";
// import "./SUGGESTION_BOX.css";
// import { getReveal } from "../events/reveal";

const { Title } = Typography;

const StyledSuggestion = styled.div`
  font: normal normal normal 32px/33px Abolition;
  width: auto;
  text-align: center;
  transition: all 0.5s;
  transition: transform 0.5s ease-in;
`

const StyledTitle = styled.div`
  text-align: center;
  background: red;
  font: normal normal normal 50px/50px Abolition;
  letter-spacing: 0.5px;
  color: #fff;
  opacity: 0.8;

  transition: all 0.5s ease-in;
  &:hover {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
  `

function SUGGESTION_BOX() {
  // getReveal();

  return (
    <StyledSuggestion>
      <Link href="mailto:atc-contact@cern.ch" target="_blank">
        <StyledTitle level={1}>
          Submit a suggestion for future topics
        </StyledTitle>
      </Link>
    </StyledSuggestion>
  );
}

export default SUGGESTION_BOX;
