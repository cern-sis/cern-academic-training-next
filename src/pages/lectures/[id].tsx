import { LectureProps } from "@/common/interfaces";
import { GetServerSideProps, NextPage } from "next";
import { Layout, Typography, Card } from "antd";
import styled from "styled-components";
import HTMLTagRenderer from "@/components/HTMLTagsRenderer";

const { Title } = Typography;

export interface PageProps {
  lecture: LectureProps;
}

const { Content } = Layout;

export const StyledLecture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  border-radius: 5%;
  background: linear-gradient(30deg, #0093e9 0, #0033a0 25%, #0b1117 100%)
    no-repeat padding-box;
  color: #fff;
  width: 50vw;
  display: inline-block;
  padding: 50px;
  height: 100%;
`;


const InformationContainer = styled.p`
  font: normal normal normal 16px/28px Source Sans Pro Regular;
`;

const VideoDetails = styled(Title)`
  font: normal normal normal 16px/28px Source Sans Pro Regular;
  color: #fff !important;
  opacity: 0.6;
`;

const Lectures: NextPage<PageProps> = ({ lecture }) => {
  return (
    <StyledLecture style={{paddingTop: "192px"}}>
      <VideoContainer>
        <div>
          <iframe
            title={lecture.title}
            src={`https://cds.cern.ch/video/${lecture.id}?showTitle=true`}
            allowFullScreen
          />
        </div>
        <div>
        <VideoDetails level={5}>{lecture.corporate_author}</VideoDetails>
        <VideoDetails level={1}>{lecture.title}</VideoDetails>
        <VideoDetails level={5}>
          <span>{lecture.date.toDateString}</span>
          <a href={lecture.event_details}>Event details(Indico)</a>
        </VideoDetails>
        <InformationContainer>
          <HTMLTagRenderer
            string={lecture.abstract}
            allowedTags={["p", "strong"]}
          />
        </InformationContainer>
        </div>
      </VideoContainer>
    </StyledLecture>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/${id}`);
  const lecture = await res.json();
  return { props: { lecture } };
};

export default Lectures;
