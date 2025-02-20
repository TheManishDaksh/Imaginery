import React from 'react'
import GeneratedImage from './GeneratedImage';
import { CircularProgress } from '@mui/material'

function GeneratedImageCard({src, laoding}) {
  return (
    <div className='flex flex-col items-center'> 
        <div className='text-white p-8 font-bold text-lg'>
            Generated Image Card
        </div>
        <div className='border-2 flex justify-center items-center border-slate-600 text-slate-400 w-full md:w-96 h-full lg:h-64 rounded-lg p-2'>
            { laoding ? 
                (<div>
                    <CircularProgress/>
                    Generating your Image
                </div>) :
                (   <div>
                    {src ? <GeneratedImage src={src}/> : 'Write a prompt to generate Image'}
                    </div>
            )}
        </div>
    </div>
  )
}

export default GeneratedImageCard