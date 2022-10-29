import React from "react";
import './Portfolio.Styles.css'
import PortfolioCard from "../PortfolioCards/PortfolioCard.Component";

const Portfolio = () => {
    return(
        <div className="portfolio">
            <div className="container-flex">

            <div className="portfolio-title">
                <h2>PORTFOLIO</h2>
            </div>

            <div className="portfolio-cards">
          
            <PortfolioCard image="https://www.emirhanis.com.tr/assets/img/logo.png"></PortfolioCard>
            <PortfolioCard image="https://www.rebeelconstruction.com/assets/img/logo-3.png"></PortfolioCard>
            <PortfolioCard image="https://www.pelikanpergola.com/assets/img/logo-5.png"></PortfolioCard>
            <PortfolioCard image="https://www.makrosertekstil.com/assets/img/logo.png"></PortfolioCard>
            <PortfolioCard image="https://www.emirhanis.com.tr/assets/img/logo.png"></PortfolioCard>
            <PortfolioCard image="https://www.rebeelconstruction.com/assets/img/logo-3.png"></PortfolioCard>
            <PortfolioCard image="https://www.pelikanpergola.com/assets/img/logo-5.png"></PortfolioCard>
            <PortfolioCard image="https://www.makrosertekstil.com/assets/img/logo.png"></PortfolioCard>

            </div>

            </div>
        </div>
    )
}


export default Portfolio