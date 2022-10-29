import React from "react";
import './Slider.styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Slider = () => {
    return(
        <div className="slider" >
        <div className="slider-text"><h2> I develop <span> frontend pages </span></h2></div>
        <div className="slider-bottom">
            <div className="container-flex">
                <div className="slider-mail">
                    <p>E-Mail: <span>aslantasezginn@gmail.com</span></p>
                    <p>Phone: <span>+90 531 564 06 32</span></p>

                </div>
                <div className="slider-content">
                <p>Hello, I’m <span>Sezgin Aslantaş</span> , UX/UI Designer and
               Front-end Developer Based in Istanbul.</p>    
                 </div>      

                 <div className="slider-contact">
                  <h3>Follow Me</h3>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                 </div>     
            </div>
        </div>
        </div>
    )
}

export default Slider