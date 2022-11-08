import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../../News.module.css"
const CategoryWiseSingleCard = ({ article }) => {
     const dateTime = article.updated_at.split("T");
//   console.log(article.category.id+"-"+article.id);
  return (
    <Col>
      <NavLink
        to={`/news/category/${article.category.id + "-" + article.id}`}
        className="text-white text-decoration-none"
      >
        <div className={`card mb-3 ${styles.single_card_wrapper}`}>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                className="img-fluid rounded-start"
                src={`${article.image.data.urls.uploaded.original}`}
                alt=""
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>

                <p className="card-text">
                  <small className="text-muted">
                    <span className="me-2">Date: {dateTime[0]}</span> Time:
                    {dateTime[1].split("+")[0]}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </Col>
  );
};

export default CategoryWiseSingleCard;
