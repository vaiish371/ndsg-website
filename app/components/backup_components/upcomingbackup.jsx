import React from 'react'
import Button from '@app/components/aboutus_components/Button'
import { upcomingeventdetails } from '@constants/fixed'
import Link from 'next/link'

const UpcomingEvents = () => {
  const recent = upcomingeventdetails
  return (
    <section
      className="w-full flex flex-col items-center gap-10 max-container"
    >
      <div>
        <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold'> Upcoming Events </h1>
      </div>

      <div className="relative flex flex-row max-sm:flex-col justify-evenly max-sm:items-center gap-10">
        {recent.map((item,i)=> (
          <div className='w-1/3 rounded shadow-lg overflow-hidden h-[500px] max-sm:w-full'>
            <img className="w-full h-1/2 max-lg:h-1/4 max-sm:h-1/2 object-cover object-top" src={item.imgURL[0]} alt="Sunset in the mountains"/>
            <div className="h-1/2 max-lg:h-3/4 max-sm:h-1/2">
              <div className="px-6 py-4 leading-8">
                <h1 className='text-lg font-bold'>{item.title}</h1>
                <div className='mt-3'>Time: {item.time}</div>
                <div>Date: {item.date}</div>
              </div>
              <div className='p-5'>
                <Link href={`/events/upcomingevents/${i}`}><Button label="Click to Join"/></Link>
              </div>
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default UpcomingEvents