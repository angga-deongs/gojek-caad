// --- core
import { useEffect, useState } from "react";

// --- useFetch
const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // call API Posts
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData(resData);
      });
  }, [url]);
  return {
    // data: data,
    // if key value sama
    data,
  };
};

export default useFetch;
