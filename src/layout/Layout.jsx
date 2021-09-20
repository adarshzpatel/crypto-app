import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <div>
            <Nav/>
            <div>
            {/* Main */}
                <div>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout
