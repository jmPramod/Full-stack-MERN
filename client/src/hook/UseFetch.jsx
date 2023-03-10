import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {


  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("use eff");

      try {
        const res = await axios.get(url);
        console.log("pramod",res);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);



const reFetch = async () => {
  setLoading(true);

  try {
    const res = await axios.get(url);
    setData(res.data);
  } catch (err) {
    setError(err);
  }
  setLoading(false);

};
return { data, error, loading, reFetch };
};

export default UseFetch;
