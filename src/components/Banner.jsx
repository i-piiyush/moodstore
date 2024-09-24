
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[40%] md:h-[50%] sm:h-[60%]"
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          
          <div className='h-[80%] w-full bg-[#074740] rounded-md overflow-hidden'>
            <div className='w-full h-full overflow-hidden relative'>
              <div className='absolute px-4 flex flex-col items-start justify-center h-[90%] w-full'>
                <h1 className='text-[#F0E9E7] font-bold uppercase leading-none'>New Collection</h1>
              <h1 className='text-[#F0E9E7] font-bold uppercase'>flat 20% off</h1>
              <button className='bg-[#F0E9E7] text-[#074740] px-4 py-2 font-semibold mt-4'>Shop Now</button>
              </div>
              


              <img src="src\assets\bannerShoes.png" alt="nike_shoes" className='h-full absolute -right-2'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner