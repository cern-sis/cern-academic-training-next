import React from "react";
import Link from "next/link";
import { Typography, Menu, Row, Col } from "antd";

const { Title } = Typography;

function MENU() {
  return (
    <Row
      className="menu"
      style={{ justifyContent: "space-between", display: "flex" }}
    >
      <Col
        xs={{ span: 21 }}
        lg={{ span: 8 }}
        className="about-us"
        key="about-us"
        style={{ justifyContent: "flex-start", display: "flex" }}
      >
        <Link href="/about-us">
          <Title level={2} className="about-us-link">
            About
          </Title>
        </Link>
      </Col>

      <Col xs={{ span: 21 }} lg={{ span: 8 }} className="events" key="events">
        <Typography.Link href="https://indico.cern.ch/category/72/">
          <Title level={2} className="events-link">
            Events
          </Title>
        </Typography.Link>
      </Col>

      <Col
        xs={{ span: 21 }}
        lg={{ span: 8 }}
        className="contact-us"
        key="contact-us"
      >
        <Typography.Link href="mailto:atc-contact@cern.ch" target="_blank">
          <Title level={2} className="contact-us-link">
            Contact
          </Title>
        </Typography.Link>
      </Col>
    </Row>
  );
}

export default MENU;
