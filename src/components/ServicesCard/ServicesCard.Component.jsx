import React from "react";
import './ServicesCard.Styles.css'

const ServicesCard = (props) =>{
    return(
        <div className="ServiceCard">
        <div className="service-icon"><i class={props.icon}></i></div>
        <div className="service-text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </div>
    )
}

export default ServicesCard