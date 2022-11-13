import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { api_key } from "../Pages/Shared/apikey";

export const LatestNewsContext = createContext({});

const LatestNewsProvider = ({ children }) => {
      const [myData, setData] = useState([]);

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
              setData(response.data.homepageArticles);
              console.log("fetch now");
        //     const getData = response.data.homepageArticles.filter(
        //       (item) => item.category.id == id
        //     );
        //     setData(getData[0].articles);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);
  return (
    <LatestNewsContext.Provider value={{myData}}>
      {children}
    </LatestNewsContext.Provider>
  );
};

export default LatestNewsProvider;
