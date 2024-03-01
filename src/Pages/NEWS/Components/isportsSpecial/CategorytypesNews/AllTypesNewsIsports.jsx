import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import IsportsSingleNews from './IsportsSingleNews';

const AllTypesNewsIsports = () => {
     const [iSports10, setisports10] = useState([]);

     useEffect(() => {
       const access_token = "b123e083993d4e5a0898908e27b0118df728793f";

       axios
         .get("https://api.isports24.net/api/all_content_api/", {
           headers: {
             Authorization: `Token ${access_token}`,
           },
         })
         .then((res) => {
           setisports10(res.data);
           console.log(res.data);
         })
         .catch((error) => {
           console.error(error);
         });
     }, []);
    console.log(iSports10);
    return (
      <div>
        <Row xs={1} md={2} className="g-2">
         {/*  {iSports10?.map((item) => (
            <IsportsSingleNews data={item} />
          ))} */}
        </Row>
      </div>
    );
};

export default AllTypesNewsIsports;