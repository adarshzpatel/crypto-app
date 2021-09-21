import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <div className='flex min-h-screen w-screen'>
            <Nav/>
            <div className='flex-1 flex flex-col'>
            {/* Main */}
                <div className='flex-1'>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
