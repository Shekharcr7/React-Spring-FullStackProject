import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className=' flex justify-around items-center py-2 px-1 bg-[#e9b5b5cd] shadow-md'>
        <div className="left text-2xl font-bold"><a href="https://portfolio-phzg.vercel.app/">Shekhar<span className='text-orange-500'>.</span> </a> </div>
        <div className="right ">
            <button className='bg-[#96e3db9f] px-6 cursor-pointer hover:bg-[#000000d6] hover:text-white rounded-xl py-1 shadow-md transition duration-200'>
              <Link className='font-semibold' to="/adduser">Add User</Link>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar