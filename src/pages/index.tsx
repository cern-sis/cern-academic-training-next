
import { Layout, Carousel, Image } from "antd";

import { GetServerSideProps, NextPage } from "next";
import { LectureProps } from "@/common/interfaces";
import { photos } from "@/common/photos";

interface HomePagePops {
  lectures: LectureProps[];
}

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  return (
    <Layout className="layout" >
      <Carousel autoplay >
        {photos.map((photo) => {
          return (
            // <div key={photo.key}>
              // <div key={photo.key}className="content">
                <Image key={photo.key} width={"100%"} height={"100%"}  src={photo.src} alt={photo.alt} style={{ top: 0, position: "absolute", height: "100%",  objectFit: "contain"}} />
              //  </div>
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
