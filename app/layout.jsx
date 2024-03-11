import React from 'react'
import '@styles/globals.css'
import Header from '@components/Header'
import Provider from '@components/Provider'
import IndexPage from '@components/IndexPage'

export const metadata = {
    title: "Promptopia",
    description:"Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-orange-forme from-0% via-beige via-50% to-orange-forme to-100%">
        <main>
            <Header/>
            <IndexPage/>
        </main>
    </div>
  )
}

export default RootLayout