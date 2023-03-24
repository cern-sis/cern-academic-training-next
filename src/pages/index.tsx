// import Image from "next/image";

import { Layout, Carousel, Image } from "antd";

import { GetServerSideProps, NextPage } from "next";
import { LectureProps } from "@/common/interfaces";
import CernToolBar from "@/components/cernToolbar";
import { photos } from "@/common/photos";
import { SearchField } from "@/components/searchField";

interface HomePagePops {
  lectures: LectureProps[];
}

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  return (
    <Layout className="layout" >
      <Carousel autoplay dots={false} style={{width: "100%", background:"pink", zIndex:0, }}>
        {photos.map((photo) => {
          return (
            // <div key={photo.key}>
            //   <div className="content">
                <Image  width={"100%"} height={"100%"} key={photo.key} src={photo.src} alt={photo.alt} style={{ top: 0, position: "absolute", height: "100%",  objectFit: "contain"}} />
            //   </div>
            // </div>
          );
        })}
      </Carousel>
      {/* <div>
        {lectures.map((item, key) => (
          <p key={key}>{item.id}</p>
        ))} */}
      {/* </div> */}
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
