import React from 'react'
import { Button, Input, Navbar } from '../components'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function CreatePost() {
  return (
    <div> 
      <Navbar/>
      <div className='bg-black text-white w-screen h-screen p-3'>
        <form> 
          <div className='flex md:items-center flex-col'> 
            <p className='font-bold text-xl md:text-2xl text-violet-500'>Generate Image with prompt</p>
            <p className='text-sm py-2 md:text-base'>Write your prompt according to image you want to generate</p>
          </div>
         <div className='flex flex-col gap-y-4 justify-center items-center py-4'>
         <Input
         placeholder={"write your name"}
         hide={'hidden'}
         />
         <textarea
            className="border-2 border-slate-600 rounded-lg p-2 w-full md:w-6/11 lg:w-3/10 h-32 md:h-40 focus:outline-none"
            placeholder="Write your imagination..."
        ></textarea>
         </div>
         <div className='flex justify-between md:justify-start gap-4'>
          <Button 
            text={'Generate Image'}
            icon={<AutoAwesomeIcon/>}
          />
          <Button 
            text={'Post Image'}
            icon={<ModeEditIcon/>}
            className={'w-32 bg-violet-700'}
          />
         </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost