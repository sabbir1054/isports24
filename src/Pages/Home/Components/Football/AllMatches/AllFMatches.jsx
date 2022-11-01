import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../../../Loader/Loader";
import SingleLeague from "./SingleLeague";

const AllFMatches = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const broken_link = location.pathname.split("/");
  // console.log(broken_link);
  const [data, setData] = useState([]);

  const linkParams1 = {
    Category: `${
      broken_link[1] == "football"
        ? "soccer"
        : broken_link[1]
        ? "cricket"
        : "soccer"
    }`,
    Timezone: "6",
  };
  const linkParams2 = {
    Category: `${
      broken_link[1] == "football"
        ? "soccer"
        : broken_link[1]
        ? "cricket"
        : "soccer"
    }`,
    Date: `${broken_link[3]}`,
    Timezone: "6",
  };

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `https://livescore6.p.rapidapi.com/matches/v2/${
        broken_link[2] == "allMatches" ? "list-by-date" : "list-live"
      }`,
      params: broken_link[2] == "list-live" ? linkParams1 : linkParams2,
      headers: {
        "X-RapidAPI-Key": "3fedd7fb33msh09e89077ac707dep1de161jsn41e80cedb73b",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setIsLoading(true);
        setData(response.data.Stages);
        setIsLoading(false);
        // console.log(response.data.Stages);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [location.pathname]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((league) => <SingleLeague league={league} />)
      )}
      {/* <Loader/> */}
    </div>
  );
};

export default AllFMatches;
