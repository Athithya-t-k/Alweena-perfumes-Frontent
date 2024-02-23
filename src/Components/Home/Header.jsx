import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='flex fixed top-0  bg-black sm:justify-between flex-wrap justify-center  sm:p-12 border-[1px] '>
        <h1 className='font-extrabold sm:text-3xl  text-amber-400'>Alweena  Perfumes</h1>
        <ul className='font-semibold text-amber-400 flex gap-5 sm:gap-10 '>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li> 
          <li>BLOG</li>
          <li><Link to={'/signup'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg></Link>
          </li>


        </ul>
        
    
  

export default EcommerceBanner;


      </div>
    </>
  )
}

export default Header
