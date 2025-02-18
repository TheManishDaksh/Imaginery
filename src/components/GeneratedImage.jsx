import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

function GeneratedImage({src}) {
  return (
    <div> 
      <LazyLoadImage 
        src={src}
      />
    </div>
  )
}

export default GeneratedImage