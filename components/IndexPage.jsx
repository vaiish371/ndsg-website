import React from 'react'

const IndexPage = () => {
    return (
      <div className="flex">
        <div className="flex w-1/2 p-8">
        <div className="flex grid grid-rows-2 justify-center gap-4">
            <div className='flex items-end '>
                <h1 className="text-5xl font-bold font-caudex">
                Whatever philosophy you may follow, 
                Stay true to it, 
                and<br/> Chant Nama</h1>
            </div>
            <div className='flex items-start '>
                <p>
                The concept of Namadwaar is a worldwide initiative of our master to strive towards Universal Peace and Harmony by bringing about inner transformation within each individual through the simple path of chanting the Divine Names. 
                This is a way to provide material as well as spiritual upliftment to all of humanity.
                </p>
            </div>
        </div>
        </div>
        <div className="flex w-1/2 p-10">
          <div className="slideshow">
            <img src="/assets/images/rk.jpeg" alt="Slideshow" className='object-cover' />
          </div>
        </div>
      </div>
    );
  };
  
export default IndexPage;