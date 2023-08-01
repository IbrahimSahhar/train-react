import axios from "axios";
import { useState } from "react";

const useApi = () => {
  const [getData, setGetData] = useState([]);
  const [postData, setPostData] = useState();

  const [loading, setLoading] = useState(false);
  const get = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setGetData(response.data);
        console(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const post = (url, body) => {
    setLoading(true);
    axios
      .post(url, body)
      .then((response) => {
        setPostData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
        setLoading(false);
      });
  };
  return { get, getData, post, postData, loading };
};
export default useApi;
