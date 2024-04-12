import React from 'react'
import '@styles/globals.css'
import Header from '@app/components/common_components/Header'


// common for all pages within app
export const metadata = {
    title: "Namadwaar",
    description:"Just a site lol"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout