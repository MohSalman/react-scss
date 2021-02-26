import React, { useEffect } from "react";
import "./index.scss";
import Video from './../../../assets/video/video.mp4';
const VideoSection = () => {
  // useEffect(()=>{
  //   document.querySelector('#tech').playbackRate = 2;
  // },[])
  return (
    <div className="video-section">
      <video id="tech" className="video-bg" controls={false} autoPlay muted loop>
        <source
          src={Video}
          type="video/mp4"
        />
      </video>
      <h2 className="heading">
      What is Lorem <span>New Era</span> <br />
      Ipsum?
      </h2>
    </div>
  );
};

export default VideoSection;
