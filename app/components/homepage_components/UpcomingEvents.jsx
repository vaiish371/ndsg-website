import React from 'react'
import Button from '@app/components/aboutus_components/Button'

const UpcomingEvents = () => {
  return (
    <section
      className="w-full flex flex-col items-center gap-10 max-container px-12"
    >
      <div>
        <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold'> Upcoming Events </h1>
      </div>

      <div className="relative flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-10">
        {/* <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img className="w-full h-1/2 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-inter text-base max-md:sm max-sm:text-xs">Madhurageetham Contest 2024</div>
          </div>
        </div> */}
        <div className='rounded shadow-lg overflow-hidden'>
          <img className="w-full h-1/2 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
          <div className="h-1/2">
            <div className="px-6 py-4 leading-8">
              <h1 className='text-lg font-bold'>Madhurageetham Contest</h1>
              <div className='mt-3'>Time: 5:30pm</div>
              <div>Date: 5th July 2023</div>
            </div>
            <div className='p-5'><Button label="Click to Join"/></div>
          </div>
        </div>

        <div className='rounded shadow-lg overflow-hidden'>
          <img className="w-full h-1/2 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
          <div className="h-1/2">
            <div className="px-6 py-4 leading-8">
              <h1 className='text-lg font-bold'>Madhurageetham Contest</h1>
              <div className='mt-3'>Time: 5:30pm</div>
              <div>Date: 5th July 2023</div>
            </div>
            <div className='p-5'><Button label="Click to Join"/></div>
          </div>
        </div>

        <div className='rounded shadow-lg overflow-hidden'>
          <img className="w-full h-1/2 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
          <div className="h-1/2">
            <div className="px-6 py-4 leading-8">
              <h1 className='text-lg font-bold'>Madhurageetham Contest</h1>
              <div className='mt-3'>Time: 5:30pm</div>
              <div>Date: 5th July 2023</div>
            </div>
            <div className='p-5'><Button label="Click to Join"/></div>
          </div>
        </div>
        
    </div>
    </section>
  )
}

export default UpcomingEvents