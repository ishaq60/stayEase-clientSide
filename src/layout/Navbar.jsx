import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = async () => {
        console.log("ddddd");
        try {
          await logOut();
          toast.success("Logged out successfully!");
          navigate("/");
        } catch (error) {
          toast.error("Logout failed. Try again.");
        }
      };
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className=" font-yeseva flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <Link to="/" className="font-yeseva text-3xl  font-bold">stayEase</Link>
        </div>
      </div>
      <div className="flex-none flex-wrap">
        <ul className="menu  menu-horizontal px-2">
        <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/rooms">Room</Link>
    </li>
    <li>
      <Link to="/my-bookings">My Bookings</Link>
    </li>
    <li>
      <Link to="/about-us">About Us</Link>
    </li>
    <li>
      <Link to="/contact-us">Contact Us</Link>
    </li>
  {
    ! user &&  <li>
    <Link className="btn btn-primary" to="/login">Login</Link>
  </li>
  }

        </ul>

       {
        user &&
        <div className="dropdown dropdown-end z-50">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full" title="">
            <img
              referrerPolicy="no-referrer"
              alt="User Profile Photo"
              src=""
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
     <li>    <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/rooms">Room</Link>
    </li>
    <li>
      <Link to="/my-bookings">My Bookings</Link>
    </li>
    <li>
      <Link to="/about-us">About Us</Link>
    </li>
    <li>
      <Link to="/contact-us">Contact Us</Link>
    </li>
          <li className="mt-2">
            <button onClick={handleLogout} className="bg-red-200 block btn btn-secondly w-full text-center">Logout</button>
          </li>
        </ul>
      </div>
       }
      </div>
    </div>
  );
};

export default Navbar;
