import React from "react";
import left from "../../assets/image/main/left.png";
import right from "../../assets/image/main/rigth.png";


const ArrowLeft = ({currentSlide, slideCount, ...props}) => (
    <img
        src={left}
        alt="prevArrow"
        {...props}
        className="arrow-left"
    />
);

const ArrowRight = ({currentSlide, slideCount,...props}) => (
    <img
        src={right}
        alt="nextArrow"
        {...props}
        className="arrow-right"
    />
);


export const settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 1,
  swipe: true,
  dots: false,
  arrows: true,
  dotsClass: 'my-dots',
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
  responsive: [
    // {
    //     breakpoint: 1300,
    //     settings: {
    //         slidesToShow: 3,
    //     }
    // },
    // {
    //     breakpoint: 1340,
    //     settings: {
    //         slidesToShow: 3,
    //     }
    // },
    // {
    //     breakpoint: 1240,
    //     settings: {
    //         slidesToShow: 3,
    //     }
    // },
    // {
    //     breakpoint: 750,
    //     settings: {
    //         slidesToShow: 2,
    //     }
    // },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};
