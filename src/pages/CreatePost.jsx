import React, { useState } from 'react'
import { GeneratedImageCard, Navbar } from '../components'
import GenerateImageForm from '../components/GenerateImageForm'

function CreatePost() {

  const [post, setPost] = useState("");
  const [generateLaoding, setGenerateLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false)

  return (
    <div> 
      <Navbar/>
      <div className='block lg:flex justify-center lg:justify-center bg-black w-screen h-screen'>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          generateLaoding={generateLaoding}
          setGenerateLoading={setGenerateLoading}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GeneratedImageCard src={post.photo} laoding={generateLaoding}/>
      </div>
      
    </div>
  )
}

export default CreatePost