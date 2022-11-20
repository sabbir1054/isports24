import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleIsportsCard from './SingleIsportsCard';

const IsportsFootballnews = () => {
      const [iSports10, setisports10] = useState([]);

      useEffect(() => {
        const access_token = "b123e083993d4e5a0898908e27b0118df728793f";

        axios
          .get("https://api.isports24.net/api/all_content_api", {
            headers: {
              Authorization: `Token ${access_token}`,
            },
          })
          .then((res) => {
            const getFData = res.data.filter((item) => item.category == 2);
            setisports10(getFData);
            console.log(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    console.log(iSports10);
    return (
      <div>
        {iSports10.length ? (
          <Row xs={1} md={2} className="g-2">
            {iSports10?.map((item) => (
              <SingleIsportsCard data={item} />
            ))}
          </Row>
        ) : (
          ""
        )}
      </div>
    );
};

export default IsportsFootballnews;