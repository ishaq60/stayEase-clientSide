import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";


// Import images
import image1 from "../../assets/bannerImage/0.1.jpg"
import image2 from "../../assets/bannerImage/1.jpg"
import image3 from "../../assets/bannerImage/3.jpg"
import Banner from "./Banner";


export default function Carousel() {

  return (
    <Swiper
    direction={'vertical'}
      spaceBetween={20}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true, // Improves mobile usability
      }}
      loop={true} // Ensures smooth looping
      modules={[Pagination, Autoplay]}
      className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[720px]"
    >
      <SwiperSlide>
        <Banner banner={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <Banner banner={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <Banner banner={image3} />
      </SwiperSlide>
    </Swiper>
  );
}
