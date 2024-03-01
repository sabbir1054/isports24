import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { LatestNewsContext } from "../../../../Context/LatestNewsProvider";
import Loader from "../../../Loader/Loader";

import styles from "./SideBarNews.module.css";
import SingleNewsSide from "./SingleNewsSide";

const SideBarNews = ({ id, iId }) => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const { myData } = useContext(LatestNewsContext);

  const makeData = () => {
    const getData = myData?.filter((item) => item.category.id == id);
    setData(getData[0]?.articles);
  };
  console.log("ok", data);

  useEffect(() => {
    setData(myData[0]?.articles);
  }, [myData]);
  console.log(data);
  return (
    <div className={`${styles.latestNews_wrapper}`}>
      <h2 className="text-center p-2">Latest News</h2>
      <Container>
        {data?.length ? (
          data?.map((item) => <SingleNewsSide article={item} key={item?.id} />)
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default SideBarNews;
