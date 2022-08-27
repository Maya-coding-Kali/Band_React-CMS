import "./style.css";
function Breadcrumb() {
  return (
    <div className="my-nav-bar" >
      <div className="routes-bar">
        <a href="/">The Band {" | "}</a>
        {/* <a href="/Signup">Sign Up {" | "}</a> */}
        <a href="/" ><span  className="text-decoration-line-through "> Tour</span> {" | "}</a>
        <a href="/news">All News</a>
        <div style={{"float": "right", "margin-right": "100px"}}>
          <a href="https://cryptic-hollows-68550.herokuapp.com/" target={"blank"} >Admin Login</a>
        </div>
      </div>
      <nav className="my-inner-nav-bar" onClick={(event)=>{
          console.log(event.target)
    }}>
        <a className="nav-items active" href="#home">
          Home{" "}
        </a>

        <a className="nav-items active" href="#news">
          News{" "}
        </a>

        <a className="nav-items active" href="#about">
          About{" "}
        </a>
      </nav>
    </div>
  );
}

export default Breadcrumb;
