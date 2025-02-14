import React from 'react';
import { Input } from '../components';

function HomePage() {
  return (
    <div className='bg-black h-screen'> 
        <div className='text-2xl flex justify-center flex-col'>
            <p className='text-white font-semibold '>Explore popular posts in the community!</p>
            <p>--Generated with ai--</p>
        </div>
        <div>
            <Input/>
        </div>
    </div>
  )
}

export default HomePage