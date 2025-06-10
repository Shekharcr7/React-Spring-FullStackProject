import React from 'react'
import { FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <>
   <footer className="mt-auto bg-[#000000df] text-white py-2 "> 
      <div className="container w-[75vw] mx-auto">
        <div className='text-center '>
          <div className="left text-xl font-bold">
            <a href="https://portfolio-phzg.vercel.app/" target='_blank'>Shekhar<span className='text-orange-500'>.</span></a>
          </div>
          <div className='text-xs font-semibold opacity-90'>boddapushekhar2004@gmail.com</div>
        </div>
        <hr className="my-2 border shadow shadow-white    border-white" /> 
        <div className='flex flex-col gap-2 text-sm font-semibold'>
            <div className='text-center text-xs'>&copy; Boddapu Chandra Shekhar. All rights are reserved. </div>
            <ul className='flex justify-center gap-10'>
                <li> <a href="https://www.linkedin.com/in/b-c-shekhar"> <FaLinkedin /> </a> </li>
                <li> <a href="https://github.com/Shekharcr7"><FaGithub /> </a></li>
                <li> <a href="https://x.com/Shekhar___CR7"><FaTwitter /> </a></li>
            </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer