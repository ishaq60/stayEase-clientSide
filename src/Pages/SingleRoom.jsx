import React from "react";
import { Link } from "react-router-dom";

const SingleRoom = ({ room }) => {
  const { _id, roomImages, name } = room;

  return (
    <div className="card bg-base-100 w-[400px] h-[350px] shadow-md overflow-hidden rounded-lg 
                    transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <Link to={`/room/${_id}`} className="block w-full h-full">
        <figure className="w-full h-full">
          <img
            src={roomImages?.[0] || roomImages}
            alt={name}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </figure>
      </Link>
    </div>
  );
};

export default SingleRoom;
