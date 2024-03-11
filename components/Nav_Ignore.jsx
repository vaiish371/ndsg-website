'use client'
import Link from 'next/link'
// allows us to move to other pages

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;  
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async() => {
        const response = await getProviders();
        setProviders(response);
    }
    setProviders();
  }, [])
  return (
   //semantic nav tag
   <nav className="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" width = {30} height={30} className="object-contain"/>
        <p className= "logo_text">Promptopia</p>
    </Link>
    {/* desktop navigation */}
    <div className ="sm:flex hidden">
        {isUserLoggedIn? (
        <div className= "flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black-btn">
                Create Post
            </Link>

            <button type="button" onClicky = {signOut} className="outline-btn">
                Sign Out
            </button>

            <Link href="/profile">
                <Image src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"/>

            </Link>
        </div>
        ): (
        <> 
        </>
        )}
    </div>
   </nav>


  )
}

export default Nav