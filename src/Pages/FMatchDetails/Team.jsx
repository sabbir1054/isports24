import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Team = () => {
    const [team, setTean] = useState();
    const location = useLocation();
    const eid = location.pathname.split("=")[1].split("-")[0];
    const tabName = location.pathname.split("=")[1].split("-")[1];

    useEffect(() => {
      const options = {
        method: "GET",
        url: "https://livescore6.p.rapidapi.com/matches/v2/get-info",
        params: { Category: "soccer", Eid: eid },
        headers: {
          "X-RapidAPI-Key":
            "ffd9710441mshc4395b29aebda39p198de2jsnb5b40a63e86d",
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      };

      /* axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  }); */
    }, []);
    return (
        <div>
            Team
        </div>
    );
};

export default Team;