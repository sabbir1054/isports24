import React from "react";
import NavigationBar from "../../../Shared/Navbar/NavigationBar";
import styles from "../../News.module.css";
const CategoryNewsDetails = () => {
  return (
    <div className={styles.category_news_details_wrapper}>
          <NavigationBar />
          <hr className="text-white"/>
    </div>
  );
};

export default CategoryNewsDetails;
