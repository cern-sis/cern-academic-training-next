import React from "react";
import Link from "next/link";
import { Typography, Row, Col } from "antd";
import styled from "styled-components";

const StyledLinks = styled(Link)`
  color: #fff !important;
  font-family: Abolition;
  text-decoration: none;
  display: inline-block;
`;

const StyledWrapper = styled(Row)`
  display: flex;
`
function MENU() {
  return (
    <StyledWrapper  gutter={24}>
      <Col>
        <StyledLinks href="/about-us">About</StyledLinks>
      </Col>
      <Col>
        <StyledLinks href="https://indico.cern.ch/category/72/">Events</StyledLinks>
      </Col>
      <Col>
        <StyledLinks href="mailto:atc-contact@cern.ch">Contact</StyledLinks>
      </Col>
    </StyledWrapper>
  );
}

export default MENU;
