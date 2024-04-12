import React from 'react'
import Button from '@app/components/aboutus_components/Button'


const WhatWeDo = () => {
  return (
    <section
      className="w-full flex flex-col justify-start gap-5 max-container px-12"
    >
      <div>
        <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold'> What we do </h1>
      </div>
      
      <div>
      <h2 className='activities font-caudex text-2xl max-md:text-xl max-sm:text-lg'>Activities</h2>
      </div>

      
      <div className="relative flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-5">
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img className="w-full h-3/4 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">Weekly Satsangh</div>
          </div>
        </div>
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img className="w-full h-3/4 object-cover" src="/assets/images/pic2.jpeg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">House Satsangh</div>
          </div>
        </div>
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img className="w-full h-3/4 object-cover" src="/assets/images/pic3.jpeg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">Weekly Satsangh</div>
          </div>
        </div>
      </div>
        
  

      <div className='ml-auto max-sm:max-container'>
        <Button label="Read More"/>
      </div>


      <div className='mt-7 relative flex flex-row max-sm:flex-col justify-start gap-10'>
      {/* row: events, classes */}

        {/* events - 1/2 space */}
        <div className='w-1/2 flex flex-col max-md:w-full justify-start gap-5'>
          {/* col: title, cards, read more */}

          {/* title */}
          <h2 className='font-caudex text-2xl events'>Events</h2>

          {/* cards */}
          <div className='w-full flex flex-row justify-start gap-5 font-Inter text-lg max-lg:text-sm max-md:text-xs max-sm:w-full'>
          {/* row: card1, card2 */}

            {/* card1 */}
            <div className="w-1/2 rounded overflow-hidden shadow-lg">
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="">Puranava</div>
              </div>
            </div>

          
            {/* card2 */}
            <div className="w-1/2 rounded overflow-hidden shadow-lg">
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="">MG Contest</div>
              </div>
            </div>

          </div>

          <div className='ml-auto'>
            <Button label="Read More"/>
          </div>

        </div>

        {/* classes - 1/2 space */}
        <div className='w-1/2 flex flex-col max-md:w-full justify-start gap-5'>
          {/* col: title, cards, read more */}

          {/* title */}
          <h2 className='font-caudex text-2xl events'>Classes</h2>

          {/* cards */}
          <div className='w-full flex flex-row justify-start gap-5 font-Inter text-lg max-lg:text-sm max-md:text-xs max-sm:w-full'>
          {/* row: card1, card2 */}

            {/* card1 */}
            <div className="w-1/2 rounded overflow-hidden shadow-lg">
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="">Puranava</div>
              </div>
            </div>

          
            {/* card2 */}
            <div className="w-1/2 rounded overflow-hidden shadow-lg">
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="">MG Contest</div>
              </div>
            </div>

          </div>

          <div className='ml-auto'>
            <Button label="Read More"/>
          </div>

        </div>
      </div>

    </section>
  )
}

export default WhatWeDo