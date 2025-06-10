import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {
    
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    


  const handleChange = (e) =>{
     setUser({...user, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    if(user.name.length > 3 && user.email.length > 3 &&  user.username.length > 3 )
    {
    e.preventDefault()
    // console.log(user)
    await axios.post("http://localhost:8080/user", user)
    navigate("/")
    }
    else{
        alert("Length must be greater than 0")
    }

  }

  return (
    <>
       <div className="container w-[70%] m-auto  py-10 shadow-lg bg-[#7aff553b] rounded-lg flex flex-col gap-4">
        <h1 className='text-3xl font-bold text-center text-shadow-lg'>Register User</h1>
         <form action="" onSubmit={(e)=>handleSubmit(e)} className='container w-[80%] mx-auto flex flex-col gap-6 bg-white/70 px-4 py-2 rounded-lg shadow-lg lg:px-30'>
            <div className='flex flex-col gap-3 text-center'>
                <label htmlFor="" className='font-semibold text-lg'>Name</label>
                <input onChange={handleChange} type="text" name='name' placeholder='Enter name' className='border border-gray-400 px-3 py-1 rounded-lg  bg-white' />
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <label htmlFor="" className='font-semibold text-lg'>UserName</label>
                <input onChange={handleChange} type="text" name='username' placeholder='Enter username' className='border border-gray-400 px-3 py-1 rounded-lg bg-white' />
            </div>
            <div className='flex flex-col gap-3 text-center'>
                <label htmlFor="" className='font-semibold text-lg'>Email</label>
                <input onChange={handleChange} type="email" name='email' placeholder='Enter email' className='border border-gray-400 px-3 py-1 rounded-lg bg-white' />
            </div>
            <div className='flex justify-center gap-5'>
                <button type="submit" className='bg-blue-400 px-2 py-1 rounded-lg hover:bg-blue-600 shadow-lg font-semibold hover:translate-0.5 transition duration-300'>Submit</button>
                <Link className=' bg-red-400 shadow-lg hover:bg-red-600 px-2 py-1 rounded-lg font-semibold hover:translate-0.5 transition duration-300' to="/">Cancel</Link>
            </div>
         </form>
       </div>
       
    </>
  )
}

export default AddUser