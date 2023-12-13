import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { LectureProps } from "@/common/interfaces";
import { photos } from "@/common/photos";

import React, { useEffect } from "react";
import { Layout, Row, Col, Card, Carousel, Typography } from "antd";
import Image from "next/image";
import { store } from "../contexts/homeContext";
import SUGGESTION_BOX from "@/components/SUGGESTION_BOX";
import {
  AcademicTrainingCaption,
  AcademicTrainingDecoration,
  CaptionFrame,
  CarouselImage,
  MostRecentCaption,
  SlideWrapper,
  StyledDivider,
  Wrapper,
  AntCardCover,
  MostRecentVideosDiv,
  VideoCard,
  StyledCarousel,
} from "../styled_components/index_styled_components";
const { Title } = Typography;

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  return (
    <Wrapper>
      <SlideWrapper>
        <CaptionFrame>
          <AcademicTrainingDecoration>
            <Image
              width={300}
              height={114}
              src="/academicTrainingLogo.png"
              alt="Academic Training Logo"
            />
          </AcademicTrainingDecoration>
          <Title type="warning">
            <AcademicTrainingCaption href="/">
              ACADEMIC TRAINING!{" "}
            </AcademicTrainingCaption>
          </Title>
        </CaptionFrame>
      </SlideWrapper>
      <StyledCarousel autoplay dots={false}>
        {photos.map((photo) => {
          return (
            <CarouselImage alt={photo.alt} src={photo.src} key={photo.src} />
          );
        })}
      </StyledCarousel>
      <MostRecentVideosDiv>
        <div>
          <MostRecentCaption level={5}>MOST RECENT</MostRecentCaption>
        </div>
        <Row gutter={[8, 8]} justify="space-between">
          <StyledDivider />
          {lectures.map((lecture) => {
            return (
              <Col key={lecture.lecture_id}>
                {/* Why on going back it does not remove the search? Hiw is search pushed to histir */}
                {/* maybe router.push(href) */}
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
                  ></VideoCard>
                </Link>
              </Col>
            );
          })}
        </Row>
        <div>
          <SUGGESTION_BOX />
        </div>
      </MostRecentVideosDiv>
    </Wrapper>
  );
};

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
