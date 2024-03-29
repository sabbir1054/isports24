import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SideBarNews from "../../../Home/Components/SideBarNews/SideBarNews";
import Loader from "../../../Loader/Loader";
import NavigationBar from "../../../Shared/Navbar/NavigationBar";
import {
  api_key,
  cricket_news_id,
  football_news_id,
} from "../../../Shared/apikey";
import styles from "../../News.module.css";
const CategoryNewsDetails = () => {
  const [play, setPlay] = useState(false);
  const [news, setNews] = useState({});
  const location = useLocation();
  const ids = location.pathname.split("/")[3].split("-");

  const makeData = (x) => {
    const filter = x.filter((item) => item.id == ids[1]);
    setNews(filter[0]);
    setPlay(true);
  };

  /* get data */
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/list-by-sport",
      params: { category: `${ids[0]}`, page: "1" },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        makeData(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  if (play) {
    console.log("my_news", news);
  }
  console.log("my_news", news);
  return (
    <div className="bg-dark">
      <div>
        <div className={styles.category_news_details_wrapper}>
          <NavigationBar />
          <hr className="text-white" />
          {play ? (
            <Container>
              <Row className="w-100 g-0">
                <Col lg={8}>
                  <div className={`news_header  py-2`}>
                    <h1 className="fw-bold text-start mb-3 mt-5">
                      {news?.title}
                    </h1>

                    <p className="text-white  text-start py-0">
                      <span className="fw-bold">Publish Date:</span>{" "}
                      {news?.updated_at?.split("T")[0]}
                    </p>
                    <hr className="text-secondary" />
                  </div>
                  <div className="news_img d-flex justify-content-center">
                    <img
                      src={`${news?.main_media[0]?.data?.urls?.uploaded?.original}`}
                      alt=""
                      srcset=""
                      className={`img-fluid rounded ${styles.news_img}`}
                    />
                  </div>
                  <div className={`color-white d-flex justify-content-center`}>
                    <div className={`p-4 ${styles.news_body}`}>
                      {news?.body?.map((item) => (
                        <div className=" fs-5">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.data.content,
                            }}
                            key={ids[0]}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col lg={4} className={`${styles.sidebar_bg} g-0`}>
                  <Container>
                    {news?.category?.title === "Cricket" ? (
                      <SideBarNews id={cricket_news_id} />
                    ) : news?.category?.title === "Football" ? (
                      <SideBarNews id={football_news_id} />
                    ) : (
                      <SideBarNews id={football_news_id} />
                    )}
                  </Container>
                </Col>
              </Row>
            </Container>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsDetails;
