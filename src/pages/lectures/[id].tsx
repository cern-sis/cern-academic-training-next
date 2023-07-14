import { LectureProps } from "@/common/interfaces";
import { GetServerSideProps, NextPage } from "next";

export interface PageProps {
  lecture: LectureProps;
}

const Lectures: NextPage<PageProps> = ({ lecture }) => {
  return (
    <>
      <p>Lecture id: {lecture.id}</p>
      <p>Lecture: {lecture.title}</p>
      sjsjs
    </>
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
