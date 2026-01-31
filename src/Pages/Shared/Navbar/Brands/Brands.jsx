import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../../assets/amazon.png'
import bitcoin from '../../../../assets/bitcoin.png'
import hub from '../../../../assets/hub.png'
import stripe from '../../../../assets/stripe.png'
import slack from '../../../../assets/slack.png'
import { Autoplay } from 'swiper/modules';

const brandsLogos = [amazon, bitcoin, hub,stripe, slack ]

const Brands = () => {
    return (
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
    );
};

export default Brands;