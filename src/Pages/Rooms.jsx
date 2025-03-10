import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleRoom from './SingleRoom';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios("http://localhost:7000/rooms");
            setRooms(data);  // Set data to state
        };
        getData();
    }, []);  // Empty dependency array to run this once on mount

    return (
        <div>
         <div className="mt-24 h-[1440px] max-w-[7xl] gap-y-4 mx-auto container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {rooms.map((room) => (
          <SingleRoom key={room.id} room={room} />
        ))}
        
      </div>
        </div>
    );
};

export default Rooms;