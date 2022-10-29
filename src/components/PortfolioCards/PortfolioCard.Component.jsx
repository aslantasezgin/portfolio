import React from "react";
import './PortfolioCard.Styles.css'

const PortfolioCard=(props)=>{
    return(
        <div className="portfolio-card">
            <div className="portfolio-logo">
            <img src={props.image} alt="" /></div>
            <div className="portfolio-text">
                <p>Html5, Css3, Javascript, React</p>
            </div>
        </div>
    )
}

export default PortfolioCard