import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';

function MobileHeroCarousel() {
    return (
        <div className='py-12 px-5 text-xl font-bold bg-white border-t-1 border-b-1'>
            <h2 className='pb-5'>Latest Updates</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                freeMode={true}
                className="mySwiper"
                modules={[FreeMode]}
            >
                <SwiperSlide style={{ width: '115px!important'}}><a href='#' className='text-base font-bold'>Editors Pick</a></SwiperSlide>
                <SwiperSlide style={{ width: '80px!important'}}><a href='#' className='text-base font-normal opacity-75'>Design</a></SwiperSlide>
                <SwiperSlide style={{ width: '135px!important'}}><a href='#' className='text-base font-normal opacity-75'>Development</a></SwiperSlide>
                <SwiperSlide style={{ width: '95px!important'}}><a href='#' className='text-base font-normal opacity-75'>Research</a></SwiperSlide>
                <SwiperSlide style={{ width: '90px!important'}}><a href='#' className='text-base font-normal opacity-75'>Content</a></SwiperSlide>
                <SwiperSlide style={{ width: '130px!important'}}><a href='#' className='text-base font-normal opacity-75'>Accessibility</a></SwiperSlide>
                <SwiperSlide style={{ width: '130px!important'}}><a href='#' className='text-base font-normal opacity-75'>Releases</a></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MobileHeroCarousel;
