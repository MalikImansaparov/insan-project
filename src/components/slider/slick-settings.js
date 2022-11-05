import React from "react";
import left from "../../assets/image/main/left.png";
import right from "../../assets/image/main/rigth.png";


const SlickArrowLeft = ({currentSlide, slideCount, ...props}) => (
    <img
        src={left}
        alt="prevArrow"
        {...props}
        className="arrow-left"
    />
);

const SlickArrowRight = ({currentSlide, slideCount,...props}) => (
    <img
        src={right}
        alt="nextArrow"
        {...props}
        className="arrow-right"
    />
);


export const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 0.685,
    initialSlide: 0,
    slidesToShow: 2,
    swipe: true,
    dots: false,
    dotsClass: "my-dots",
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
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
                arrows: true
            }
        },
    ]
};
