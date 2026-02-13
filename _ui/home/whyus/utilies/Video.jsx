import React from 'react'

function Video() {
  return (
    <div className='mt-auto'>
        <video src="/videos/whyus.mp4" className='object-cover' controls fill loop autoPlay muted></video>
    </div>
  )
}

export default Video