import React from 'react'
import { useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";
import logo from '../assets/images/image.png'
import { MdOutlineFavorite } from "react-icons/md";
function Navbar() {
const [query, setQuery] = useState("");

const handleSearch = () => {
  if (query.trim() !== "") {
    // Ideally: lift this to parent or trigger API call here
    console.log("Searching for:", query);
  }
};


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-gray-800 border-b border-b-gray-600 shadow-2xl">
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-15 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a className="flex flex-shrink-0 items-center mr-2" href="/">

                      <span className=' text-3xl text-amber-50 font-bold ml-1'>
            Kino
            <span className='bg-amber-500 rounded-sm inline-flex text-black font-bold pl-1 pr-1 ml-0.5'>hub</span>

            </span>
              </a>
              <div className='m-auto inline-flex w-2xl justify-between bg-amber-500 rounded-sm'>
                <input onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                 placeholder='Enter movie name' className='bg-gray-100 rounded-sm p-1 pl-4 m-auto w-2xl' />
                <button type='button'
                onClick={handleSearch}
                className='bg-amber-500 rounded-sm w-auto pr-2 pl-2 m-auto hover:bg-amber-100 hover:cursor-pointer'>
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