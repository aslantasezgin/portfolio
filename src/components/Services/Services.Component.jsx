import React from "react";
import './Services.Styles.css'
import ServicesCard from "../ServicesCard/ServicesCard.Component";



const Services = () => {
    return(
        <div className="services-bg">
            <div className="container-flex">
            <div className="services-title">
            <h2>Skills</h2>
            <h3>What I Do</h3>
            </div>

            <div className="services-boxes">
            <ServicesCard title="Javascript Development"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Cupiditate, nihil neque voluptatem architecto non dolorem amet dicta blanditiis quasi aliquid!"
             icon={"fa-brands fa-js"}
             />

            <ServicesCard title="React Development"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Cupiditate, nihil neque voluptatem architecto non dolorem amet dicta blanditiis quasi aliquid!"
             icon={"fa-brands fa-react"}
             />


             <ServicesCard title="PHP Development"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Cupiditate, nihil neque voluptatem architecto non dolorem amet dicta blanditiis quasi aliquid!"
             icon={"fa-brands fa-php"}
             />

<ServicesCard title="Html5 Development"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Cupiditate, nihil neque voluptatem architecto non dolorem amet dicta blanditiis quasi aliquid!"
             icon={"fa-brands fa-html5"}
             />


<ServicesCard title="Css3 Development"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Cupiditate, nihil neque voluptatem architecto non dolorem amet dicta blanditiis quasi aliquid!"
             icon={"fa-brands fa-css3"}
             />


<ServicesCard title="MySql Development"
             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Cupiditate, nihil neque voluptatem architecto non dolorem amet dicta blanditiis quasi aliquid!"
             icon={"fa-solid fa-database"}
             />
            </div>

            </div>
        </div>
    )
}


export default Services