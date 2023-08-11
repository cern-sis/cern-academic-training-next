import React from "react";
import Link from "next/link";
import { Typography, Menu, Row, Col } from "antd";
import styled from "styled-components";
const { Title } = Typography;

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
{
  /* <div style={{display:"inline-block", width:"100%"}}> */
}
//     <div
//     key="about-us"
//     style={{display:"inline-block", width:"33%"}}
//   >
//     <Link href="/about-us">
//       <Title level={2} style={{display: "flex", justifyContent: "center"}}>
//         About
//       </Title>
//     </Link>
//   </div>
//   <div  style={{display:"inline-block", width:"33%"}}>
//     <Typography.Link href="https://indico.cern.ch/category/72/">
//       <Title level={2} style={{display: "flex", justifyContent: "center"}}>
//         Events
//       </Title>
//     </Typography.Link>
//     </div>
//   <div
//     className="contact-us"
//     key="contact-us"
//     style={{display:"inline-block", width:"33%"}}
//   >
//     <Typography.Link href="mailto:atc-contact@cern.ch" target="_blank">
//       <Title level={2} style={{display: "flex", justifyContent: "center"}}>
//         Contact
//       </Title>
//     </Typography.Link>
//   </div>
// </div>
