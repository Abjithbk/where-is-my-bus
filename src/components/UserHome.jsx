import React,{useState} from 'react'

const UserHome = () => {
  const [openMenu,setOpenMenu] = useState(null);
  return (
   <div className="min-h-screen bg-gray-100 p-4">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 onClick={() => {
          setOpenMenu(!openMenu)
        }} className="text-xl font-bold cursor-pointer">Where is My Bus 🚌</h1>
        {
          openMenu && (
          <div
        className={`absolute left-0 mt-40 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 origin-top ${
          openMenu ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="py-1">
          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Book Ticket
          </p>
          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Change Password
          </p>
          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Logout
          </p>
        </div>
      </div>
          )
        }
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Signup
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
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
            Near My Stop
          </button>
        </div>
      </div>

      {/* Table Placeholder (Bus List) */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-md text-left text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Bus Name</th>
              <th className="p-2">Arriving Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Bus 101</td>
              <td className="p-2">10:30 AM</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Bus 202</td>
              <td className="p-2">11:30 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserHome
