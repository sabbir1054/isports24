import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleLeague from "./SingleLeague";

const AllFMatches = ({ urlB }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /* const options = {
      method: "GET",
      url: `https://livescore6.p.rapidapi.com/matches/v2/${urlB}`,
      params: { Category: "soccer", Timezone: "6" },
      headers: {
        "X-RapidAPI-Key": "6410b85052msh745d33a84c4e1d1p16f09fjsn5999efab8140",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    }; */
      const options = {
        method: "GET",
        url: "https://livescore6.p.rapidapi.com/matches/v2/list-by-date",
        params: { Category: "soccer", Date: "20201028", Timezone: "6" },
        headers: {
          "X-RapidAPI-Key":
            "6410b85052msh745d33a84c4e1d1p16f09fjsn5999efab8140",
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      };


    axios
      .request(options)
      .then(function (response) {
        setData(response.data.Stages);
        console.log(response.data.Stages);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  /*   data.map((single) => {
    console.log(single.Snm);
  });
 */
  return (
    <div>
      {data.map((league) => (
        //   <h3>{league.Snm}</h3>
          <SingleLeague league={league} />
      ))}
    </div>
  );
};

export default AllFMatches;
