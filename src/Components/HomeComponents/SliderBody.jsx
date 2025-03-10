import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SliderBody2() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios("http://localhost:7000/rooms");
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    getData();
  }, []);

  return (
    <Swiper
      slidesPerView={4} 
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      {rooms.map((room) => (
        <SwiperSlide key={room._id}>
          <Link to={`/room/${room._id}`}>  {/* ✅ Corrected _id reference */}
            <div className="p-4 bg-gray-100 w-[450px] rounded-lg shadow-md">
              <img
                src={Array.isArray(room.roomImages) ? room.roomImages[0] : room.roomImages}
                alt={room.name}
                className="h-[350px] w-[450px] object-cover rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
