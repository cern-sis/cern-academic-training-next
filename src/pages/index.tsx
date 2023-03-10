import '@/styles/Home.module.css'

import { Layout } from "antd";

import { GetServerSideProps, NextPage } from "next";
import { LectureProps } from "@/common/interfaces";
import CernToolBar from "@/components/cernToolbar"
interface HomePagePops {
  lectures: LectureProps[];
}

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  return (
    <Layout className="layout">
      <CernToolBar/>
      <div>
        {lectures.map((item, key) => (
          <p key={key}>{item.id}</p>
        ))}
      </div>
    </Layout>
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
