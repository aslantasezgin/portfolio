import React  from "react";
import './Header.styles.css'
import { useEffect, useState } from 'react';


const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header');
                const scrollTop = window.scrollY;
                scrollTop >= 50 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };

    return(
       <div className="header">
        <div className="container-flex">
        <div className="logo-box"> <h2>Sezgin Aslantaş</h2> </div>
        <div className="nav-list"> 
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>
        </div>
       </div>
    )
}

export default Header