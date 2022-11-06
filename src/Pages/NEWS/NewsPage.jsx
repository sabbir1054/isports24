import React from "react";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import styles from "./News.module.css"
const NewsPage = () => {
  return (
    <div className={styles.newsWrapper}>
      <NavigationBar />
      <hr className="text-light" />
      <h1 className="display-1 text-center">Page is under construction</h1>
      <img
        src="/assets/photos/construction.png"
        width={300}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default NewsPage;
