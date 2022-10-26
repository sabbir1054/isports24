import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Upcoming.module.css";
import UpComingSlider from "./UpComingSlider";
const UpComing = () => {
  return (
    <div className={`${styles.upcoming_wrapper}`}>
      <h3 className={`text-center py-3`}>Up Coming Match</h3>
      <div className={`${styles.UpComing_slider}`}>
        <Container>
          <UpComingSlider />
        </Container>
      </div>
    </div>
  );
};

export default UpComing;
