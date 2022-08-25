import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SpacCat from "./Img/Space-Cat.png";
import "./news.css";

// what to do next
// deply app to heroku
// list skills used
//
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      img: [],
    };
  }

  todaysDate = (data) => {
    const d = new Date();
    console.log(d);
    console.log(data[0].post_date);
    return d;
  };
  buildList = (data) => {
    this.setState({ list: data });

    this.todaysDate(data);
  };
  getNews() {
    fetch("https://sleepy-lowlands-47115.herokuapp.com/news", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(this.buildList)
      .catch((err) => {
        console.log("error posting" + err);
      });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.getNews();
    this.interval = setInterval(() => {
      this.getNews();
    }, 4000);
  }
  render() {
    if (this.state.list.length > 0) {
      return (
        <article className="" id="news">
          <h2 className="my-5 text-center ">Band News</h2>
          <div className=" my-flex backing-thing">
            {this.state.list.length > 0 &&
              this.state.list
                .filter(
                  (x, index) =>
                    index < this.props.articlesDisplayed ||
                    this.props.articlesDisplayed === null
                )
                .map((element, index, array) => (
                  <div key={index} className="Card-Style">
                    <div>
                      <Card className="card-size">
                        <img
                          className="image-size"
                          variant="top"
                          src={element.post_image}
                          alt="name"
                        />
                        <Card.Body>
                          <Card.Title>{element.post_title}</Card.Title>
                          <Card.Text>
                            Post Date {element.post_date.substring(0, 10)}
                          </Card.Text>
                          <Card.Text>
                            {element.post_info.substring(0, 100)}. . .
                          </Card.Text>
                          <Button href="/news" variant="primary">
                            Read More &gt;
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
          </div>
        </article>
      );
    } else {
      return (
        <article className="" id="news">
          <h2 className="my-5 text-center ">Band News</h2>
          <div className=" my-flex backing-thing" style={{ height: "100vh" }}>
            <h3 style={{ color: "white" }} className="text-center">
              Comming Soon
            </h3>
            <div style={{"width": "100%"}}>
              <img src={SpacCat} alt="SpaceCat" style={{ height: "25%" }} />
            </div>
          </div>
        </article>
      );
    }
  }
}

export default News;
