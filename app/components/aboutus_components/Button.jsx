import React from 'react'
import Image from 'next/image'

const Button = ({label, type, index}) => {
  return (
    // the && means - if icon exists 
    <button className= {`px-4 py-2 font-inter ${type == "" ? "text-sm": "text-xl"} ${type=="rsvp" && "w-28" } bg-primary-orange rounded-md text-white`}>
        {label}
    </button>
  )
}

export default Button

