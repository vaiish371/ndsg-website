'use client'
import SectionHeader from '@app/components/common_components/SectionHeader'
import next from 'next';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const Newsletter = () => {
  const [pageNum, setPageNum] = useState(1);
  const nextPage = () => pageNum == 39 ? setPageNum(pageNum): setPageNum(pageNum+1);
  const previousPage = () => pageNum == 1 ? setPageNum(pageNum): setPageNum(pageNum-1);
  
  return (
    <main>
        <SectionHeader sectionLabel="Newsletter"/>
        <div className='pt-8 flex gap-4 items-center justify-center'>
            <h1 className='font-caudex text-primary-maroon text-4xl max-md:text-2xl'>Edition 2</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-primary-maroon">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
       

        {/* Latest Newsletter edition will be hardcoded. Previous ones will have pdf links. */}
        <div className='flex flex-col items-center gap-8'>
            {/* Newsletter Hyperlinks */}
            <div className='px-2 flex flex-wrap gap-8 bg-white/45 underline underline-offset-4 decoration-0 justify-center pt-6 cursor-pointer font-palanquin text-base 
            max-lg:text-sm max-sm:text-xs text-primary-maroon'>
                <div onClick={() => setPageNum(1)}>Home</div>
                <div onClick={() => setPageNum(3)}>Preface</div>
                <div onClick={() => setPageNum(5)}>April'24</div>
                <div onClick={() => setPageNum(11)}>May'24</div>
                <div onClick={() => setPageNum(16)}>June'24</div>
                <div onClick={() => setPageNum(25)}>Local Treasures</div>
                
            </div>
            {/* Newsletter */}
            <div className='px-52 flex max-md:flex-col justify-center items-center max-xl:px-12 max-md:px-0 relative'>
                <button onClick={previousPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="size-9 absolute inset-y-1/2 left-36 max-xl:left-2 stroke-primary-maroon hover:stroke-primary-maroon/40 max-sm:size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <Image src={`/assets/images/newsletter_two/${pageNum}.png`}
                width={600}
                height={100}
                alt="newsletter"
                className='w-1/2 max-md:w-3/4'
                />
                <Image src={`/assets/images/newsletter_two/${pageNum+1}.png`}
                width={600}
                height={100}
                alt="newsletter"
                className='w-1/2 max-md:hidden'
                /> 
                <button onClick={nextPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="size-9 absolute inset-y-1/2 right-36 max-xl:right-2  stroke-primary-maroon hover:stroke-primary-maroon/40 max-sm:size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            {/* Download Button */}
            <div className='mb-12'>
                <a href="/assets/images/Namadwaar Singapore Newsletter Issue 2.pdf" download="ND_Newsletter_Edition_2" 
                        className='p-2 bg-primary-orange text-white rounded-md font-palanquin'>Download PDF</a>
            </div>
        </div>

    </main>
  )
}

export default Newsletter
