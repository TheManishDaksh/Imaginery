import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Input({className,placeholder,hide}) {
  return (
    <div> 
        <form className={`rounded-lg text-slate-300 border-slate-500 border-2 flex gap-2 p-2 w-[18rem] md:w-[25rem] items-center`}> 
            <span className={`${hide}`}><SearchIcon/></span>
            <input type="text" placeholder={ placeholder || 'search with prompt or name'} className={`focus:outline-none w-[22rem] ${className}`} />
        </form>
    </div>
  )
}

export default Input