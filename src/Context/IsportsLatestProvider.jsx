import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const IsportsLatestNewsContext = createContext({});
const IsportsLatestProvider = ({ children }) => {
 const [iSports10, setisports10] = useState([]);

  useEffect(() => {
    const access_token = "b123e083993d4e5a0898908e27b0118df728793f";
  
    // axios
    //   .get("https://api.isports24.net/api/top_10", {
    //     headers: {
    //       Authorization: `Token ${access_token}`,
    //     },
    //   })
    //   .then((res) => {
    //     setisports10(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);
  return (
    <IsportsLatestNewsContext.Provider value={{ iSports10 }}>
      {children}
    </IsportsLatestNewsContext.Provider>
  );
};

export default IsportsLatestProvider;
