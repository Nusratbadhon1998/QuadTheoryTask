import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../Container";

// Enable necessary Swiper modules
import { Grid, Pagination, Navigation } from "swiper/modules";
import Form from "../Form/Form";

function Popular() {
  const [popularData, setPopularData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      setPopularData(data.Items.filter(food=>food.IsPopular===true));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + 1, popularData.length - 1)
    );
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleAddItem = (newItem) => {
    setPopularData((prevData) => [...prevData, newItem]);
  };

  return (
    <Container>
      <div className="relative">
        <div className="flex gap-2 my-6 justify-between items-center">
          <h1>Popular</h1>
          <div className="flex gap-2 items-center">
            <Form onAddItem={handleAddItem} />
            <FaArrowLeft onClick={handlePrev} />
            <FaArrowRight onClick={handleNext} />
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
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Navigation]}
          className="mySwiper"
          ref={swiperRef}
        >
          {popularData.map((data, index) => (
            <SwiperSlide key={data.Id}>
              <div className="w-48 h-48 bg-white rounded-2xl">
                <img
                  className="w-full h-full rounded-2xl"
                  src={data.ImageUrl}
                  alt=""
                />
                <h1 className="text-black">{data.Name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default Popular;
