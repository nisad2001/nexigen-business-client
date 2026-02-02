import React from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const brandsLogos = [
  '/assets/images/amazon.png',
  '/assets/images/bitcoin.png',
  '/assets/images/hub.png',
  '/assets/images/stripe.png',
  '/assets/images/slack.png',
];


const Brands = () => {
    return (
      <div className='h-[140px] py-[52px]'>
          <Swiper
          loop ={true}
           slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay]}
             autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
       >
        {
            brandsLogos.map((logo, index) =><SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide> )
        }
            
           
       </Swiper>
       </div>
    );
};

export default Brands;