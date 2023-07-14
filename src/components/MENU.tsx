import React from "react";
import Link from "next/link";
import { Typography, Menu, Row, Col } from "antd";

const { Title } = Typography;

function MENU() {
  return (
    <div style={{display:"inline-block", width:"100%"}}>
        <div
        key="about-us"
        style={{display:"inline-block", width:"33%"}}
      >
        <Link href="/about-us">
          <Title level={2} style={{display: "flex", justifyContent: "center"}}>
            Aboutt
          </Title>
        </Link>
      </div>
      <div  style={{display:"inline-block", width:"33%"}}>
        <Typography.Link href="https://indico.cern.ch/category/72/">
          <Title level={2} style={{display: "flex", justifyContent: "center"}}>
            Events
          </Title>
        </Typography.Link>
        </div>
      <div
        className="contact-us"
        key="contact-us"
        style={{display:"inline-block", width:"33%"}}
      >
        <Typography.Link href="mailto:atc-contact@cern.ch" target="_blank">
          <Title level={2} style={{display: "flex", justifyContent: "center"}}>
            Contact
          </Title>
        </Typography.Link>
      </div>
    </div>
  );
}

export default MENU;
