import React from 'react'
import Link from 'next/link'
// allows us to move to other pages

import Image from 'next/image';
const Header = () => {
  return (
        <nav className="bg-beige shadow-lg">
            <div className="flex items-center justify-between" >
                <Link href="/" className = "flex p-3 justify-start">
                    <Image src="/assets/images/namadwaarlogo.png" width = {400} height={100}/>
                </Link>
                <div className="flex p-5 mr-40 items-center justify-items-end">
                    <ul className="flex gap-[4vw] font-caudex primary text-sm sm:text-xs md:text-sm lg:text-lg xl:text-xl">
                        <li>
                            <a href="#" className="hover:text-black">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">Activities</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">Events</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">Classes</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">Gallery</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">Contact Us</a>
                        </li>

                    </ul>
                </div>  
            </div>          
        </nav>
  )
}

export default Header