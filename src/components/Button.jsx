import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function Button({text, onClick, className}) {
  return (
    <div> 
       <button onClick={onClick} 
       className={`bg-blue-600 hover:bg-blue-800 py-1 px-2 text-sm rounded-lg flex items-center gap-1 cursor-pointer ${className}`}> 
                <span> <AddIcon fontSize='small'/> </span>
                <span>{text || "Create post"}</span>
            </button>
    </div>
  )
}

export default Button