import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { NAV_LINKS } from '@constants';
import Button from './aboutus_components/Button';
// allows us to move to other pages

const Header = () => {
  return (
        <nav className="bg-beig lg:flexBetween max-container padding-container relative py-5 shadow-lg">
                <Image
                src='/assets/icons/menu.svg'
                alt="menu"
                height={32}
                width={32}
                className='inline-flex cursor-pointer lg:hidden'
                />
                <Link href="/" className = "inline-flex items-center lg:flex p-3">
                    <Image src="/assets/images/namadwaarlogo.png" width = {400} height={100}/>
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="font-caudex regular-16 text-primary-maroon flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
                </ul>
                <div className='lg:flexCenter hidden'>
                    <Button
                    type="button"
                    title="login"
                    icon="/assets/icons/icon.svg"
                    variant="btn_dark_green"
                    />
                    
                </div>
        </nav>
  )
}

export default Header