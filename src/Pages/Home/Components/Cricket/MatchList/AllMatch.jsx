import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const AllMatch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const options = {
          method: "GET",
          url: "https://livescore6.p.rapidapi.com/matches/v2/list-live",
          params: { Category: "cricket", Timezone: "6" },
          headers: {
            "X-RapidAPI-Key":
              "6410b85052msh745d33a84c4e1d1p16f09fjsn5999efab8140",
            "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
          },
        };

        axios
          .request(options)
            .then(function (response) {
              setData(response.data.Stages)
            console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
    },[])
    return (
      <div>
        {/* Turnament name */}
        {/* Turnament list */}
        {/* Tournament name */}
        {/* Tournament list */}
        {/* Tournament name  */}
        {/* Tournament list */}
        {data.map((n) => (
          <h3>{n.Snm}</h3>
          //   console.log(n)
        ))}
        ok
      </div>
    );
};

export default AllMatch;