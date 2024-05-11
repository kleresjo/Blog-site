import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
    return (
    <nav>
    <div className="link">
    <Link to="/"><h1>Blog site</h1></Link>
     <ToggleButton />
    </div>
      <div className="links">
        <Link to="/">Hem</Link>
        <Link to="/Blogg">Blogg</Link>
        <Link to="/My-Account"><button className="Navbtn">Mitt konto</button></Link>
      </div>
    </nav>
    );
}

export default Navbar;