import React from "react";
import Slider from "react-slick";
import Loader from "../../../Loader/Loader";
import SingleFeature from "./SingleFeature";
const FeaturedSlide = ({ allArticle }) => {
  /* fetch data */

  /* Slider button */
  const SampleNextArrow = () => {
    return <div style={{ display: "none" }} />;
  };

  const settings = {
    lazyLoad:true,
    autoplay: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-3 my-3">
      <h3 className="text-center">Top Stories</h3>
      {/* <Slider {...settings}>
        {allArticle.length ? (
          allArticle?.map((item) => <SingleFeature article={item} id={item.id } />)
        ) : (
          <Loader />
        )}
      </Slider> */}
    </div>
  );
};

export default FeaturedSlide;
