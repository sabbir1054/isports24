import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { api_key} from "../../../Shared/apikey";
import styles from "./SideBarNews.module.css";
import SingleNewsSide from "./SingleNewsSide";
import axios from "axios"

const SideBarNews = ({id}) => {
  const [data, setData] = useState([]);


  // console.log(broken_link[1]);
  useEffect(() => {

    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/list",
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.homepageArticles);
        const getData = response.data.homepageArticles.filter(
          (item) => item.category.id == id
        );
        setData(getData[0].articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


  return (
    <div className={`${styles.latestNews_wrapper}`}>
      <h2 className="text-center p-2">Latest News</h2>
      <Container>
        {data.length ? (
          data.map((item) => <SingleNewsSide article={item} />)
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default SideBarNews;
