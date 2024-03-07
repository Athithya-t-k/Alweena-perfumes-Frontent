import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Components/Home/Header';
import Body from '../Components/Home/Body';
import Footer from '../Components/Home/Footer';
import Home from '../Components/Ui/Home';
import Products from '../Components/Ui/Products';
import About from '../Components/Ui/About';
import Contact from '../Components/Ui/Contact';
import Cart from '../Components/Ui/Cart';
import { Route, Routes } from 'react-router-dom';
import Search from '../Components/Ui/Search';

function Homepage() {
  return (
    <div className='mx-10'>
      <p className='text-center text-black mt-6 ml-8'>
        <span className='text-4xl font-serif'>AL WEENA</span> <br />
        <span className='text-2xl font-serif '>PERFUMES</span>
      </p>

      <button className='mr-2 '> {/* Moved the search button outside the navigation buttons */}
        <NavLink to="search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </NavLink>
      </button>

      <div className=''>
        <div className='flex justify-end'> 
          <button className='mr-2 text-black'>
            <NavLink to="/signup">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </NavLink>
          </button>

          <button className='mr-2 rounded-full w-8 h-8 text-black hover:border-2'>
            <NavLink to="blog">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </NavLink>
          </button>
        </div>

        <ul className=''>
          <li className='flex justify-between '>
            <button className='rounded-full  w-16 h-8 text-black mt-10 hover:border-2'>
              <NavLink to="home"> Home </NavLink>
            </button>

            <button className='rounded-full w-20 h-8 text-black mt-10 hover:border-2 '>
              <NavLink to="products">Products</NavLink>
            </button>

            <button className='rounded-full w-20 h-8 text-black mt-10 hover:border-2 '>
              <NavLink to="about">About</NavLink>
            </button>

            <button className='rounded-full w-20 h-8 text-black mt-10 hover:border-2' >
              <NavLink to="contact">Contact</NavLink>
            </button>
          </li>
        </ul>

        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path ='search' element={<Search/>}/>
        </Routes>

        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
