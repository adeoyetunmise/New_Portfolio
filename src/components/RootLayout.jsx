import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        
    
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout