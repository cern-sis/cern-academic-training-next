import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Input } from "antd";
import Link from "next/link";

import MENU from "./MENU";
import {
  StyledWrapper,
} from "./styled_header";
import styled from "styled-components";
import SearchField from "./SearchField";

const StyledLinks = styled(Link)`
color: #fff !important;
font-family: Abolition;
text-decoration: none;
`

function AT_HEADER() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  return (
      <StyledWrapper active={header}>
        <Row
        gutter={64}
        style={{background:"transparent",
        justifyContent: "space-between",
        alignItems: "center",
        display:"flex",
        padding: "0 3%"}}>
          <Col span={6}>
            <StyledLinks  href="/">ACADEMIC TRAINING</StyledLinks>
          </Col>
          <Col span={12}><SearchField/></Col>
          <Col span={6}><MENU/></Col>
        </Row>

      </StyledWrapper>
  );
}

export default AT_HEADER;
