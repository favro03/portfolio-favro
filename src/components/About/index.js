import React from "react";
import heroImage from "../../assets/hero.jpg";

function About(){

    return(
        <section id="home" className="parallax-section">
             
               <div className="container">
                    
                    <div className="row">
                         

                         <div className="col-md-6 col-sm-6">
                              
                              <div className ="home-img">    
                                   <div className="hero-cta section-title ">
                                        
                                        <div className="text-right ">
                                        <h1>About Me</h1>
                                        <p>I am a Information Security professional with ten years industry experience and fourteen years project management experience. 
                                        Highly skilled in risk assessment, risk management, and risk analysis. <br></br><br></br>
                                        
                                        Knowledge of industry standard risk analysis tools and methodology. Pre and post data breach experience. <br></br><br></br>

                                        New full stack developer with knowldge in css, html, express, node.js, mongoDB and mySQL.
                                        </p>
                                        </div>
                                        
                                   </div>
                              </div>
                              
                         </div>
                    </div>
               </div>
          </section>
       
    )
}
export default About;