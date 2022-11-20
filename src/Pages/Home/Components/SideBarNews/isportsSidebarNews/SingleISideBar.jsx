import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "../SideBarNews.module.css"
const SingleISideBar = ({data}) => {
    console.log(data);
    return (
      <div className="py-2">
        <NavLink
          to={`/isportsnews/details/${data.id}`}>
          <Card className="bg-dark text-white">
            <Card.Img
              src={`${data.image}`}
              alt="Card image"
              width={300}
            />
            <Card.ImgOverlay className={styles.img_overlay}>
              <Card.Title className={styles.card_title}>
                {data.title}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </NavLink>
      </div>
    );
};

export default SingleISideBar;