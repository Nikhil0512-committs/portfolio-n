import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {useState, useEffect} from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
        
        // Scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = menuItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
            isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}>
            <div className="text-white py-5 flex justify-between items-center">
                <div className="text-lg font-semibold cursor-pointer">
                    <span className="text-[#8245ec]">&lt;</span>
                    <span className="text-white">Nikhil</span>
                    <span className="text-[#8245ec]">/</span>
                    <span className="text-white">Sharma</span>
                    <span className="text-[#8245ec]">&gt;</span>
                </div>

                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {menuItems.map((item) => (
                        <li key={item.id} className={`hover:text-[#8245ec] ${
                            activeSection === item.id ? "text-[#8245ec]" : ""
                        }`}>
                            <button 
                                className="cursor-pointer" 
                                onClick={() => handleMenuItemClick(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex gap-8 spacing-x-4">
                    <a 
                        href="https://github.com/Nikhil0512-committs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaGithub size={24}/>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/nikhil-sharma-6686a8336/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaLinkedin size={24}/>
                    </a>
                </div>
                {/* Mobile menu icons */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX 
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(false)} 
                        />
                    ) : (
                        <FiMenu 
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(true)} 
                        />
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li 
                                key={item.id} 
                                className={`cursor-pointer hover:text-[#8245ec] ${
                                    activeSection === item.id ? "text-[#8245ec]" : ""
                                }`}
                            >
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="space-x-4 flex">
                            <a 
                                href="https://github.com/Nikhil0512-committs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#8245ec]"
                            >
                                <FaGithub size={24}/>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/nikhil-sharma-6686a8336/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#8245ec]"
                            >
                                <FaLinkedin size={24}/>
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;