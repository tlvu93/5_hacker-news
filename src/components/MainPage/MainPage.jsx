import { useEffect } from "react";
import HnApi from "../../services/HackerNewsApi";

const MainPage = () => {
  useEffect(() => {
    HnApi.search("test")
      .then((response) => response.json())
      .then((data) => console.log(data.hits));
  }, []);
  return <div></div>;
};

export default MainPage;
