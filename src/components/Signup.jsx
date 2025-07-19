import React from 'react'

const Signup = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6">
           
            {/* <div className="flex items-center justify-center gap-2 text-indigo-600 font-medium">
              <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Creating account...</span>
            </div> */}
          
            <div>
              <label htmlFor="fname" className="block text-sm/6 font-medium text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  required
                  autoComplete="fname"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lname" className="block text-sm/6 font-medium text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  required
                  autoComplete="lname"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="age"
                  required
                  autoComplete="age"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="pno" className="block text-sm/6 font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="pno"
                  required
                  autoComplete="pno"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                 
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  autoComplete="confirm-password"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label  className="block text-sm/6 font-medium text-gray-900">
                Select Role :
              </label>
             
                <label className='mr-4'>
                  <input
                  id="user"
                  name="profile-type"
                  type="radio"
                  required
                  value="user"
                /> User
                </label>
                <label className='mr-4'>
                  <input
                  id="staff"
                  name="profile-type"
                  type="radio"
                  required
                  value="staff"
                   
                /> Staff
                </label>
                <label className='mr-4'>
                  <input
                  id="admin"
                  name="profile-type"
                  type="radio"
                  required
                  value="admin"
                  
                  
                /> Admin
                </label>
                
           
            </div>
            <div>
              <button
                type="submit"
                 className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm "
              >
              Signup
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{' '}
            <span  className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                 Sign in
            </span>
          </p>
        </div>
      </div>
  )
}

export default Signup
