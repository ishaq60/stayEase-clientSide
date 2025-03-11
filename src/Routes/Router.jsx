import { createBrowserRouter } from "react-router-dom"; // ✅ Removed RouterProvider import


import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home.";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import ContactUs from "../Pages/ContactUs";
import About from "../Pages/About";
import RoomDetails from "../Components/RoomDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
    
     }
     ,



      { path: "/rooms", element: <Rooms /> },
      { path: "/my-bookings", element: <MyBooking /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <About /> },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
        loader: ({ params }) => fetch(`http://localhost:7001/room/${params.id}`)
      }
      
      
    ],
  },
]);

export default router;
