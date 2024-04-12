import React from 'react'
import Image from 'next/image'

const Button = ({label}) => {
  return (
    // the && means - if icon exists 
    <button className= "px-3 py-2 font-inter text-sm bg-primary-orange rounded-md text-white">
        {label}
    </button>
  )
}

export default Button