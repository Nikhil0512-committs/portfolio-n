import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <h3 className="text-[#8245ec] text-center text-2xl font-bond hover:animate-bounce">
            Nikhil Sharma
        </h3>
        <div className="flex justify-center items-center gap-6">
            <a 
            href="https://github.com/Nikhil0512-committs"
            target="_blank"
            className='text-gray-300 hover:text-[#8245ec]'
            >
                <FaGithub size={24} />
            </a>
            <a 
            href="https://www.linkedin.com/in/nikhil-sharma-6686a8336/"
            target="_blank"
            className='text-gray-300 hover:text-[#8245ec]'
            >
                <FaLinkedin size={24} />
            </a>
        </div>
        <p className="text-gray-300 text-center">
            © 2025 Nikhil Sharma. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer
