import React from 'react';
import { Button, Input} from '../components'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function GenerateImageForm({
    post,
    setPost,
    generateLoading,
    setGenerateLoading,
    createPostLoading,
    setCreatePostLoading
}) {
  return (
    <div> 
        <div className='bg-black text-white p-3'>
        <form> 
          <div className='flex flex-col md:items-center'>
          <div className='flex md:items-center flex-col'> 
            <p className='font-bold text-xl md:text-2xl text-violet-500'>Generate Image with prompt</p>
            <p className='text-sm py-2 md:text-base'>Write your prompt according to image you want to generate</p>
          </div>
         <div className='flex flex-col gap-y-4 justify-center items-center py-4'>
         <Input
         placeholder={"write your name"}
         hide={'hidden'}
         value={post.name}
         onchange={(e)=>setPost({...post, name : e.target.value})}
         />
         <textarea
            className="border-2 border-slate-600 rounded-lg p-2 w-full h-32 md:h-40 focus:outline-none"
            placeholder="Write your imagination..."
            value={post.prompt}
            onChange={(e)=>setPost({...post, prompt:e.target.value})}
        ></textarea>
         </div>
         <div className='flex justify-between md:justify-start gap-4'>
          <Button 
            text={'Generate Image'}
            icon={<AutoAwesomeIcon/>}
            className="md:w-48 flex justify-center"
          />
          <Button 
            text={'Post Image'}
            icon={<ModeEditIcon/>}
            className="w-32 md:w-48 bg-violet-700 hover:bg-violet-800 justify-center"
          />
         </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GenerateImageForm