import React from "react";
import Carousel from "../Carousel/index.js";
import About from "../About/About.js";
import Nav from "../Nav/index.js";
import News from "../News/News";

const Home = ({getIndex}) => {
  return (
    <div>
      <Nav />
      <Carousel />
      <News articlesDisplayed={4} getIndex={getIndex}  />
      <About />
    </div>
  );
};

export default Home;
