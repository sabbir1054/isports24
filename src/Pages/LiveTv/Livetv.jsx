import React from 'react';
import NavigationBar from '../Shared/Navbar/NavigationBar';
import styles from "../NEWS/News.module.css"
const Livetv = () => {
    return (
      <div>
        <div className={styles.newsWrapper}>
          <NavigationBar />
          <hr className="text-light" />
          <h1 className="display-1 text-center">Page is under construction</h1>
        </div>
      </div>
    );
};

export default Livetv;