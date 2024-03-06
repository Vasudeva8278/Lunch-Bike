import React from 'react'
import '../styles/Home.css';
import video from '../Media/Bike.mp4';

const Home = () => {
  return (
    <div className="app" >
      <video autoPlay loop muted className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.      
      </video>
            
    </div>
  )
}
export default Home;