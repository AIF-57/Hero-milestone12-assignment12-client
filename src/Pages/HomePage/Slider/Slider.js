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


import sliderImg from '../../../utilities/images/sliderImg.jpg'
import sliderImg2 from '../../../utilities/images/sliderImg_2.jpg'
import sliderImg3 from '../../../utilities/images/sliderImg_3.jpg'

const Slider = () => {
    return (
      <div className='h-[30vh] lg:h-[90vh]'>
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sliderContainer w-full h-full">
              <div className="sliderContents h-full text-3xl lg:text-7xl font-bold">
                <div className="imgArea h-full w-full relative">
                  <img src={sliderImg3} alt="" />
                    <div className="title absolute w-1/2 top-[20%] left-[5%] text-left">
                      <p className='text-base-100'>BOOST YOUR</p>
                      <p className='text-neutral'>RIDE</p>    
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContainer w-full h-full relative">
              <div className="sliderContents h-full text-3xl lg:text-7xl font-bold">
                <div className="imgArea h-full w-full">
                  <img src={sliderImg} alt="" />
                    <div className="title absolute left-[25%] top-[30%] lg:top-[50%] w-1/2">
                      <p className='text-base-100'>GO ALL WAYS</p>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="sliderContainer w-full h-full">
            <div className="sliderContents h-full text-3xl lg:text-7xl font-bold">
              <div className="imgArea h-full w-full relative">
                  <img src={sliderImg2} alt="" />
                  <div className="title absolute left-[25%] top-[30%] lg:[40%] w-1/2 text-base-100">
                    <p>THIS SHIFTS</p>
                    <p className='my-2'>EVERYTHING</p>  
                  </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        </Swiper>
      </div>
    );
};

export default Slider;