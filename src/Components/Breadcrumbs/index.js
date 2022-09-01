import { useState, useEffect, useRef } from "react";
import { HashRouter, useNavigate, useLocation } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./style.css";
function Breadcrumbs() {
  const [isActive, setIsActive] = useState("home");
  const [offset, setOffset] = useState(0); 
  return (
    <div className="my-nav-bar">
      <div className="routes-bar">
        <a href="/">The Band {" | "}</a>
        {/* <a href="/Signup">Sign Up {" | "}</a> */}
        <a href="/">
          <span className="text-decoration-line-through "> Tour</span> {" | "}
        </a>
        <a href="/news">All News</a>
        <div style={{ float: "right", marginRight: "100px" }}>
          <a
            href="https://cryptic-hollows-68550.herokuapp.com/"
            target={"blank"}
          >
            Admin Login
          </a>
        </div>
      </div>
      <div className="my-inner-nav-bar">
        <a
          className={`nav-bread-items ${
            isActive === "home" ? "active" : ""
          } breadelement home`}
          href="#home"
          onClick={(e) => setIsActive("home")}
          onScroll={() => {}}
        >
          <h6> 	&#11165; </h6>
        </a>

      </div>
    </div>
  );
}

export default Breadcrumbs;
