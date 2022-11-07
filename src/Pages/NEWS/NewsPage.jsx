import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { api_key } from "../Shared/apikey";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import FeaturedSlide from "./Components/Feature/FeaturedSlide";
import styles from "./News.module.css"
const NewsPage = () => {
  const [topStoriesData, setTopStoriesData] = useState([]);

  /* Fetch data */
useEffect(() => {
  
const options = {
  method: "GET",
  url: "https://livescore6.p.rapidapi.com/news/v2/list",
  headers: {
    "X-RapidAPI-Key": api_key ,
    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    setTopStoriesData(response.data.topStories)
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  
}, [])

  return (
    <div className={`${styles.newsWrapper}`}>
      <NavigationBar />
      <hr className="text-light" />
      <div className="w-100">
        <FeaturedSlide allArticle={topStoriesData} />
      </div>
    </div>
  );
};

export default NewsPage;
