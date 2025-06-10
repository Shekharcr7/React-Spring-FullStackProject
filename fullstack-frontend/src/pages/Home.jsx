import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        loadUsers();
    }, []);

    const { id } = useParams()

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/users");
            setUsers(result.data);  
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteUser = async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    return (
        <>
        <div className="container mx-auto px-4 py-10 lg:px-10 bg-gradient-to-br">
        <h1 className='font-bold text-xl underline py-2'>Users List</h1>
            <div className="overflow-x-auto">
                {users.length > 0 ?
                <table className="sm:min-w-full bg-white border border-gray-200 container mx-auto">
                    <thead>
                        <tr className="bg-black/20  *:border-r shadow-md *:text-start">
                            <th className='py-2 px-4 border-b border-gray-200 '>S.no</th>
                            <th className="py-2 px-4 border-b border-gray-200 ">Name</th>
                            <th className="py-2 px-4 border-b border-gray-200 ">Username</th>
                            <th className="py-2 px-4 border-b border-gray-200 ">Email</th>
                            <th className="py-2  px-4 border-b border-gray-200 ">Action</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className=' *:border-r'>
                                <th className='py-2 px-4 border-b border-gray-200 text-start'>{index+1}</th>
                                <td className="py-2 px-4 border-b border-gray-200 whitespace-nowrap">{user.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200 whitespace-nowrap">{user.username}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                                <td className='py-2 px-4 border-b border-gray-200 *:cursor-pointer  flex justify-around gap-2.5  '>
                                    <Link className='bg-[#3fff0591] text-shadow-black font-semibold text-center shadow-md border-black rounded-xl px-3 hover:translate-0.5 transition'
                                    to={`/viewuser/${user.id}`}
                                    >View</Link>
                                    <Link className='bg-blue-400 font-semibold text-center shadow-md border-blue-500 rounded-xl px-3  hover:translate-0.5 transition' 
                                    to={`/edituser/${user.id}`}
                                    >Edit</Link>
                                    <button className='bg-[#ffa600dd] font-semibold rounded-xl px-3 hover:translate-0.5 transition shadow-md'
                                    onClick={()=>deleteUser(user.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <div> No Users are available, add someone new.❤️😉</div>
}
            </div>
        </div>
        </>
    );
};

export default Home;