import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import Link from "next/link";
// import "./SUGGESTION_BOX.css";
// import { getReveal } from "../events/reveal";

const { Title } = Typography;

const StyledSuggestion = styled.div`
  font: normal normal normal 32px/33px Abolition;
`

function SUGGESTION_BOX() {
  // getReveal();

  return (
    <StyledSuggestion className="suggestion reveal">
      <Link href="mailto:atc-contact@cern.ch" target="_blank">
        <Title className="hover-underline-animation">
          Submit a suggestion for future topics
        </Title>
      </Link>
    </StyledSuggestion>
  );
}

export default SUGGESTION_BOX;
