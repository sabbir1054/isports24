import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api_key } from '../../../../Shared/apikey';

const AllTournaments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const broken_link = location.pathname.split("/");
  console.log(broken_link);
  const [data, setData] = useState([]);

  const linkParams1 = {
    Category: `${broken_link[1] == "football" ? "soccer" : "cricket"}`,
    Timezone: "6",
  };
  const linkParams2 = {
    Category: `${broken_link[1] == "football" ? "soccer" : "cricket"}`,
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
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    /*  axios
      .request(options)
      .then(function (response) {
        setIsLoading(true);
        setData(response.data.Stages);
        setIsLoading(false);
        console.log(response.data.Stages);
      })
      .catch(function (error) {
        console.error(error);
      }); */
    console.log(options);
  }, [location.pathname]);

  /*   data.map((single) => {
    console.log(single.Snm);
  });
 */
  return <div></div>;
};;

export default AllTournaments;