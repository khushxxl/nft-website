import React from 'react'

const Navbar = () => {
  return (
    <div className="top-0 bg-[#f5f5f5] sticky">
      <div className="flex justify-evenly p-4 items-center">
        <p className="text-lg">Logo</p>
        <ul className="flex space-x-10 text-lg items-center">
          <li>
            <div className=" p-2 bg-blue-500 rounded-xl text-white">
              <p>Discover</p>
            </div>
          </li>
          <li>
            <p>Drop</p>
          </li>
          <li>
            <p>Categories</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Support</p>
          </li>
          <li>
            <p>FAQs</p>
          </li>
        </ul>
        <div className=" p-2 bg-blue-500 rounded-xl text-white">
          <p className="text-lg tracking-widest">Login</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
