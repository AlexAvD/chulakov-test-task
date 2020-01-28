import React from 'react'
import boy from '../../../videos/boy.mp4'
import shoe from '../../../videos/shoe.mp4'
import './index.scss'

const videos = {
  boy,
  shoe
}

const pickVideo = (name) => videos[name]

const Video = ({ name }) => {
  return (
    <div className="contact__video video">
      <div className="video__container">
        <video
          className="video__content"
          controls
          src={pickVideo(name)}
        >
        </video>
      </div>
    </div>
  )
}

export default Video
