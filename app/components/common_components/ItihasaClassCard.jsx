'use client'
import React, { useState } from 'react'


const ItihasaClassCard = (props) => {
  const [arrowPressed, setArrowPressed] = useState(false)

  const handleArrowClick = () => {
    setArrowPressed(!arrowPressed);
  };
  return (
    <div className='flex flex-col items-start gap-8 shadow-lg font-palanquin '>
        <div className='w-full py-6 bg-primary-maroon'>
            <h1 className='text-center font-caudex text-white text-xl max-sm:text-base'>{props.title}</h1>
        </div>
        <div className='px-6 py-2'>
            <p className='text-lg leading-8 max-sm:text-sm max-sm:leading-7'>
                {props.description}
            </p>
        </div>
        <div className='flex flex-row gap-2 items-center px-6'>
            <div>See schedule</div>
            
                    <a onClick={handleArrowClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 transition-transform duration-500 ${arrowPressed? 'rotate-90': 'rotate-0'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </a>
            
                
        </div>
        <div
            className={`transition-all duration-500 ease-in-out ${arrowPressed ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
            {arrowPressed && (
            <div className={`flex flex-col items-start gap-8 px-6 mb-16`}>
                <hr class="w-full h-px bg-gray-300 border-0 rounded"/>
                <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <div>{props.day}</div>
                </div>
                
                <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>{props.time}</div>
                </div>

                <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>{props.location}</div>    
                </div>
            </div>
            )}
        </div>

                    
    </div>
  )
}

export default ItihasaClassCard
