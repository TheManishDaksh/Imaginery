import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Input() {
  return (
    <div> 
        <form className={`rounded-lg text-slate-300 border-slate-500 border-2 flex gap-2 p-2 w-[18rem] md:w-[25rem] items-center`}> 
            <span><SearchIcon/></span>
            <input type="text" placeholder='search with prompt or name' className='focus:outline-none w-[20rem]' />
        </form>
    </div>
  )
}

export default Input