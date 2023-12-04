import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay } from 'swiper/modules';
const sponsorList = [
    {
    imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/06.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/01.png",
        },
        {
        imgUrl: "/src/assets/images/sponsor/02.png",
        },
        {
        imgUrl: "/src/assets/images/sponsor/03.png",
        },
        {
        imgUrl: "/src/assets/images/sponsor/04.png",
        },
        {
        imgUrl: "/src/assets/images/sponsor/05.png",
        },
    ];
function Sponsor() {
  return (
    <div className='sponsor-section section-bg'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='spnsor-slider'>
                <Swiper
                slidesPerView={5}
        spaceBetween={10}
        autoplay={{
            delay:2500,
            disableOnInteraction: false
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            sponsorList.map((item, index)=>

             <SwiperSlide key={index}><img src={item.imgUrl} alt="" /></SwiperSlide>



            )}
     
      </Swiper>
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sponsor