import React from "react";
import './Portfolio.Styles.css'
import PortfolioCard from "../PortfolioCards/PortfolioCard.Component";

const Portfolio = () => {
    return(
        <div className="portfolio">
            <div className="container-flex">

            <div  className="portfolio-title">
                <h2>PORTFOLIO</h2>
            </div>

            <div className="portfolio-cards">
          
            <PortfolioCard image="https://res.cloudinary.com/practicaldev/image/fetch/s--5yuHmkYZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bqh7szmq6e917xfa1lod.jpg"></PortfolioCard>
            <PortfolioCard image="http://unblast.com/wp-content/uploads/2019/07/Supreme-Startups-Landing-Page-Template.jpg"></PortfolioCard>
            <PortfolioCard image="https://designsmaz.com/wp-content/uploads/2015/09/Free-HTML-Landing-Page-Templates-2016.jpg"></PortfolioCard>
            <PortfolioCard image="https://d30itml3t0pwpf.cloudfront.net/wp-content/themes/wishpond/images/home/phone-and-ipad-ipad.jpg"></PortfolioCard>
            <PortfolioCard image="https://utemplates.net/wp-content/uploads/2021/11/Pasted-into-landing-page-HTML-Template-7.png"></PortfolioCard>
            <PortfolioCard image="https://www.easeout.co/images/uploads/laurel.jpg"></PortfolioCard>
            <PortfolioCard image="https://www.easeout.co/images/uploads/leno.jpg"></PortfolioCard>
            <PortfolioCard image="https://themewagon.com/wp-content/uploads/2021/11/chain.png"></PortfolioCard>


            </div>

            </div>
        </div>
    )
}


export default Portfolio