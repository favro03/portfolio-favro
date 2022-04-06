import React from "react";
import heroImage from "../../assets/hero.jpg";

function About(){

    return(
        <section className="my-5">
            <h1>About Me</h1>
            <img src={heroImage} className="my-2" style={{ width: "100%" }} alt="hero"  />
            <div className="my-2">
                    <p>
                    I am a Information Security professional with nine years industry experience and thirteen years project management experience. 
                    Highly skilled in risk assessment, risk management, and risk analysis. <br></br><br></br>
                    
                    Knowledge of industry standard risk analysis tools and methodology. Pre and post data breach experience. <br></br>
                    Skills include C++, Python, git, HTML, css, and JavaScript. 
                    
                </p>
            </div>
        </section>
    )
}
export default About;