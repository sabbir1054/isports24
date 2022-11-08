import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { api_key } from "../Shared/apikey";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import AllCategory from "./Components/Category/AllCategory";
import Champions from "./Components/Category/Champions";
import CricektNews from "./Components/Category/CricektNews";
import FootballNews from "./Components/Category/FootballNews";
import Others from "./Components/Category/Others";
import Transfer from "./Components/Category/Transfer";
import WorldCup from "./Components/Category/WorldCup";
import FeaturedSlide from "./Components/Feature/FeaturedSlide";
import NewsNav from "./Components/NewsNav/NewsNav";
import styles from "./News.module.css";
const NewsPage = () => {
  const location = useLocation();
  const [topStoriesData, setTopStoriesData] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [newsCategory, setNewsCategory] = useState(`${location.pathname.split("/")[2]}`);
  const [footballNews, setFootballNews] = useState([]);
  const [cricketNews, setCricketNews] = useState([]);

  const devidedNewsCategoryWise = () => {
    const fData = allNews.filter((item) => item.category.title === "football");
    const cData = allNews.filter((item) => item.category.title === "cricket");

    setFootballNews(fData);
    setCricketNews(cData);
  };

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
        setTopStoriesData(response.data.topStories);
        setAllNews(response.data.homepageArticles);
        devidedNewsCategoryWise();
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getNewsCategory = (x) => {
    console.log(x);
    setNewsCategory(x);
  };

  return (
    <div className={`${styles.newsWrapper}`}>
      <NavigationBar />
      <hr className="text-light" />
      <div className="w-100">
        <FeaturedSlide allArticle={topStoriesData} />
      </div>
      <div className="allNewsSection">
        <Container className="border border-secondary rounded">
          <NewsNav func={getNewsCategory} />
          <hr className="text-white" />
          {allNews.length > 0 ? (
            <div>
              <div className="newsSection">
                <div className={newsCategory === "all" ? `d-block` : `d-none`}>
                  <AllCategory news={allNews} />
                </div>
                <div
                  className={newsCategory === "cricket" ? `d-block` : `d-none`}
                >
                  <CricektNews news={cricketNews} />
                </div>
                <div
                  className={newsCategory === "football" ? `d-block` : `d-none`}
                >
                  <FootballNews news={footballNews} />
                </div>
                <div
                  className={
                    newsCategory === "champion_league" ? `d-block` : `d-none`
                  }
                >
                  <Champions />
                </div>
                <div
                  className={
                    newsCategory === "world_cup_2022" ? `d-block` : `d-none`
                  }
                >
                  <WorldCup />
                </div>
                <div
                  className={
                    newsCategory === "transfer_news" ? `d-block` : `d-none`
                  }
                >
                  <Transfer />
                </div>
                <div
                  className={
                    newsCategory === "others_news" ? `d-block` : `d-none`
                  }
                >
                  <Others />
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </Container>
      </div>
    </div>
  );
};

export default NewsPage;
