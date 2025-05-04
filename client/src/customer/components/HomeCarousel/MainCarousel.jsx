import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const items = mainCarouselData.map((item, index) => (
    <img
        key={index}
        src={item}
        role="presentation"
        alt={`Slide ${index + 1}`}
        className="cursor-pointer w-full object-cover"
    />
));

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        autoPlay
        infinite
        disableDotsControls={false}
        disableButtonsControls={true}
    />
);

export default MainCarousel;
