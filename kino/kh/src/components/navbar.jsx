import React from 'react'
import { IoSearchCircle } from "react-icons/io5";
import logo from '../assets/images/image.png'
import { MdOutlineFavorite } from "react-icons/md";
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-gray-800 border-b border-b-gray-400 shadow-2xl">
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-15 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a className="flex flex-shrink-0 items-center mr-2" href="/">

                      <span className=' text-3xl text-amber-50 font-bold ml-1'>
            Kino
            <h1 className='bg-amber-500 rounded-sm inline-flex text-black font-bold pl-1 pr-1 ml-0.5'>hub</h1>

            </span>
              </a>
              <div className='m-auto inline-flex justify-between bg-amber-500'>
                <input type="text" placeholder='Enter movie name' className='bg-gray-100 rounded-sm p-1 m-auto' />
                <button type='search' className='bg-amber-500 rounded-sm w-auto p-auto m-auto hover:bg-amber-100 hover:cursor-pointer'>
                    <IoSearchCircle className=' text-3xl'/>
                </button>
              </div>
              <span className='text-white  text-xs flex flex-shrink-0 items-center mr-2 hover:cursor-pointer hover:font-bold hover:text-black hover:bg-amber-500 hover:p-1 hover:rounded-2xl'>
                
                    <MdOutlineFavorite className='my-auto mx-1 '/>
                    <p className=''>Favorites</p>
                    
                
                
              </span>

            </div>
            </div>
            </div>
    </nav>
    
    </>
  )
}

export default Navbar