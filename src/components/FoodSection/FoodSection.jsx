import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../Container";

import { Grid, Navigation } from "swiper/modules";
import Form from "../Form/Form";

function FoodSection({title,data,setData}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + 1, data.length - 1)
    );
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleAddItem = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
  };
  return (
    <div className="relative mt-24">
      <div className="flex gap-2 my-6 justify-between items-center">
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="flex gap-2 items-center">
          <Form onAddItem={handleAddItem} />
          <FaArrowLeft className="text-stone-500" onClick={handlePrev} />
          <FaArrowRight className="text-stone-500" onClick={handleNext} />
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Grid, Navigation]}
        className="mySwiper"
        ref={swiperRef}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          639: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 5,
          },
          1700: {
            slidesPerView: 5,
          },
        }}
      >
        <div>
          {data.map((food, index) => (
            <SwiperSlide key={food.Id}>
              <div className=" rounded-2xl">
                <img
                  className="w-48 h-48 rounded-2xl"
                  src={food.ImageUrl}
                  alt=""
                />
                <h1 className=" mt-6 font-semibold text-stone-700">
                  {food.Name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default FoodSection;
