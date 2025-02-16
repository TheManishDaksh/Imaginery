import React from 'react';
import {Button} from './';
import {useRoutes} from "react-router-dom"

function Navbar() {

  const path = useRoutes()
  return (
    <div className='bg-slate-900 text-white flex justify-between items-center px-2 py-3 md:py-2 md:px-8'>      
        <div className='md:text-2xl'>
            <img src="/logo.webp" alt="logo" className='w-[40px] rounded-full cursor-pointer'/>
        </div>
        <div> 
            { path === '/'? 
              <Button text={"Create Post"}/> :
              <Button text={"Explore Posts"} />  
          }
        </div>
    </div>
  )
}

export default Navbar