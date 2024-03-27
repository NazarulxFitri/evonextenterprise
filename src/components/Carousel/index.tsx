import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

const Carousel: React.FC = () => {
  return (
    <Box>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/carousel-1.png" />
          <Typography variant="body1">Web Development</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/carousel-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/carousel-1.png" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
