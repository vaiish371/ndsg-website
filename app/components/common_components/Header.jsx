import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { navLinks} from '@constants/fixed';
/* flex-1 lets the ul to shrink/grow 
                    flex makes the child elements to be flex items. ul becomes flex container
                    justify and items - centers the child elements to be centered
                    gap-16 - space between these child elements
                */
                /* we use parantheses, so its an immediate return  */
const Header = () => {
  return (
    <header className="padding-x py-8 z-10 w-full bg-beige shadow-lg">
        <nav className='flex justify-between items-center max-container'>
            <Link href="/">
                <Image
                    src="/assets/images/namadwaarlogo.png"
                    alt="Logo"
                    width={300}
                    height={100}
                />
            </Link>
            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className="font-caudex leading-normal text-lg text-gray">
                                {item.label}
                            </Link>
                        </li> 
                    ))}
            </ul>
            <div className="hidden max-lg:block">
                <Image
                    src="/assets/icons/hamburger.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Header