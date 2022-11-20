import React from "react";
import { Row } from "react-bootstrap";
import AllTypesNewsIsports from "../isportsSpecial/CategorytypesNews/AllTypesNewsIsports";
import SinglenewsCard from "./SinglenewsCard";

const AllCategory = ({ news }) => {
  /* news?.map((item) => {
    item.articles?.map((i) => console.log(i));
  }); */
  return (
    <div>
      <AllTypesNewsIsports/>
      <Row xs={1} md={2} className="g-2">
        {news?.map((item) =>
            item.articles?.map((article) => <SinglenewsCard article={article} key={article.id } />)
        )}
      </Row>
    </div>
  );
};

export default AllCategory;
