import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
    const [flag, setFlag] = useState(false)
    const [position, setPosition] = useState(100)

    const toggleMenu = () => {
        setFlag((prevFlag) => {
            const newFlag = !prevFlag;
            setPosition(newFlag ? 0 : 100)
            return newFlag
        })
    }

    return (
        <>
            <nav className="bg-[#074740] text-green-50 px-10 py-6 flex justify-between items-center w-full text-xl sm:text-base relative">
                <div className={`bg-[#074740] h-screen z-[99] w-[90%] fixed top-0 right-0 sidebar sm:hidden text-white flex flex-col justify-center p-10 transition-all duration-300 text-4xl`} style={{ transform: `translateX(${position}%)` }}>
                  
                    <a href="#" className="py-2">Home</a>
                    <a href="#" className="py-2">Product</a>
                    <a href="#" className="py-2">Testimonial</a>
                    <a href="#" className="py-2">Contact</a>
                </div>
                <div>
                    <a href="#">Moodstore</a>
                </div>
                <div className=" gap-5 hidden sm:flex">
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">Testimonial</a>
                    <a href="#">Contact</a>
                </div>
                <div className="flex gap-5">
                    <IoCart className="hidden sm:block" />
                    <FaUser className="hidden sm:block" />

                    <label className="burger sm:hidden  relative z-[100] " htmlFor="burger" >
                        <input type="checkbox" id="burger" onClick={toggleMenu}/>
                        <span className="bg-green-50"></span>
                        <span className="bg-green-50"></span>
                        <span className="bg-green-50"></span>
                    </label>

                </div>
            </nav>
        </>
    )
}

export default Navbar