

import { GetServerSideProps, NextPage } from "next";
import moment from "moment";
import Link from 'next/link';
import { LectureProps } from "@/common/interfaces";
import { photos } from "@/common/photos";
import styled from 'styled-components'

import React, { Fragment, useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Card, Carousel, Typography, Divider } from "antd";
// import { Helmet } from "react-helmet";
import Image from 'next/image'

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
  const AcademicTrainingCaption = styled(Link)`
  color: #fff !important;
  font: normal normal normal 32px/33px Abolition;
  font-size: 100px;
  &:hover: {
    background-color: #fff;
  }
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.938));
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

  const CarouselImage = styled.img`
    height: 900px;
    margin-top: 0;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 0.9;
    -webkit-transition: all 1s ease-out;
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -ms-transition: all 1s ease-out;
    transition: all 0.5s ease-out;
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      object-position: 50% 50%;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
      transition: all 0.5s ease-in;
      opacity: 1;
    };
}
  `

interface CaptionFrame{
  width: number;
}

const CaptionFrame = styled.div<CaptionFrame>`
  height: 650px;
  margin: 3% 25% 3% 25%;
  width:  50%;
  border: 2px solid #ffffffab;
  border-radius: 50px;
  opacity: 0.9999;
  display: block;
  z-index: 0;
  transition: 1s;
  float: left;
  top: 80px;
  transition: 1s;
  font: normal normal normal 98px/178px Abolition;
  letter-spacing: 0;
  transition: 1s;
  opacity: 1;
  position: relative;
  padding-left: 0.5em;
`

const MostRecentCaption = styled(Title)`
    font: normal normal normal 25px/16px Abolition;
    letter-spacing: 2px;
    text-shadow: 2px 2px 10px #0a152d;
    opacity: 0.78;
    color: #fff !important;
`

const StylesDivider = styled(Divider)
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!carouselRef?.current?.clientWidth) {
      console.log("whatever", carouselRef)
      return;
    }
    console.log(carouselRef?.current?.clientWidth)
    console.log("whatever", carouselRef)
    setWidth(carouselRef?.current?.clientWidth);
  }, [carouselRef?.current?.clientWidth]);

  return (
    <div>
        <Fragment>
          <div ref={carouselRef}>
            <div style={{height: 0}}  data-preload>
              <Carousel autoplay dots={false} >
                {photos.map((photo) => {
                  return (
                    <div key={photo.src} className="container-fluid">
                      <div className="content">
                        <CarouselImage alt={photo.alt} src={photo.src} />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div>
              <CaptionFrame width={width}>
                <div style={{marginTop: "3em", marginLeft: "-0.6em"}}>
                  <Image
                    width={300}
                    height={114}
                    src="/academicTrainingLogo.png"
                    alt="Academic Training Logo"
                  />
                </div>
                <Title type="warning">
                  <AcademicTrainingCaption
                  href="/" >
                    ACADEMIC TRAINING{" "}
                  </AcademicTrainingCaption>
                  </Title>
              </CaptionFrame>
            <div>
              <MostRecentCaption level={2}>MOST RECENT</MostRecentCaption>
              <Divider className="divider" />
            </div>
            .{" "}
            {/* <Row justify="center" gutter={[16, 42]}>
              {(
                [lectures[0]].map((lecture: any) => {
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
                          <VideoCard
                            hoverable
                            cover={
                              <AntCardCover
                                alt="thumbnail"
                                src={lecture.thumbnail_picture}
                              />
                            }
                          >
                            <PlayButton>
                              <PlayCircleOutlined />
                            </PlayButton>

                            <VideoCardDurationCaption>
                              <VideoCardDurationTitle level={5}>
                                {lecture.imprint.split(" - ")[1]}
                              </VideoCardDurationTitle>
                            </VideoCardDurationCaption>

                            <VideoCardContent
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
                            </VideoCardContent>
                          </VideoCard>
                        </Link>
                      </nav>
                    </Col>
                  );
                })
              )}
            </Row> */}
          </div>
        </Fragment>

        <Fragment>
          <SUGGESTION_BOX />
        </Fragment>
    </div>
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


const VideoCard = styled(Card)`
  &&& {
    border-radius: 5px;
    height: 200px;
    object-fit: cover;
    object-position: 50% 10%;
    -o-filter: blur(1px);
    -moz-filter: blur(1px);
    -ms-filter: blur(1px);
    filter: brightness(70%);
    z-index: 2;
    transition: 0.5s;
    filter: brightness(100%);
    transition: all 0.5s;
    background-color: transparent;
    border-radius: 5px;
    min-height: 150px;
    &:hover{
      filter: drop-shadow(1px 1px 10px #00194e);
      font-size: 3.8em;
      transition: 0.3s;
      max-height: 10px;
      transition: 0.5s;
    }
  }
`
const VideoCardContent = styled(Card.Grid)`
  padding: 0 0 0 12px;
  margin-left: -8px;
  box-shadow: inset 0 0 80px transparent;
`

const VideoCardDurationCaption = styled.div`
position: relative;
bottom: 34px;
right: 10px;
float: right;
background: #191919;
border-radius: 5px;
`
const VideoCardDurationTitle = styled(Title)`
  font: normal normal normal 13px/14px Open Sans;
  padding: 4px 5px 0;
`

const PlayButton = styled.div`
  width: 1em;
  font-size: 2.6em;
  opacity: 0.8;
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 20px;
  transition: 0.3s;
  filter: drop-shadow(1px 1px 10px #00194e);
  font-size: 3.8em;
  transition: 0.3s;
`

const AntCardCover = styled.img`
  border-radius: 5px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 10%;
  -o-filter: blur(1px);
  -moz-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: brightness(70%);
  z-index: 2;
  transition: 0.5s;
  filter: brightness(100%);
  transition: all 0.5s;`