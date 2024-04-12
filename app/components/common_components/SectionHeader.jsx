import React from 'react'
import Image from 'next/image'

const SectionHeader = ({sectionLabel}) => {
  return (
    <section className='w-full flex flex-row relative'>
        <div className='w-1/2 h-64 max-sm:h-32 bg-primary-maroon'>
            
        </div>
        <div className='w-1/2 h-64 max-sm:h-32 relative'>
            <Image
                src="/assets/images/pc6.jpeg"
                width={800}
                height={500}
                alt="Picture of the author"
                className='object-cover absolute inset-0 w-full h-full blur-xs'
            />
        </div>
        <h1 className='absolute inset-0 flex items-center justify-center text-7xl max-md:text-3xl font-caudex text-beige'>{sectionLabel}</h1>
    </section>
  )
}

export default SectionHeader