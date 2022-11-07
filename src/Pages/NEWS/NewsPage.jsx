import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { api_key } from "../Shared/apikey";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import FeaturedSlide from "./Components/Feature/FeaturedSlide";
import NewsNav from "./Components/NewsNav/NewsNav";
import styles from "./News.module.css";
const NewsPage = () => {
  const [topStoriesData, setTopStoriesData] = useState([]);
  const [allNews, setAllNews] = useState([]);

  /* Fetch data */
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
    setTopStoriesData(response.data.topStories)
    setAllNews(response.data.homepageArticles)
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  
  }, []);

  return (
    <div className={`${styles.newsWrapper}`}>
      <NavigationBar />
      <hr className="text-light" />
      <div className="w-100">
        <FeaturedSlide allArticle={topStoriesData} />
      </div>
      <div className="allNewsSection">
        <Container>
          <NewsNav />
        </Container>
      </div>
    </div>
  );
};

export default NewsPage;
