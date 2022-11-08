import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { api_key, football_news_id } from '../../../Shared/apikey';
import CategoryWiseSingleCard from './CategoryWiseSingleCard';

const FootballNews = () => {
       const [data, setData] = useState([]);
       useEffect(() => {
         const options = {
           method: "GET",
           url: "https://livescore6.p.rapidapi.com/news/v2/list-by-sport",
           params: { category: football_news_id, page: "1" },
           headers: {
             "X-RapidAPI-Key": api_key,
             "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
           },
         };

        axios
        .request(options)
        .then(function (response) {
        setData(response.data.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
       }, []);
    return (
      <div>
        <Row xs={1} md={2} className="g-2">
          {data?.map((item) => (
            <CategoryWiseSingleCard article={item} />
          ))}
        </Row>
      </div>
    );
};

export default FootballNews;