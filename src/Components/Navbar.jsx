import React from "react";
import './Navbar.css';


function Navbar () {
    return(
        <div className="navbar">       
            <div className="navbarItems">
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Login</a>
            </div>       
        </div>
    )
}

export default Navbar;