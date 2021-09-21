import React from 'react'
import { Link} from 'react-router-dom'

const navItems = [
    {to:'/',text:'Home'},
    {to:'/cryptocurrencies',text:'Cryptocurrencies'},
    {to:'/exchanges',text:'Exchanges'},
    {to:'/news',text:'News'}
  ]

  
const Footer = () => {
    return (
        <div className='bg-gray-300 w-full text-center py-4 text-gray-700'>
            <p>CryptoLand <br /> All rights reserved.</p>
            <div className='flex gap-4 justify-center'>

          {
                navItems.map(item=>
             <Link exact className='hover:text-black hover:font-medium' 
             key={item.text} to={item.to}>{item.text}</Link>
                )  
            }
            </div>
        </div>
    )
}

export default Footer
