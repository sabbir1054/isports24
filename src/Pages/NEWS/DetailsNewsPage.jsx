import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { api_key } from "../Shared/apikey";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import styles from "./News.module.css";

const DetailsNewsPage = () => {
  const location = useLocation();
  const broken_link = location.pathname.split("-");
  const newsId = broken_link[broken_link.length - 1];
  const [data, setData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/detail",
      params: { id: `${newsId}` },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(data);







  return (
    <div className={styles.newsDetails_wrapper}>
      <NavigationBar />
      <hr className="text-white" />
      <Container>
        <div className={`news_header  py-2`}>
          <h1 className="fw-bold text-start mb-3 mt-5">
            {data?.article?.title}
          </h1>
          {/* Author logo */}
          <img
            src={`https://www.livescore.com${data?.article?.publishedBy?.logo}`}
            alt=""
          />
          <p className="text-white py-0 d-inline-block ms-2 fw-bold">
            {data?.article?.publishedBy?.name}{" "}
          </p>
          <p className="text-white  text-start py-0">
            <span className="fw-bold">Publish Date:</span>{" "}
            {data?.article?.publishedDate}
          </p>
          <hr className="text-secondary" />
        </div>
        <div className="news_img w-75">
          <img
            src={`${data?.article?.mainMedia?.article?.url}`}
            className="img-fluid rounded"
            alt=""
            srcset=""
          />
        </div>
        <div className={`color-white w-75 w-sm-100 p-4 ${styles.news_body}`}>
          {data?.article?.body.map((item) => (
            <div className=" fs-5">
              <div dangerouslySetInnerHTML={{ __html: item.data.content }} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DetailsNewsPage;
