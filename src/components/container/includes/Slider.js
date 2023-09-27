import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/container/include/slider.css";
import "../../assets/css/container/include/animation.css"

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
      height: `${(screenWidth * (1150 / 1536)) / logBase(screenWidth, 100)}px`,
      overflowX: 'hidden',
      margin: `0px !important`
    },
  };

  const containerdiv_styles = {
    container: {
      marginTop: `90px`,
      width: `${screenWidth}px`,
      height: `${(screenWidth * (950 / 1536)) / logBase(screenWidth, 100)}px`,
      overflowX: 'hidden',
      zIndex: `1`,
    }
  }

  document.documentElement.style.setProperty('--carouselItem-screen-height', `${(screenWidth * (1550 / 1536)) / logBase(screenWidth, 100)}px`);

  document.documentElement.style.setProperty('--div-screen-height', `${(screenWidth * (1550 / 1536)) / logBase(screenWidth, 100)}px`);
  document.documentElement.style.setProperty('--carousel-screen-width', `${screenWidth-15}px`);
  document.documentElement.style.setProperty('--div-screen-width', `${screenWidth-15}px`);
  // Check if the media query matches
  if (window.matchMedia(mediaQuery).matches) {
    // If the media query matches, update the styles object
    container_styles.container.width = `var(--carousel-screen-width)`;
    containerdiv_styles.container.width = `var(--div-screen-width)`;
    container_styles.container.height = `var(--carouselItem-screen-height)`;
    containerdiv_styles.container.height = `var(--div-screen-height)`;
    containerdiv_styles.container.marginTop = `0px`;
    // Add other styles for the media query here
  }

  return (
    <Container fluid className="no-horizontal-padding" >
      <Carousel className="carousel-height" >

        <Carousel.Item style={container_styles.container} >
          <div className=" wrap carousel-slider-1" style={containerdiv_styles.container}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            <a href="/login" className="slider-btn apply-btn-slider  animated-button1 permanent-shake-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Apply Now
            </a>

          </div>
        </Carousel.Item>


        <Carousel.Item style={container_styles.container} >
          <div className="wrap carousel-slider-2 " style={containerdiv_styles.container}>
          <span></span>
            <span></span>
            <span></span>
            <span></span>
            <a href="/login" className="slider-btn apply-btn-slider animated-button1 permanent-shake-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Apply Now
            </a>
          </div>
        </Carousel.Item>


        <Carousel.Item style={container_styles.container} >
          <div className="wrap carousel-slider-3 " style={containerdiv_styles.container}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <a href="/login" className="slider-btn apply-btn-slider animated-button1 permanent-shake-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Apply Now
            </a>

          </div>
        </Carousel.Item>


        <Carousel.Item style={container_styles.container} >
          <div className="wrap carousel-slider-4" style={containerdiv_styles.container}>
          <span></span>
            <span></span>
            <span></span>
            <span></span>
            <a href="/login" className="slider-btn slider-left-btn animated-button1 permanent-shake-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Apply Now
            </a>
          </div>
        </Carousel.Item>
      </Carousel>

    </Container>
  );
}


export default Slider;
