import React from 'react';

function Button({text, onClick, className, icon}) {
  return (
    <div> 
       <button onClick={onClick} 
       className={`bg-blue-600 hover:bg-blue-800 py-1 px-2 text-sm rounded-lg flex items-center gap-1 cursor-pointer ${className}`}> 
                <span> {icon || "+"} </span>
                <span>{text || "Create post"}</span>
            </button>
    </div>
  )
}

export default Button