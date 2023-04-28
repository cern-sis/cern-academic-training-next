import React from "react";
import Link  from "next/link";
import { Typography, Menu } from "antd";
// import "./AT_HEADER.css";

const { Title } = Typography;

function MENU() {

  return (
    <Menu
      mode="horizontal"
      className="menu"
      overflowedIndicator={false}
    >
      <Menu.Item className="about-us" key="about-us">
        <Link href="/about-us">
          <Title level={2} className="about-us-link">
            About
          </Title>
        </Link>
      </Menu.Item>

      <Menu.Item className="events" key="events">
        <Typography.Link href="https://indico.cern.ch/category/72/">
          <Title level={2} className="events-link">
            Events
          </Title>
        </Typography.Link>
      </Menu.Item>

      <Menu.Item className="contact-us" key="contact-us">
        <Typography.Link href="mailto:atc-contact@cern.ch" target="_blank">
          <Title level={2} className="contact-us-link">
            Contact
          </Title>
        </Typography.Link>
      </Menu.Item>
    </Menu>
  );
}

export default MENU;
