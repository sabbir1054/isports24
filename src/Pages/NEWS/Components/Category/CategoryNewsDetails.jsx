import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { api_key } from "../../../Shared/apikey";
import NavigationBar from "../../../Shared/Navbar/NavigationBar";
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

  return (
    <div className="bg-dark">
      <div>
        <div className={styles.category_news_details_wrapper}>
          <NavigationBar />
          <hr className="text-white" />
          {play ? (
            <Container>
              <div className={`news_header  py-2`}>
                <h1 className="fw-bold text-start mb-3 mt-5">{news?.title}</h1>

                <p className="text-white  text-start py-0">
                  <span className="fw-bold">Publish Date:</span>{" "}
                  {news?.updated_at?.split("T")[0]}
                </p>
                <hr className="text-secondary" />
              </div>
              <div className="news_img w-75">
                <img
                  src={`${news?.main_media[0]?.data?.urls?.uploaded?.original}`}
                  className="img-fluid rounded"
                  alt=""
                  srcset=""
                />
              </div>
              <div
                className={`color-white w-75 w-sm-100 p-4 ${styles.news_body}`}
              >
                {news?.body?.map((item) => (
                  <div className=" fs-5">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.data.content }}
                      key={ids[0]}
                    />
                  </div>
                ))}
              </div>
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
