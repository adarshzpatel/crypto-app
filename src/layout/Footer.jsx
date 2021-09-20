import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <p>CryptoLand <br /> All rights reserved</p>
            <Link to='/'>Home </Link>
            <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
            <Link to='/exchanges' >Exchanges</Link>
            <Link to='/News' >News</Link>
        </div>
    )
}

export default Footer
