import React from "react";
import Carousel from "../Carousel/index.js";
import About from "../About/About.js";
import Breadcrumbs from "../Breadcrumbs/index.js";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <Breadcrumbs />
      <Carousel />
      <News articlesDisplayed={4} />
      <About />
    </div>
  );
};

export default Home;
