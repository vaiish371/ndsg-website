import React from 'react'

const WhoWeAre = () => {
  return (
    <section
      className="w-full flex flex-row justify-start gap-10 max-container"
    >
      <div className="relative hidden md:block w-1/3" >
        <img src="/assets/images/pic2.jpeg"
            alt="Logo"
            className='w-full h-full object-cover'
          />
      </div>
      <div className='flex flex-col items-start justify-start w-2/3 max-md:w-full max-md:padding-x'>
        <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold'> Who we are </h1>
          <p className='font-inter text-slate-grey text-md max-sm:text-[10px] max-sm:leading-7 leading-8 mt-6 mb-15 pr-14'>
          Namadwaar Singapore is a registered Hindu society inspired by HH Sri Sri Muralidhara Swamiji established since Nov 8 2012 to help promote Universal Love for the betterment of human race without any social , cultural or geographical barriers. 
          <br/>
          <br/>
          Constant chanting of the Mahamantra in the same location manifests divine presence in that place and spreads positive vibrations of love, harmony and understanding not just within its precincts but everywhere around it. That is the prime reason for the establishment of Namadwaars world over. Prayers done in such precincts are undoubtedly fulfilled.
          </p>
      </div>

    </section>
  )
}

export default WhoWeAre