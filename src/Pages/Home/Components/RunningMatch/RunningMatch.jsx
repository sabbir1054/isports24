import React from "react";
import MatchNavigation from "./MatchNavigation";
import styles from "./RunningMatch.module.css";
const RunningMatch = () => {
  return (
    <div className={styles.runningMatch_wrapper}>
      <MatchNavigation />
    </div>
  );
};

export default RunningMatch;
