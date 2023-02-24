import { GetServerSideProps, NextPage } from "next";
import { LectureProps } from "@/common/interfaces";

interface HomePagePops {
  lectures: LectureProps[];
}

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  return (
    <>
      <div>
        {lectures.map((item, key) => (
          <p key={key}>{item.id}</p>
        ))}
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps<
  HomePagePops
> = async () => {
  const res = await fetch(`http://localhost:3000/api`);
  const results = await res.json();
  const lectures = results.results;
  return { props: { lectures } };
};

export default Home;
