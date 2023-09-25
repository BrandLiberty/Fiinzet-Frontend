import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Button } from "react-bootstrap";
import Slider1 from "../../assets/images/DM1.jpg";
import Slider2 from "../../assets/images/DM2.jpg";
import Slider3 from "../../assets/images/DM3.jpg";
import Slider4 from "../../assets/images/DM4.jpg";
import Slider1Mobile from "../../assets/images/M1.jpg";
import Slider2Mobile from "../../assets/images/M2.jpg";
import Slider3Mobile from "../../assets/images/M3.jpg";
import Slider4Mobile from "../../assets/images/M4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/slider.css";
import "../../assets/css/animation.css"

function Slider() {

  // Adding Styles

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  function logBase(x, base) {
    return Math.log(x) / Math.log(base);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const mediaQuery = '(max-width: 774px)';

  const container_styles = {
    container: {
      width: `${screenWidth}px`,
      height: `${(screenWidth * (985 / 1536)) / logBase(screenWidth, 100)}px`,
      overflowX: 'hidden',
      margin: `0px !important`
    },
  };

  const containerdiv_styles = {
    container: {
      width: `${screenWidth}px`,
      height: `${(screenWidth * (983 / 1536)) / logBase(screenWidth, 100)}px`,
      overflowX: 'hidden',
      zIndex: `1`,
    }
  }

  document.documentElement.style.setProperty('--carouselItem-screen-width', `${(screenWidth * (1550 / 1536)) / logBase(screenWidth, 100)}px`);

  document.documentElement.style.setProperty('--div-screen-width', `${(screenWidth * (1550 / 1536)) / logBase(screenWidth, 100)}px`);

  // Check if the media query matches
  if (window.matchMedia(mediaQuery).matches) {
    // If the media query matches, update the styles object

    
    container_styles.container.height = `var(--carouselItem-screen-widths)`
    containerdiv_styles.container.height = `var(--div-screen-width)`;
    // Add other styles for the media query here
  }

  return (
    <Container fluid className="no-horizontal-padding" >
      <Carousel interval={null} className="carousel-height" >

        <Carousel.Item style={container_styles.container}>
          <div className="wrap carousel-slider-1" style={containerdiv_styles.container}>

            <button className="slider-btn apply-btn-slider nav-link " >Apply Now</button>

          </div>
        </Carousel.Item>


        <Carousel.Item style={container_styles.container}>
          <div className="wrap carousel-slider-2" style={containerdiv_styles.container}>
            <button className="slider-btn apply-btn-slider">Apply Now</button>
          </div>
        </Carousel.Item>


        <Carousel.Item style={container_styles.container}>
          <div className="wrap carousel-slider-3" style={containerdiv_styles.container}>

            <button className="slider-btn apply-btn-slider">Apply Now</button>

          </div>
        </Carousel.Item>


        <Carousel.Item style={container_styles.container}>
          <div className="wrap carousel-slider-4" style={containerdiv_styles.container}>
            <button className="slider-btn slider-left-btn">Apply Now</button>
          </div>
        </Carousel.Item>
      </Carousel>

    </Container>
  );
}


export default Slider;
