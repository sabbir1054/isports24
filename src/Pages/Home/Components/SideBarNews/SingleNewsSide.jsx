import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./SideBarNews.module.css";
const SingleNewsSide = ({ article }) => {
  const newUrl = article?.url?.split("/")[4];
console.log(article);
  return (
    <div className="py-2">
      <NavLink to={`/news/details/${newUrl}`}>
        <Card className="bg-dark text-white">
          <Card.Img src={`${article?.mainMedia[0]?.gallery?.url}`} alt="Card image" />
          <Card.ImgOverlay className={styles.img_overlay}>
            <Card.Text className={styles.card_title}>{article.title}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </NavLink>
    </div>
  );
};

export default SingleNewsSide;
