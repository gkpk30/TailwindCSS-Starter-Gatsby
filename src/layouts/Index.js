import React from 'react'
import Navbar from '../components/Navbar'

//wrap each page with Layout tag you want to have this Layout . Using Gatsby's plugin-Layout allows the us of different Layouts for pages depending on design requirements
function Layout({children}) {
  return (
    <>
    <Navbar/>
    <div style={{backgroundColor: 'red'}} > 
      {children} 
      hello
    </div>
    </>
  )
}

export default Layout