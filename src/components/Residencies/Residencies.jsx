import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Bets Choices</span>
          <span className="primaryText">Popular Resicencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <PropertyCard  card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()} >&gt;</button>
    </div>
  );
};
