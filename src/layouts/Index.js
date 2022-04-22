import React from 'react'
import Navbar from '../components/Navbar'


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