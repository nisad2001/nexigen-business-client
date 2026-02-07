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
    <div className="h-[140px] py-[52px] max-w-[1169px] w-full mx-auto px-4 lg:px-0">
      <Swiper
        loop={true}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {brandsLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`Brand ${index}`}
              className="w-full max-w-[120px] object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
