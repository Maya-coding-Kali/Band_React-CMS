import "./style.css";
function Breadcrumb() {
  return (
    <div className="my-nav-bar">
      <div className="routes-bar">
        <a href="/">The Band {" | "}</a>
        <a href="/Signup">Sign Up {" | "}</a>
        <a href="/">Tour {" | "}</a>
        <a href="/">Whats Happening </a>
        <div style={{"float": "right", "margin-right": "100px"}}>
          <a href="https://cryptic-hollows-68550.herokuapp.com/" target={"blank"} >Admin Login</a>
        </div>
      </div>
      <nav className="my-inner-nav-bar">
        <a className="nav-items" href="#home">
          Home{" "}
        </a>

        <a className="nav-items" href="#news">
          News{" "}
        </a>

        <a className="nav-items" href="#about">
          About{" "}
        </a>
      </nav>
    </div>
  );
}

export default Breadcrumb;
