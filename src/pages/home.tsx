import { Button } from "antd";
import React from "react";


import { useRequest } from "../common/hooks/useRequest";

const Home = ({ props }) => {
  const data = useRequest();
  return (
    data && (
      <p>
        {data.map((item) => (
          <div>{item.lecture_id}</div>
        ))}
        <Button></Button>
      </p>
    )
  );
};
export default Home;
