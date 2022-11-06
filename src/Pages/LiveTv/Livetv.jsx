import React from "react";
import styles from "../NEWS/News.module.css";
import NavigationBar from "../Shared/Navbar/NavigationBar";
const Livetv = () => {
  return (
    <div>
      <div className={styles.newsWrapper}>
        <NavigationBar />
        <hr className="text-light" />
        <h1 className="display-1 text-center">Page is under construction</h1>
        <img src="/assets/photos/construction.png" width={300} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Livetv;
