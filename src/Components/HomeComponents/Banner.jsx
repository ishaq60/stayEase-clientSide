import React from "react";


import { Link } from "react-router-dom";

const Banner = ({ banner, text }) => {
  return (
    <div className="relative w-full h-[720px] sm:h-[600px] md:h-[650px] lg:h-[720px] p-5">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />

      {/* Navbar */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
   
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-100px)] text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-yeseva text-white mb-4 leading-tight">
          Welcome To <br className="hidden sm:block" />
          Stayease Resort & Hotel
        </h1>
        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 px-2 sm:px-0">
          Experience Comfort, Luxury, and Unforgettable Stays
        </p>
        <Link to="/room" href="#" class="block px-5 py-2 text-xl font-yeseva font-medium 
        tracking-wider text-center text-white transition-colors duration-300 transform bg-slate-500 hover:bg-gray-700">Let Explore</Link>
      </div>
      <div className="absolute z-10 w-full flex justify-center px-4">
  <div className="w-full z-auto -mt-24 max-w-7xl mx-auto sm:w-auto">
  
  </div>
</div>


      {/* Booking Availability Section */}
    </div>
  );
};

export default Banner;
