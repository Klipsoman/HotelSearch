import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import "swiper/swiper.scss";

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={3.2}>
        <SwiperSlide>
          <img className="carousel__img" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousel__img" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="carousel__img" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="carousel__img" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="carousel__img" src={image2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
