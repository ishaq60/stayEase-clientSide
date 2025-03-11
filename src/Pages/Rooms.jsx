import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [itemPerPages, setItemPerPages] = useState(4);
  const [currentPages, setCurrentPages] = useState(1);
  const [count, setCount] = useState(0);
  const [filter,setfilter]=useState('')

 
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-rooms?pages=${currentPages}&size=${itemPerPages}&filter=${filter}&sort=${sortOrder}&search=${searchTerm}`);
        setRooms(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    getData();
  }, [currentPages, itemPerPages,filter,sortOrder]);

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/room-count?search=${searchTerm}`
        );
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    getCount();
  }, [searchTerm]);

  const numberOfPages = Math.ceil(count / itemPerPages);
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const handlePaginationButton = (value) => {
    setCurrentPages(value); // Set directly to avoid zero-based indexing issues
  };
  console.log(sortOrder);

  const handaleReset=()=>{
    setfilter('')
    setSortOrder('')
  }

  return (
    <div className="min-h-[calc(100vh-306px)]">
      <h1 className="font-yeseva mt-12 font-bold text-center text-3xl">
        Explore Our Hotel Rooms
      </h1>

      {/* Search & Filter Section */}
      <div className="flex font-yeseva container mx-w-7x mx-auto justify-between mt-6">
        {/* Sorting Dropdown */}
        <div>
          <select
            className="border p-4 rounded-md"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="asc">Low to High</option>
            <option value="dsc">High to Low</option>
          </select>
        </div>

        {/* Search Box */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex font-yeseva p-1 border rounded-lg">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none"
              type="text"
              placeholder="Search for a Room"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="px-4 py-3 text-sm bg-gray-700 rounded-md text-white hover:bg-gray-600">
              Search
            </button>
          </div>
        </form>

        {/* Reset Button */}
        <button
          className="btn font-yeseva"
          onClick={() => {
            setSearchTerm("");
            setSortOrder("");
          }}
        >
          Reset
        </button>
      </div>

      {/* Room Listings */}
      <div className="mt-24 max-w-7xl gap-y-4 mx-auto container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {rooms.map((room) => (
          <SingleRoom key={room._id} room={room} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <button
          className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={currentPages === 1}
          onClick={() => handlePaginationButton(currentPages - 1)}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`px-4 py-2 mx-1 rounded-md sm:inline ${
              currentPages === btnNum ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            }`}
          >
            {btnNum}
          </button>
        ))}

        <button
          className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={currentPages === numberOfPages}
          onClick={() => handlePaginationButton(currentPages + 1)}
        >
          <div className="flex items-center">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Rooms;
