import React from 'react'
import WhoWeAre from './components/homepage_components/WhoWeAre'
import WhatWeDo from './components/homepage_components/WhatWeDo'
import UpcomingEvents from './components/homepage_components/UpcomingEvents'
import Hero from './components/homepage_components/Hero'

//localhost:3000/
const HomePage = () => {
  return (
    <main>
      <section className='padding lg:bg-background-pastel bg-cover bg-beige'>
        <Hero/>
      </section>
      <section className='padding padding-y'>
        <WhoWeAre/>
      </section>
      <section className='padding padding-y'>
        <WhatWeDo/>
      </section>
      <section className='padding padding-y bg-beige'>
        <UpcomingEvents/>
      </section>
      
    </main>
  )
}

export default HomePage