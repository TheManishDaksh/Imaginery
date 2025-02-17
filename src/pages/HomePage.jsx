import React from 'react';
import { Input, Navbar } from '../components';

function HomePage() {
  return (
    <div>
    <Navbar/>
    <div className='bg-black h-screen px-4 py-4'> 
        <div className='text-2xl flex justify-center items-center flex-col py-6'>
           <div className='flex justify-center flex-col md:flex-row font-semibold md:text-3xl'>
           <p className='text-white '>Explore popular posts</p>
           <span className='text-white flex justify-center px-1'>in the community!</span>
           </div>
            <p className='flex items-center text-violet-600 py-2 font-semibold md:text-3xl '>--Generated with ai--</p>
        </div>
        <div className='flex justify-center'>
            <Input/>
        </div>
    </div>
    </div>
  )
}

export default HomePage