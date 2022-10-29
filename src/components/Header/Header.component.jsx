import React from "react";
import './Header.styles.css'


const Header = () => {
    return(
       <div className="header">
        <div className="container-flex">
        <div className="logo-box"> <h2>Sezgin Aslantaş</h2> </div>
        <div className="nav-list"> 
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>
        </div>
       </div>
    )
}

export default Header