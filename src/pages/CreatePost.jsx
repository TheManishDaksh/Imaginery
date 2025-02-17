import React from 'react'
import { Input, Navbar } from '../components'

function CreatePost() {
  return (
    <div> 
      <Navbar/>
      <div className='bg-black text-white w-screen h-screen'>
        Crate Page
        <Input/> 
      </div>
    </div>
  )
}

export default CreatePost