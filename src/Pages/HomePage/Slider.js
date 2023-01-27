import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./slider.css";

// import required modules
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";


import sliderImg from '../../utilities/images/sliderImg.jpg'
import sliderImg2 from '../../utilities/images/sliderImg_2.jpg'
import sliderImg3 from '../../utilities/images/sliderImg_3.jpg'

const Slider = () => {
    return (
      <div className='h-[40vh] lg:h-[80vh]'>
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sliderContainer w-full h-full">
              <div className="contents text-3xl lg:text-5xl font-bold">
                <div className="imgArea relative h-full">
                  <img src={sliderImg3} alt="" />
                </div>
                <div className="title absolute top-[-40%] left-[5%] lg:top-[10%] lg:left-[2%]">
                  <p className='text-base-100 mt-32 ml-5'>BOOST YOUR</p>
                  <p className='text-neutral'>RIDE</p>    
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContainer w-full h-full">
              <div className="contents text-3xl font-bold lg:text-7xl text-base-100">
                <div className="imgArea relative h-full">
                  <img src={sliderImg} alt="" />
                </div>
                <div className="title absolute top-[45%] left-[25%] lg:top-[50%] lg:left-[30%] ">
                <p>GO ALL WAYS</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="sliderContainer w-full h-full">
            <div className="contents text-3xl font-bold lg:text-7xl text-base-100">
              <div className="imgArea relative h-full">
                <img src={sliderImg2} alt="" />
              </div>
              <div className="title absolute top-[40%] left-[25%] lg:top-[40%] lg:left-[30%] ">
                <p>THIS SHIFTS</p>
                <p className='my-2'>EVERYTHING</p>  
              </div>
            </div>
          </div>
        </SwiperSlide>

        </Swiper>
      </div>
    );
};

export default Slider;