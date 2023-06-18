import React, { useState, useEffect } from "react";

import { Layout, Button, Typography, Row, Col, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import SEARCH_BAR from "./SEARCH_BAR";
import MENU from "./MENU";
import {
  StyledHeader,
  StyledWrapper,
  AcademicTrainingColumn,
} from "./styled_ayt_header";
const { Header } = Layout;
const { Title } = Typography;

function AT_HEADER() {
  const [state, setState] = useState({ collapsed: true });
  const [screenWidth, setScreenWidth] = useState();
  const [header, setHeader] = useState(false);

  const toggleCollapsed = (e: any) => {
    setState((state) => {
      return {
        collapsed: !state.collapsed,
      };
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    const changeWidth = () => {
      console.log(window.innerWidth);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  return (
    <StyledHeader>
      <StyledWrapper
      active={header}>
        <Row justify="end">
          <Col span={2} style={{ background:"pink", justifyContent: "center", alignItems: "center", display:"flex"}}></Col>
          <Col
            span={4}
            style={{background:"red"}}
            // xs={{ span: 22, order: 1 }}
            // md={{span: 14}}
            // lg={{ span: 7, order: 1 }}
            // xl={{span: 4}}
            key="header-title"
          >
            <Title>
              <Typography.Link href="/">ACADEMIC TRAINING</Typography.Link>
            </Title>
          </Col>

          <Col
            span={12}
            style={{justifyContent: "center", alignItems: "end", display:"flex", padding: "0px 40px 0px 40px"}}
            key="header-search"
          >

            <SEARCH_BAR />
          </Col>
          <Col
            span={6}
            className="header-menu"
            key="header-menu"
            style={{background:"red", justifyContent: "center", alignItems: "center", display:"flex"}}
          >
            {/* {screenWidth <= 992 ? (
              <Drawer
                placement="right"
                width="300px"
                className="drawer"
                onClose={toggleCollapsed}
                visible={!state.collapsed}
                destroyOnClose={true}
                closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
              > */}
                <MENU />
              {/* </Drawer>
            ) : (
              <MENU />
            )} */}

            <Button
              type="primary"
              className="menu-mobile"
              onClick={toggleCollapsed}
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "200%",
              }}
            >
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
      </StyledWrapper>
    </StyledHeader>
  );
}

export default AT_HEADER;
