import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function Navbar() {
  return (
    <div className='bg-slate-900 text-white flex justify-between items-center px-2 py-3 md:py-2 md:px-8'>      
        <div className='md:text-2xl'>
            <img src="/logo.webp" alt="logo" className='w-[40px] rounded-full cursor-pointer'/>
        </div>
        <div> 
            <button className='bg-blue-600 py-1 px-2 text-sm rounded-lg flex items-center gap-1 cursor-pointer'> 
                <span> <AddIcon fontSize='small'/> </span>
                <span>Create new project</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar