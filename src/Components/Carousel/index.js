import Carousel from "react-bootstrap/Carousel";
import guitar from "./guitar-1928322.jpg";
import band from "./audience-1868137.jpg";
import GuitarWoman from "./guitar-1030597.jpg";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./style.css";
function CarouselHeader() {
  return (
    <Carousel id="home">
      <Carousel.Item className="overlay ">
        <img
          className="d-block w-100 my-image-size"
          src={guitar}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Music Sweet Music</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <NavLink to="/SignUp">
            <Button
              className="px-5 "
              type=""
              variant="success"
              onClick={console.log("YEs")}
            >
              Sign Up
            </Button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <Carousel.Caption>
          <h1 className="shadow-sm">The Band!!!</h1>
        </Carousel.Caption> */}

        <img
          className="d-block w-100 my-image-size"
          src={GuitarWoman}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Country Bumpkin</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <NavLink to="/SignUp">
            <Button
              className="px-5 "
              variant="success"
              onClick={console.log("YEs")}
            >
              Sign Up
            </Button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 my-image-size"
          src={band}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fame On the Rise</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <NavLink to="/SignUp">
            <Button
              className="px-5 "
              variant="success"
              onClick={console.log("YEs")}
            >
              Sign Up
            </Button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
