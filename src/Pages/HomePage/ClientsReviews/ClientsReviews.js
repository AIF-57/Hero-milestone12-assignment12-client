import React from 'react';
import Slider from "react-slick";





import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from 'react-query';

const ClientsReviews = () => {
  const { isLoading, error, data } = useQuery('testimonials', () =>
    fetch('http://localhost:5000/testimonials').then(res =>
      res.json()
    )
  )

  // if (isLoading) return <p>Loading...</p>

  // if (error) return 'An error has occurred: ' + error.message

  if(data){
  }

  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500
    };

  return (
    <div className='bg-red-100 py-10 md:py-20 px-10 xl:px-5'>

      <div className='max-w-[1280px] mx-auto'>
        <div className="sectionHeading text-left text-accent">
          <div className="subHeading relative mb-5">
          <p className='font-semibold tracking-widest'>Feedback</p>
          <div className='absolute w-14 h-[2px] bg-primary top-8'></div>
          </div>
          <p className='text-3xl md:text-5xl font-bold'>Testimonials</p>
        </div>
        <Slider {...settings} className='my-20'>
          {
            data?.map(testimonial=>
              <div className='rounded-sm text-center border-black'
              key={testimonial._id}>
                <div className='w-2/3 mx-auto bg-red-200'>
                  <h3 className='mb-10 p-5 text-neutral text-lg font-semibold'>{testimonial.comment}</h3>
                </div>
                <section className=' flex justify-center'>
                  <div>
                    <img src={testimonial.Image} alt="" width="50" className='mx-auto'/>
                  </div>
                  <div className='flex flex-col text-left px-5 justify-center'>
                    <span className='text-secondary'>{testimonial.commenter}</span>
                    <span className='text-sm'>{testimonial.biz}</span>
                  </div>
                </section>
              </div>
            )
          }
        </Slider>
      </div>  
      
    </div>
      );
};

export default ClientsReviews;