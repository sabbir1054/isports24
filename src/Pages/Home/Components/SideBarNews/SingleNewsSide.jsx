import React from "react";
import { Card } from "react-bootstrap";
import styles from "./SideBarNews.module.css";
const SingleNewsSide = ({ article }) => {
//   console.log(article);
  return (
    <div className="py-2">
      <Card className="bg-dark text-white">
        <Card.Img src={`${article.mainMedia.gallery.url}`} alt="Card image" />
        <Card.ImgOverlay className={styles.img_overlay}>
          <Card.Title className={styles.card_title}>{article.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default SingleNewsSide;
