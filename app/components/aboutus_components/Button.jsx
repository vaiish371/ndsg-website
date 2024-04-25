import React from 'react'
import Image from 'next/image'

const Button = ({label, type, index}) => {
  return (
    // the && means - if icon exists 
    <button className= {`px-3 py-2 font-inter ${type == "event"? "text-xl": "text-sm"} bg-primary-orange rounded-md text-white`}>
        {label}
    </button>
  )
}

export default Button