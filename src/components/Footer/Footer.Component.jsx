import React from "react";
import './Footer.Styles.css'



const Footer = () => {
    return(
        <footer>
        <div className="container-flex">
        <div className="foot-left">
            <p> <span>aslantasezginn@gmail.com</span> </p>
        </div>

        <div className="foot-right">
            <ul>
                <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
        </div>



        </div>
         
        </footer>
    )
}

export default Footer