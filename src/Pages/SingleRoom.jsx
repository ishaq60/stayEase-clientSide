import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleRoom = ({ room }) => {
  console.log(room);
  const { _id } = room;

  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:7000/rooms"${_id}`);
        setRoomDetails(data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    if (_id) getData();
  }, [_id]); 

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <Link to={`/room/${_id}`}>
        <figure>
          <img src={room.roomImages?.[0] || room.roomImages} alt={room.name} className="w-full h-48 object-cover rounded-lg" />
        </figure>
      </Link>
    </div>
  );
};

export default SingleRoom;
