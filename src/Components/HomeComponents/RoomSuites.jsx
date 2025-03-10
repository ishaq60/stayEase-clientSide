import React from 'react';import SliderBody2 from './SliderBody';
;
// import SliderBody2 from './SliderBody2';

const RoomSuites = () => {
    return (
        <div className= '   mt-24'>
            <div className=' gap-y-6 font-yeseva text-center'>
            <h1 className='text-2xl font-bold lg:text-4xl'>Room & Suites</h1>
            <p className='mt-4 text-gray-500 text-xl'>Discover luxury and comfort in our elegantly designed rooms and suites. <br />
             Enjoy modern amenities, stylish interiors, and breathtaking city views for a perfect stay.</p>
            </div>
        <div className=' h-[550px] lg:mx-w-7xl mx-auto  mt-32'>
    <SliderBody2/>
        </div>
        </div>
    );
};

export default RoomSuites;