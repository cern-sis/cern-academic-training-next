import React from "react";
import Link  from "next/link";
import { Layout, Row, Col, Typography, Menu } from "antd";
import styled from "styled-components";

const { Footer } = Layout;
const { Title } = Typography;

const CernFooter = styled(Footer)`
  background: #191919;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  font-size: 1.8rem;
  margin: 0;
  position: relative;
  padding: 10px 10px 0;
  z-index: 100;
  top: -1px;
  color: #fffeee;
}
`
const CopyWrapper = styled.div`
  font: normal normal normal 13px/27px Source Sans Pro Light;
  text-align: center;
  width: 100%;
  line-height: 50px;
  margin: 0;`

function CERN_FOOTER() {
  return (
    <CernFooter>
      <div className="footer">
        <Row className="row" justify="space-between" gutter={12}>
          <Col
            className="footer-first-col"
            key="footer-first-col"
            xs={24}
            sm={24}
            md={8}
            lg={6}
          >
            <nav
              role="navigation"
              aria-labelledby="block-cernclean-footer-menu"
              id="block-cernclean-footer"
            >
              <Title
                level={2}
                className="visually-hidden"
                id="block-cernclean-footer-menu"
              >
                Footer menu
              </Title>

              <Menu className="menu nav">
                <Menu.Item>
                  <Typography.Link href="https://home.cern">
                    CERN
                  </Typography.Link>
                </Menu.Item>
              </Menu>
            </nav>
          </Col>

          <Col
            className="footer-second-col"
            key="footer-second-col"
            xs={24}
            sm={24}
            md={8}
            lg={6}
          >
            <div className="mb-4">
              <div className="region-footercolumn2">
                <nav
                  role="navigation"
                  aria-labelledby="block-generalinfo-2-menu"
                  id="block-generalinfo-2"
                >
                  <Title level={2} id="block-generalinfo-2-menu">
                    General info
                  </Title>
                  <Menu className="menu nav">
                    <Menu.Item>
                      <Typography.Link href="https://home.cern/data-privacy-protection-policy">
                        Privacy policy
                      </Typography.Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Typography.Link href="https://copyright.web.cern.ch/">
                        Copyright and terms of use{" "}
                      </Typography.Link>
                    </Menu.Item>
                  </Menu>
                </nav>
              </div>
            </div>
          </Col>

          <Col
            className="footer-third-col"
            key="footer-third-col"
            xs={24}
            sm={24}
            md={8}
            lg={6}
          >
            <div className="mb-4">
              <div className="region region-footercolumn3">
                <nav
                  role="navigation"
                  aria-labelledby="block-cernandyou-2-menu"
                  id="block-cernandyou-2"
                >
                  <Title level={2} id="block-cernandyou-2-menu">
                    Academic Training Committee
                  </Title>

                  <Menu className="menu nav">
                    <Menu.Item>
                      <Link href="/about-us/">About</Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Typography.Link href="https://cds.cern.ch/collection/Academic%20Training%20Lectures?ln=en">
                        CERN Document Server
                      </Typography.Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Typography.Link href="https://indico.cern.ch/category/72/">
                        Events
                      </Typography.Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Typography.Link
                        href="mailto:atc-contact@cern.ch"
                        target="_blank"
                      >
                        Contact
                      </Typography.Link>
                    </Menu.Item>
                  </Menu>
                </nav>
              </div>
            </div>
          </Col>

          <Col className="logo" key="logo" xs={24} sm={24} md={1} lg={6}>
            <Typography.Link
              href="https://home.cern/"
              title="CERN"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://visit.cern/themes/custom/cernclean/logo.svg"
                alt="CERN"
              />
            </Typography.Link>
          </Col>
        </Row>
      </div>

      <CopyWrapper>
        <Typography.Link href="https://copyright.web.cern.ch/">
          Copyright
        </Typography.Link>
        &nbsp;&copy; 2022 CERN
      </CopyWrapper>
    </CernFooter>
  );
}

export default CERN_FOOTER;
