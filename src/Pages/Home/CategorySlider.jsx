import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";

import Slider1 from "../../assets/home/slide1.jpg";
import Slider2 from "../../assets/home/slide2.jpg";
import Slider3 from "../../assets/home/slide3.jpg";
import Slider4 from "../../assets/home/slide4.jpg";
import BgCard from "../Shared/BgCard";
import TestImg from "../../assets/home/chef-service.jpg";
import SectionTitle from "../Shared/SectionTitle";

const CategorySlider = () => {
  const Card = {
    img: TestImg,
    title: "BISTRO BOSS",
    desc: "Bistro Boss offers a unique dining experience with a variety of delicious dishes prepared with the freshest ingredients. Join us for a meal that delights your taste buds and provides a cozy ambiance.",
  };
  const header = {
    title: " ---From 11:00am to 10:00pm---",
    desc: "ORDER ONLINE",
  };

  return (
    <div className="my-4">
      <SectionTitle header={header} />
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
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
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
      <div className="mt-8">
        <BgCard Card={Card} />
      </div>
    </div>
  );
};

export default CategorySlider;
