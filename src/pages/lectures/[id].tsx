import { LectureProps } from "@/common/interfaces";
import { GetServerSideProps, NextPage } from "next";
import { Layout, Typography, Card } from "antd";
import {InformationContainer, StyledLecture, VideoContainer, VideoDetails} from "../../styled_components/lecture_styled_components"
import HTMLTagRenderer from "@/components/HTMLTagsRenderer";

const { Title } = Typography;

export interface PageProps {
  lecture: LectureProps;
}


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
