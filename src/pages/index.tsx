

import { GetServerSideProps, NextPage } from "next";
import moment from "moment";
import Link from 'next/link';
import { LectureProps } from "@/common/interfaces";
import { photos } from "@/common/photos";
import styled from 'styled-components'

import React, { Fragment, useEffect, useState } from "react";
import { Layout, Row, Col, Card, Carousel, Typography, Divider } from "antd";
// import { Helmet } from "react-helmet";
import Image from 'next/image'

import AT_HEADER from "@/components/AT_HEADER";
import CERN_FOOTER from "@/components/CERN_FOOTER";
import CERN_TOOLBAR from "@/components/CERN_TOOLBAR";
import { PlayCircleOutlined } from "@ant-design/icons";
import SUGGESTION_BOX from "@/components/SUGGESTION_BOX";
import LOADING_ICON from "@/components/LOADING_ICON";

const { Content } = Layout;
const { Title } = Typography;

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  useEffect(() => {
    document.title = "Home | CERN Academic Training";
  }, []);
  // window.scrollTo(0, 0);
  const AcademicTrainingCaption = styled(Typography.Link )`
  color: #fff;
  font: normal normal normal 32px/33px Abolition;
  font-size: 100px;
`
  interface VideoCaptureProps{
    name?:boolean;
    speaker?:boolean;
  }
  const VideosCaptions = styled(Typography.Title)<VideoCaptureProps>`
  color: ${props => props.name ? "#fff !important;" : "#6c7897 !important;"}
  font-size: 20px !important;
  text-transform: ${props => props.speaker ?  "uppercase !important;" : "capitalize !important;"}
  font-weight: ${props => props.speaker ?  "500  !important;" : "300  !important;"}
  font-size: ${props => !props.name ?  "15px  !important;" : "20px  !important;"}
  `


  return (
    <Layout className="layout">
      <CERN_TOOLBAR />
      <Content id="atc-content">
      <AT_HEADER />

        {/* <Helmet>
          <meta name="description" content={HOME_PAGE_METATAG_CONTENT} />
        </Helmet> */}
        <Fragment>
          <div className="carousel-container">
            <div className="photo-carousel" data-preload>
              <Carousel autoplay dots={false} >
                {photos.map((photo) => {
                  return (
                    <div key={photo.src} className="container-fluid">
                      <div className="content">
                        <img alt={photo.alt} src={photo.src} />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="content-lists">
            <div className="responsive">
              <div className="frame">
                <div id="atc-logo">
                  <Image
                    width={300}
                    height={114}
                    src="/academicTrainingLogo.png"
                    alt="Academic Training Logo"
                  />
                </div>
                <Title>
                  <AcademicTrainingCaption
                  href="/" >
                    ACADEMIC TRAINING{" "}
                  </AcademicTrainingCaption>
                </Title>
              </div>
            </div>
            <div className="recent">
              <Title level={2}>MOST RECENT</Title>
              <Divider className="divider" />
            </div>
            .{" "}
            <Row justify="center" gutter={[16, 42]}>
              {(
                lectures.map((lecture: any) => {
                  const formattedDate = moment(lecture.date).format('YYYY-MM-DD');
                  return (
                    <Col
                      key={lecture.lecture_id}
                      xs={24}
                      sm={24}
                      md={12}
                      lg={8}
                      xl={6}
                    >
                      <nav>
                        <Link
                          href={`/lectures/${lecture.lecture_id}`}
                          key={lecture.lecture_id}
                        >
                          <Card
                            hoverable
                            className="video-card"
                            cover={
                              <img
                                alt="thumbnail"
                                src={lecture.thumbnail_picture}
                              />
                            }
                          >
                            <div className="play">
                              <PlayCircleOutlined />
                            </div>

                            <div className="duration">
                              <Title level={5}>
                                {lecture.imprint.split(" - ")[1]}
                              </Title>
                            </div>

                            <Card.Grid
                              className="card-content"
                              hoverable={false}
                            >
                              <div >
                                <VideosCaptions speaker={true} level={1}>{lecture.speaker}</VideosCaptions>
                              </div>
                              <div >
                                <VideosCaptions name={true} level={1}>{lecture.title}</VideosCaptions>
                              </div>
                              <div>
                                <VideosCaptions level={1}>
                                  Posted on <strong>{formattedDate}</strong>
                                </VideosCaptions>
                              </div>
                            </Card.Grid>
                          </Card>
                        </Link>
                      </nav>
                    </Col>
                  );
                })
              )}
            </Row>
          </div>
        </Fragment>

        <Fragment>
          <SUGGESTION_BOX />
        </Fragment>
      </Content>

      <CERN_FOOTER />
    </Layout>
  );
}

interface HomePagePops {
  lectures: LectureProps[];
}

export const getServerSideProps: GetServerSideProps<
  HomePagePops
> = async () => {
  const res = await fetch(`http://localhost:3000/api`);
  const results = await res.json();
  const lectures = results.results;
  return { props: { lectures } };
};

export default Home;
