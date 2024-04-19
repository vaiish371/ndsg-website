import React from 'react'

const Hero = () => {
  return (
    <section 
      id="home"
      className="w-full flex flex-row h-screen min-h-screen justify-start gap-10 max-container">
      <div className='lg:w-1/2 flex flex-col justify-center items-start w-full max-lg:padding-x' > 
        <h1 className='font-caudex text-5xl max-sm:text-2xl max-md:text-3xl max-md:leading-8 font-bold'>Whatever philosophy you may follow, Stay true to it, and Chant Nama</h1>
        <p className='font-inter text-slate-grey text-sm leading-8 max-sm:text-[10px] max-sm:leading-7 mt-6 mb-15'>
        The concept of Namadwaar is a worldwide initiative of our master to strive towards Universal Peace and Harmony by bringing about inner transformation within each individual through the simple path of chanting the Divine Names. 
        This is a way to provide material as well as spiritual upliftment to all of humanity.
        </p>
      </div>

      <div className='max-lg:hidden flex-1 flex justify-end items-end max-sm:justify-center'>
        <img src="/assets/images/krishna-removebg-preview.png"
          alt="Logo"
          width={600}
          height={700}
          className='h-full object-cover'
        />
  
      </div>
    </section>
  )
}

export default Hero