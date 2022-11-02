import React from "react";
import './PortfolioCard.Styles.css'


const PortfolioCard=(props)=>{
    return(
        <div data-aos="fade-left" data-aos-duration="1500" className="portfolio-card">
            <div className="portfolio-logo">
            <img src={props.image} alt="" /></div>

        </div>
    )
}

export default PortfolioCard