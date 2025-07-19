import React from 'react'

const UserProfile = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-3xl mx-auto mt-20 w-full">
             <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">First Name</p>
                    <p className="text-lg font-medium">Hello</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Last Name</p>
                    <p className="text-lg font-medium">World</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone Number</p>
                    <p className="text-lg font-medium">3747846473</p>
                  </div>
                 <div>
                    <p className='text-gray-600 text-sm'>Email</p>
                    <p className='text-lg font-medium'>ahdsg@21gmail.com</p>
                 </div>
                
                </div>
              </div>
            </div>
          </div>
  )
}

export default UserProfile
