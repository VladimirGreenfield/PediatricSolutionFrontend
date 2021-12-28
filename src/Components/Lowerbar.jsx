import React from "react";
import './Lowerbar.css';


function Lowerbar () {
    return(
        <div className="lowerbar">       
            <div className="lowerbarItems">
                <button className="text" href="#">Appointments</button>
                <button className="text" href="#">Register</button>
                <button className="text" href="#">About Us</button>
                <input className="searchInput" type="text" placeholder="Search"/>
            </div>       
        </div>
    )
}

export default Lowerbar;