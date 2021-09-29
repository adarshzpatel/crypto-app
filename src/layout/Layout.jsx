import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <div className='flex flex-col lg:flex-row h-screen w-full'>
            <Nav/>
            {/* Mixin */}
            
            <div className='flex-1 flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-w-3'>
            {/* Main */}
                <div className='flex-1 bg-gray-100
                '>

                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
