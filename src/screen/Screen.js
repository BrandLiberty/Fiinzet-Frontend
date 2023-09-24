import React, { useEffect, useState } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
// import { UserAuthContextProvider } from '../context/UserAuthContext'
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
      // border : `15px solid red`
    }}>
      <div>
        <Navbar />
      </div>
      <div >
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