import React from "react";
import { Layout, Typography, Menu, Col, Row } from "antd";

const { Header } = Layout;
const { Title } = Typography;

function CERN_TOOLBAR() {
  return (
    <Header id="cern-toolbar" aria-label="CERN Toolbar">
      <Row
        className="toolbar-submenu"
        style={{ justifyContent: "space-between" }}
      >
        <Col
        xl={{span: 12}}
        lg={{span: 11}}
        md={{span: 10}}
        sm={{span: 9 }}>
          <Title>
            <Typography.Link href="//home.cern" title="CERN">
              CERN
              <span> Accelerating science</span>
            </Typography.Link>
          </Title>
        </Col>
        <Col
          xl={{span: 11}}
          lg={{span: 10}}
          md={{span: 9}}
          sm={{span: 8}}
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
          xl={{span: 1}}
          lg={{span: 2}}
          md={{span: 3}}
          sm={{span: 4}}
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
