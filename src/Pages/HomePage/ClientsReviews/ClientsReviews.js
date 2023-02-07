import React from 'react';
import Slider from "react-slick";





import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientsReviews = () => {
   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
  return (
    <div className='bg-red-100 py-20'>

      <div className='max-w-[1280px] mx-auto'>
        <div className="sectionHeading text-left text-accent">
          <div className="subHeading relative mb-5">
          <p className='font-semibold tracking-widest'>Feedback</p>
          <div className='absolute w-14 h-[2px] bg-primary top-8'></div>
          </div>
          <p className='text-5xl font-bold'>Testimonials</p>
        </div>
        <Slider {...settings} className='my-20'>
          <div className='border'>
            <h3>1</h3>
          </div>
          <div className='border'>
            <h3>2</h3>
          </div>
          <div className='border'>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>  
      
    </div>
      );
};

export default ClientsReviews;