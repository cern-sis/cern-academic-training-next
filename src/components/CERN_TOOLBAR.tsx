import React from "react";
import { Layout, Typography, Menu, Col, Row } from "antd";
// import "./CERN_TOOLBAR.css";

const { Header } = Layout;
const { Title } = Typography;

function CERN_TOOLBAR() {
  return (
    <Header id="cern-toolbar" aria-label="CERN Toolbar">
      <Row
        className="toolbar-submenu"
        style={{ justifyContent: "space-between" }}
      >
        <Col span={12}>
          <Title>
            <Typography.Link href="//home.cern" title="CERN">
              CERN
              <span> Accelerating science</span>
            </Typography.Link>
          </Title>
        </Col>
        <Col
          span={11}
          style={{ justifyContent: "flex-end", display: "flex" }}
          className="signin cern-account-links"
          key="cern-account-links"
        >
          <Typography.Link
            href="/user/login"
            className="cern-account cern-signin cern-single-mobile-signin"
          >
            Sign in
          </Typography.Link>
        </Col>
        <Col
          span={1}
          style={{ justifyContent: "flex-end", display: "flex" }}
          className="directory"
          key="directory"
        >
          <Typography.Link
            href="//cern.ch/directory"
            className="cern-directory"
            title="Search CERN resources and browse the directory"
          >
            Directory
          </Typography.Link>
        </Col>
      </Row>
    </Header>
  );
}

export default CERN_TOOLBAR;
