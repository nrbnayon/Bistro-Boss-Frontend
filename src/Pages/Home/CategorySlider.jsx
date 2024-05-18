import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";

import Slider1 from "../../assets/home/slide1.jpg";
import Slider2 from "../../assets/home/slide2.jpg";
import Slider3 from "../../assets/home/slide3.jpg";
import Slider4 from "../../assets/home/slide4.jpg";

const CategorySlider = () => {
  return (
    <div className="my-4">
      <div className="text-center my-4 bg-slate-100 p-5 rounded-lg shadow-md">
        <p className="text-lg text-[#D99904] font-semibold">
          ---From 11:00am to 10:00pm---
        </p>
        <h3 className="text-3xl mt-3 text-[#151515] font-bold">ORDER ONLINE</h3>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src={Slider1}
            className="w-full h-auto rounded-lg shadow-md"
            alt="Slide 1"
          />
          <h3 className="text-3xl bottom-4 bg-gradient-to-r from-black to-transparent bg-opacity-75 w-full font-bold absolute text-center text-white py-2">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={Slider2}
            className="w-full h-auto rounded-lg shadow-md"
            alt="Slide 2"
          />
          <h3 className="text-3xl bottom-4 bg-gradient-to-r from-black to-transparent bg-opacity-75 w-full font-bold absolute text-center text-white py-2">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={Slider3}
            className="w-full h-auto rounded-lg shadow-md"
            alt="Slide 3"
          />
          <h3 className="text-3xl bottom-4 bg-gradient-to-r from-black to-transparent bg-opacity-75 w-full font-bold absolute text-center text-white py-2">
            SOUPS
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={Slider4}
            className="w-full h-auto rounded-lg shadow-md"
            alt="Slide 4"
          />
          <h3 className="text-3xl bottom-4 bg-gradient-to-r from-black to-transparent bg-opacity-75 w-full font-bold absolute text-center text-white py-2">
            DESSERTS
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
