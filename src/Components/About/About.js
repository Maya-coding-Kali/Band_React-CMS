import Erica from "./people-2588886.jpg";
import Steve from "./guitar-5043613_1280.jpg";
import Jake from "./jazz-1658886.jpg";
import Alice from "./guitar-4042209.jpg";
import "./About.css";
import { useState } from "react";
import "animate.css";
function About() {
  const [firstScroll, setfirstScroll] = useState(0);
  return (
    <article className="">
      <div>
        <h1
          id="about"
          className="text-center m-5 font-size text-decoration-underline"
        >
          The Band!!
        </h1>
      </div>
      <div
        className="Content-Container  shadow-sm"
        onScroll={window.addEventListener("scroll", (event) => {
          if (firstScroll === 0) {
            document.querySelector(
              ".Content-Container"
            ).style.transition = `opacity 5s`;
          }
          setfirstScroll(1);
        })}
      >
        <div className="image-holder">
          <div
            className=" Img"
            style={{ backgroundImage: `url(${Steve})` }}
          ></div>
        </div>
        <div className=" text-center text-width">
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat
            nam at lectus. Diam donec adipiscing tristique risus nec feugiat in
            fermentum. Mauris pharetra et ultrices neque ornare aenean euismod
            elementum nisi. Ligula ullamcorper malesuada proin libero nunc.
            Justo donec enim diam vulputate ut pharetra sit amet. Aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
            Sit amet mattis vulputate enim nulla aliquet. Id donec ultrices
            tincidunt arcu. Lobortis mattis aliquam faucibus purus. Nibh mauris
            cursus mattis molestie a iaculis at. A pellentesque sit amet
            porttitor eget. Cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin aliquam. At volutpat diam ut venenatis tellus in metus
            vulputate eu. Odio eu feugiat pretium nibh ipsum. Ut aliquam purus
            sit amet luctus. Quam vulputate dignissim suspendisse in est ante in
            nibh mauris. Molestie at elementum eu facilisis sed odio.
            Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum odio. At tellus at urna condimentum mattis pellentesque id
            nibh. Enim neque volutpat ac tincidunt vitae semper. Arcu odio ut
            sem nulla. Commodo elit at imperdiet dui accumsan. Semper feugiat
          </p>
        </div>
      </div>
      <div
        className="Content-Container shadow-sm"
        style={{ flexDirection: "row-reverse" }}
      >
        <div className="image-holder">
          <div
            className="Img"
            style={{ backgroundImage: `url(${Erica})` }}
          ></div>
        </div>
        <div className="p-0 text-center text-width ">
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat
            nam at lectus. Diam donec adipiscing tristique risus nec feugiat in
            fermentum. Mauris pharetra et ultrices neque ornare aenean euismod
            elementum nisi. Ligula ullamcorper malesuada proin libero nunc.
            Justo donec enim diam vulputate ut pharetra sit amet. Aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
            Sit amet mattis vulputate enim nulla aliquet. Id donec ultrices
            tincidunt arcu. Lobortis mattis aliquam faucibus purus. Nibh mauris
            cursus mattis molestie a iaculis at. A pellentesque sit amet
            porttitor eget. Cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin aliquam. At volutpat diam ut venenatis tellus in metus
            vulputate eu. Odio eu feugiat pretium nibh ipsum. Ut aliquam purus
            sit amet luctus. Quam vulputate dignissim suspendisse in est ante in
            nibh mauris. Molestie at elementum eu facilisis sed odio.
            Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum odio. At tellus at uruccessna condimentum mattis
            pellentesque id nibh. Enim neque volutpat ac tincidunt vitae semper.
            Arcu odio ut sem nulla. Commodo elit at imperdiet dui accumsan.
            Semper feugiat
          </p>
        </div>
      </div>
      <div className="Content-Container shadow-sm">
        <div className="image-holder">
          <div
            className=" Img"
            style={{ backgroundImage: `url(${Jake})` }}
          ></div>
        </div>
        <div className=" text-center text-width ">
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat
            nam at lectus. Diam donec adipiscing tristique risus nec feugiat in
            fermentum. Mauris pharetra et ultrices neque ornare aenean euismod
            elementum nisi. Ligula ullamcorper malesuada proin libero nunc.
            Justo donec enim diam vulputate ut pharetra sit amet. Aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
            Sit amet mattis vulputate enim nulla aliquet. Id donec ultrices
            tincidunt arcu. Lobortis mattis aliquam faucibus purus. Nibh mauris
            cursus mattis molestie a iaculis at. A pellentesque sit amet
            porttitor eget. Cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin aliquam. At volutpat diam ut venenatis tellus in metus
            vulputate eu. Odio eu feugiat pretium nibh ipsum. Ut aliquam purus
            sit amet luctus. Quam vulputate dignissim suspendisse in est ante in
            nibh mauris. Molestie at elementum eu facilisis sed odio.
            Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum odio. At tellus at urna condimentum mattis pellentesque id
            nibh. Enim neque volutpat ac tincidunt vitae semper. Arcu odio ut
            sem nulla. Commodo elit at imperdiet dui accumsan. Semper feugiat
          </p>
        </div>
      </div>
      <div
        className="Content-Container shadow-sm"
        style={{ flexDirection: "row-reverse" }}
      >
       <div className="image-holder">
        <div
          className=" Img"
          style={{ backgroundImage: `url(${Alice})` }}
        ></div>
        </div>
        <div className="p-0 text-center text-width ">
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat
            nam at lectus. Diam donec adipiscing tristique risus nec feugiat in
            fermentum. Mauris pharetra et ultrices neque ornare aenean euismod
            elementum nisi. Ligula ullamcorper malesuada proin libero nunc.
            Justo donec enim diam vulputate ut pharetra sit amet. Aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
            Sit amet mattis vulputate enim nulla aliquet. Id donec ultrices
            tincidunt arcu. Lobortis mattis aliquam faucibus purus. Nibh mauris
            cursus mattis molestie a iaculis at. A pellentesque sit amet
            porttitor eget. Cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin aliquam. At volutpat diam ut venenatis tellus in metus
            vulputate eu. Odio eu feugiat pretium nibh ipsum. Ut aliquam purus
            sit amet luctus. Quam vulputate dignissim suspendisse in est ante in
            nibh mauris. Molestie at elementum eu facilisis sed odio.
            Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum odio. At tellus at uruccessna condimentum mattis
            pellentesque id nibh. Enim neque volutpat ac tincidunt vitae semper.
            Arcu odio ut sem nulla. Commodo elit at imperdiet dui accumsan.
            Semper feugiat
          </p>
        </div>
      </div>
    </article>
  );
}

export default About;
