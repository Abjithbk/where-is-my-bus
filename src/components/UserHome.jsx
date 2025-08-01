import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {toast,ToastContainer} from 'react-toastify';
const UserHome = () => {
  const [openMenu, setOpenMenu] = useState(null);
  // const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="text-xl font-bold cursor-pointer"
        >
          Where is My Bus 🚌
        </h1>
   
        {openMenu && (
          <div
            className={`absolute left-0 mt-40 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 origin-top ${
              openMenu
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="py-1">
              <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Change Password
              </p>
              <p onClick={() => {
                navigate("/Profile")
              }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
               Profile
              </p>
              <p onClick={() => {
                navigate("/Bookings");
              }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
               Bookings
              </p>
              <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Logout
              </p>
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => {
              navigate("/Signup");
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Signup
          </button>
          <button
            onClick={() => {
              navigate("/Login");
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>

      {/* Source to Destination Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Source"
            className="flex-1 p-3 border border-gray-300 rounded-md w-full"
          />
          <span className="text-gray-500 font-medium">➝</span>
          <input
            type="text"
            placeholder="Destination"
            className="flex-1 p-3 border border-gray-300 rounded-md w-full"
          />
          <button className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 w-full sm:w-auto">
            Search
          </button>

          <button className="bg-green-600 text-white px-5 py-3 rounded-md shadow hover:bg-green-700 transition">
            Bus stops near me
          </button>
          <label className="flex items-center gap-3 text-sm mt-2 sm:mt-0">
            <span>Show bus for next 1 hr arrivals</span>
            <div className="relative">
              <input type="checkbox" className="accent-blue-600" />
              {/* <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner transition-all duration-300 ease-in-out peer-checked:bg-blue-600"></div>
            <div className="absolute left-0 top-0 w-5 h-5 bg-white border rounded-full shadow transform transition-transform duration-300 ease-in-out peer-checked:translate-x-full"></div> */}
            </div>
          </label>
        </div>
      </div>

      {/* Cards (Bus List) */}
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  {/* Card 1 */}
  <div
    onClick={() => navigate("/TicketBooking")}
    className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
  >
    <h3 className="text-lg font-semibold text-blue-700">🚌 Bus 101 <span className="text-gray-50">♿</span></h3>
    <p className="text-gray-700 mt-1">
      <span className="font-medium text-gray-800">From:</span> Chengannur
    </p>
    <p className="text-gray-700">
      <span className="font-medium text-gray-800">To:</span> Mavelikara
    </p>
    <p className="text-gray-600 mt-2">
      Arriving Time: <span className="font-medium">10:30 AM</span>
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-blue-700">🚌 Bus 202</h3>
    <p className="text-gray-700 mt-1">
      <span className="font-medium text-gray-800">From:</span> Mavelikara
    </p>
    <p className="text-gray-700">
      <span className="font-medium text-gray-800">To:</span> Kollakadavu
    </p>
    <p className="text-gray-600 mt-2">
      Arriving Time: <span className="font-medium">11:30 AM</span>
    </p>
  </div>
</div>

    </div>
  );
};

export default UserHome;
