import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
    const room=useLoaderData()
    console.log(room);
    return (
        <div>
            Room Details of  {room._id}
        </div>
    );
};

export default RoomDetails;