import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



const ViewUser = () => {

    const [user, setUser] = useState(
        {
            name : "",
            username: "",
            email:"",
        }
    )

    const {id} = useParams();

    useEffect(() => {
      loadUser()
    }, [])
    

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
  return (
    <>
      <div className="container md:w-[50vw] w-max mx-auto my-auto bg-[#00bbffa2] rounded-2xl md:p-10 px-5 py-3.5 shadow-xl mt-10  flex flex-col md:gap-3 gap-2 items-center ">
        <h1 className='text-2xl font-bold text-center '>User details</h1>
        <ul className='text-lg  bg-[#ffffffc3] p-4 rounded-2xl flex flex-col gap-2 shadow-lg  md:w-full w-max '>
            <li className='flex gap-1' >
                <h1 className='font-semibold'>User Id :</h1>
                <p>{user.id}</p>
            </li>
            <li className='flex gap-1' >
                <h1 className='font-semibold'>Name :</h1>
                <p>{user.name}</p>
            </li>
            <li className='flex gap-1' >
                <h1 className='font-semibold'>UserName :</h1>
                <p>{user.username}</p>
            </li>
            <li className='flex gap-1' >
                <h1 className='font-semibold'>Email :</h1>
                <p>{user.email}</p>
            </li>
        </ul>
        <div className='flex justify-center'>
        <Link className='bg-[black] text-white hover:translate-y-1 shadow-md font-semibold md:p-2 p-1 px-2 mt-1 mb-2 rounded-lg transition duration-100' to='/'>Back to home</Link>
        </div>
      </div>
    </>
  )
}

export default ViewUser