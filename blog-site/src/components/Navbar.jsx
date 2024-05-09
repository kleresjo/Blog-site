import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav>
    <div>
    <h1>Blog site</h1>
    </div>
      <ul>
        <Link to="/">Hem</Link>
        <Link to="/Blogg">Blogg</Link>
      </ul>
    </nav>
    );
}

export default Navbar;