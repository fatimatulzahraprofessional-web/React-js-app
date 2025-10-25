import React, { useRef } from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

function Residencies() {
  const swiperRef = useRef(null);

  return (
    <section className="r-wrapper">
      <div className="innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <div className="r-swiper-container">
          {/* Now we pass the swiperRef to SliderButtons */}
          <SliderButtons swiperRef={swiperRef} />
          <Swiper
            {...sliderSettings}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Residencies;

// ✅ Works outside with proper access to Swiper instance
const SliderButtons = ({ swiperRef }) => {
  return (
    <div className="r-button">
      <button onClick={() => swiperRef.current?.slidePrev()}>&lt;</button>
      <button onClick={() => swiperRef.current?.slideNext()}>&gt;</button>
    </div>
  );
};
