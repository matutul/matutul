import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleBarButton = () => setMobileMenu(!mobileMenu);
    return (
        <div className="fixed w-full h-auto py-5 flex justify-between items-center px-3 md:px-[10%] bg-[#191A19] text-[#D8E9A8]">
            <div className="logo">
                <h1 className="text-2xl sm:text-3xl cursor-pointer">Md Ashrafujjaman Tutul</h1>
            </div>
            <ul className="hidden lg:flex">
                <li>
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} className="cursor-pointer">Work</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
                </li>
            </ul>
            <div onClick={handleBarButton} className="text-3xl flex lg:hidden z-10" >
                {
                    !mobileMenu ? <FaBars /> : <FaTimes />
                }

            </div>
            {
                mobileMenu &&
                <ul className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#191A19] text-3xl">
                    <li onClick={handleBarButton} className="py-3 hover:text-4xl">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={handleBarButton} >Home</Link>
                    </li>
                    <li onClick={handleBarButton} className="py-3 hover:text-4xl">
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={handleBarButton} >About</Link>
                    </li>
                    <li onClick={handleBarButton} className="py-3 hover:text-4xl">
                        <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={handleBarButton} >Skills</Link>
                    </li>
                    <li onClick={handleBarButton} className="py-3 hover:text-4xl">
                        <Link to="work" smooth={true} duration={500} className="cursor-pointer" onClick={handleBarButton} >Work</Link>
                    </li>
                    <li onClick={handleBarButton} className="py-3 hover:text-4xl">
                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={handleBarButton} >Contact</Link>
                    </li>
                </ul>
            }
        </div>
    );
};

export default Header;