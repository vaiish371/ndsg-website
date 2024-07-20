import React from 'react'

const GalleryExample = ({galleryTitle}) => {
  return (
    <main>
         <section className='padding-y px-10 max-sm:p-8'>
          <div>
            <h1 className='font-caudex text-4xl max-md:text-2xl max-sm:text-xl font-bold text-center'>{galleryTitle}</h1>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute inset-y-0 left-0 max-sm:w-3 max-sm:h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
        </section>
    </main>
  )
}

export default GalleryExample