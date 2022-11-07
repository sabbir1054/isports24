import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "../../News.module.css"
const SingleFeature = ({article}) => {
     const newUrl = article.url.split("/")[4];
    return (
      <div className="p-2">
        <NavLink to={`/news/details/${newUrl}`}>
          <Card className="bg-dark text-white">
            <Card.Img
              src={`${article.mainMedia.gallery.url}`}
              alt="Card image"
            />
            <Card.ImgOverlay className={styles.img_overlay}>
              <Card.Title className={styles.card_title}>
                {article.title}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </NavLink>
      </div>
    );
};

export default SingleFeature;