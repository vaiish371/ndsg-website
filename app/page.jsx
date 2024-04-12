import React from 'react'
import WhoWeAre from './components/homepage_components/WhoWeAre'
import WhatWeDo from './components/homepage_components/WhatWeDo'
import UpcomingEvents from './components/homepage_components/UpcomingEvents'
import Hero from './components/homepage_components/Hero'

//localhost:3000/
const HomePage = () => {
  return (
    <main className='relative'>
      <section className='padding'>
        <Hero/>
      </section>
      <section className='padding-y'>
        <WhoWeAre/>
      </section>
      <section className='padding-y'>
        <WhatWeDo/>
      </section>
      <section className='padding-x py-10'>
        <UpcomingEvents/>
      </section>
      
    </main>
  )
}

export default HomePage