import React from "react";
import './About.Styles.css';


const About = () => {
return(
    <div className="about-area" >
    <div className="container-flex">

        <div className="about-text" data-aos="fade-left" data-aos-duration="1400">
        <h2 >About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at vel explicabo mollitia libero culpa ullam quam vitae molestias temporibus quasi voluptas, obcaecati itaque nemo illum ipsam, quos pariatur necessitatibus eligendi earum quaerat dolores nostrum est! Fugiat excepturi laborum minus maxime? Sed incidunt odio laborum ipsa eaque. Laborum, explicabo quo.</p>
        
        <div className="about-bottom">
        <div className="about-img"><img src="https://media-exp1.licdn.com/dms/image/D4D03AQEqZPnoOuatZg/profile-displayphoto-shrink_800_800/0/1662541198209?e=1672876800&v=beta&t=uGk3flHBNzeCoijifXYmypycQqfstN5OxmsRyQdwPAg" alt="" /></div>
        <p>Sezgin Aslantaş | <span>Frontend Developer</span></p>
        </div>
        
        <a className="downloadcv"  href="#">Download CV</a>    


        </div>
    </div>
    </div>
)
}

export default About