import React, { useEffect, useState } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import "../components/assets/css/screen/screen.css";

const Screen = (props) => {

  // Find the Width and height of the screen
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

  // Adding styles based on screeen
  const ScreenContainer_style = {

    width: `${screenWidth}px`,
    height: `${screenHeight}px`,
    overflowX: 'hidden',

  }

 

  const footerContainer_style = {
    overflow: 'hidden'
  }

  return (
    <div style={{ ScreenContainer_style }}>

      <div>
        <Navbar />
      </div>

      <div >
        {props?.children}
      </div>

      <div style={{footerContainer_style}}>
        <Footer />
      </div>
      
    </div>
  )
}

export default Screen