import React from "react";
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
import "../../assets/css/slider.css";

class Slider extends React.Component {
  render() {
    return (
      <Container fluid>
        <Carousel>
          <Carousel.Item>
          <img
              src={Slider1}
              data-src-mobile={Slider1Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner1"
            />
            <Carousel.Caption className=" carousel-caption1 upperSpace sl1">
              <p>
                <Button variant="success">
                  <Link to="/Login" className="nav-link " aria-current="page">
                    Apply Now
                  </Link>
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              src={Slider2}
              data-src-mobile={Slider2Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner2"
            />
            <Carousel.Caption className="carousel-caption2 upperSpace">
              <p>
                <Button variant="success">
                  <Link to="/Login" className="nav-link " aria-current="page">
                    Apply Now
                  </Link>
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              src={Slider3}
              data-src-mobile={Slider3Mobile}
              className="bd-placeholder-img sliderImg img-fluid"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner3"
            />
            <Carousel.Caption className="carousel-caption3 upperSpace">
              <p>
                <Button variant="success">
                  <Link to="/Login" className="nav-link " aria-current="page">
                    Apply Now
                  </Link>
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
               src={Slider4}
               data-src-mobile={Slider4Mobile}
               className="bd-placeholder-img sliderImg img-fluid"
               width="100%"
               height="100%"
               aria-hidden="true"
               preserveAspectRatio="xMidYMid slice"
               focusable="false"
               alt="banner4"
            />
            <Carousel.Caption className="carousel-caption4 upperSpace">
              <p>
                <Button variant="success">
                  <Link to="/Login" className="nav-link " aria-current="page">
                    Apply Now
                  </Link>
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
         </Carousel>
      </Container>
    );
  }
}

export default Slider;
