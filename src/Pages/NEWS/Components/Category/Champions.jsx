import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Loader from "../../../Loader/Loader";
import { api_key, champions_league } from "../../../Shared/apikey";
import CategoryWiseSingleCard from "./CategoryWiseSingleCard";
const Champions = () => {
  const [data, setData] = useState([]);
  /*   let pageNumber = 1;
const increasePageNumber = () => {
  pageNumber = pageNumber + 1;
};
  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      pageNumber -= 1;
    }
  }; */
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/list-by-sport",
      params: { category: champions_league, page: "1" },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data);
        //   console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // console.log(data);
  return (
    <div>
      {data.length ? (
        <Row xs={1} md={2} className="g-2">
          {data?.map((item) => (
            <CategoryWiseSingleCard article={item} />
          ))}
        </Row>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Champions;
