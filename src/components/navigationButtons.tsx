import React from "react";
import { Typography, Menu } from "antd";
import Link from "next/link";

const { Title } = Typography;

export const NavigationButtons = ()=> {

  return (
    <Menu
      style={{width: "33%"}}
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

