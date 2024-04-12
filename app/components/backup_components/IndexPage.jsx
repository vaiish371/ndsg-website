import React from 'react'

const IndexPage = () => {
    return ( 
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-400">
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="text-5xl font-bold font-caudex">
                    Whatever philosophy you <br/> may follow, 
                    Stay true to it, 
                    <br/> and Chant Nama</h1>
            <p className="regular-16 mt-10 text-black xl:max-w-[520px]">
              The concept of Namadwaar is a worldwide initiative of our master to strive towards Universal Peace and Harmony by bringing about inner transformation within each individual through the simple path of chanting the Divine Names. 
              This is a way to provide material as well as spiritual upliftment to all of humanity.
            </p>
          </div>
        </section>
    );
  };
  
export default IndexPage;