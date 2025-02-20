import React from 'react';
import {Button} from './';
import {Link, useLocation, useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className='bg-slate-900 text-white flex justify-between items-center px-2 py-3 md:py-2 md:px-8'>      
       <Link to={'/'}>
       <div className='md:text-2xl font-semibold flex items-center gap-1 '>
            <img src="/logo.webp" alt="logo" className='w-[40px] rounded-full cursor-pointer'/>
            <span className='hidden md:block'>Imaginery</span>
        </div>
       </Link>
        <div> 
            { location.pathname === '/'? 
              <Button text={"Create Post"} 
              onClick={()=>navigate('/post')} 
              icon={<AddIcon fontSize='small'/>}
              /> :
              <Button text={"Explore Posts"} 
              onClick={()=>navigate('/')} 
              className={`bg-violet-700 hover:bg-violet-800`}
              icon={<ExploreIcon fontSize='small'/>}
              />  
          }
        </div>
    </div>
  )
}

export default Navbar