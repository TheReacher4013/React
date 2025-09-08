import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules'; 

const SwiperComponent = () => {
  return (
    <section className='py-24 px-3f '>
        <div>
            <h2>Testimonials</h2>
        </div>
        <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={30} 
        slidesPerView={3} 
        loop ={true}
        autoFocused={true}
        autoplay={{ delay: 3000,
        disableOnInteraction: false
         }}
        grabCursor={true}
        navigation={true} 
        centeredSlides={true} 
        allowSlideNext
        lazyPreloadPrevNext={true}
        pagination={{ type: "progressbar" }}
        className='min-h-{600px} my-8'

         >
            <SwiperSlide>
            <div className='border-1 border-black min-h-[400px]'>Testimonials 1</div>
              </SwiperSlide>
            <SwiperSlide>
            <div className='border-1 border-black min-h-[400px]'>Testimonials 2</div>
              </SwiperSlide>
            <SwiperSlide>
            <div className='border-1 border-black min-h-[400px]'>Testimonials 3</div>
              </SwiperSlide>
            <SwiperSlide>
            <div className='border-1 border-black min-h-[400px]'>Testimonials 4</div>
              </SwiperSlide>
            <SwiperSlide>
            <div className='border-1 border-black min-h-[400px]'>Testimonials 5</div>
              </SwiperSlide>
            <SwiperSlide>
            <div className='border-1 border-black min-h-[400px]'>Testimonials 6</div>
              </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default SwiperComponent;