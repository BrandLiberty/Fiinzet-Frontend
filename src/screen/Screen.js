import React, { useEffect, useState } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import { useRef } from 'react';
import "../components/assets/css/screen.css";

const Screen = (props) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);


  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      width: `${screenWidth}px`,
      height: `${screenHeight}px`,
      overflowX :'hidden',
    }}>
      <div>
        <Navbar />
      </div>
      <div style={{
        marginTop: '95px'
      }} className='body-margin-top-media'>
        {props?.children}
      </div>
      <div style={{
        overflow :'hidden'
      }}>
        <Footer />
      </div>
    </div>
  )
}

export default Screen