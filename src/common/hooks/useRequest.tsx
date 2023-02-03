import axios, { HttpStatusCode } from "axios";
import React, { useState, useEffect } from "react";

export const useRequest = () => {
  const [data, setData] = useState();
 useEffect(()=>{
    axios
    .get("http://localhost:8000/api/v1/lectures/")
    .then(function (response) {
      // handle success
      setData(response.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

 },[])
  return data;
};
