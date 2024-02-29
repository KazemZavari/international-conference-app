// import React from 'react'
import video from "../assets/bgVideo/earth-1.mp4";

// type videoProps ={
//    videoUrl: string,
//    src:URL
// }

const Video = () => {
  return (
    <div className="absolute -z-10 h-[100vh] overflow-hidden">
    <video
      className="w-[100vw]"
      autoPlay
      muted
      playsInline
      loop
      src={video}
    ></video>
  </div>
  )
}

export default Video