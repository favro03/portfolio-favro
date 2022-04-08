import React from "react";
import heroImage from "../../assets/hero.jpg";

function About(){

    return(
        <section id="home" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-6">
                    <div class="home-img"></div>
               </div>

               <div class="col-md-6 col-sm-6">
                    <div class="home-thumb">
                         <div class="section-title">
                              <h4 class="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
                              <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Stimulus</strong> currently based in New York city.</h1>
                              <p class="wow fadeInUp" data-wow-delay="0.9s">Donec auctor arcu at efficitur lacinia. Praesent bibendum efficitur ipsum, et mattis tellus interdum in. Ut a dictum purus. Vestibulum non pellentesque felis, sed dignissim urna. Vestibulum id accumsan quam.</p>
                              
                              <a href="#about" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>
                              
                         </div>
                    </div>
               </div>


          </div>
     </div>
</section>
        // <section className="hero my-5">
        //     <h1>About Me</h1>
        //     {/* <img src={heroImage} className="my-2" style={{ width: "100%" }} alt="hero"  /> */}
        //     <div className="my-2">
        //             <p>
        //             I am a Information Security professional with nine years industry experience and thirteen years project management experience. 
        //             Highly skilled in risk assessment, risk management, and risk analysis. <br></br><br></br>
                    
        //             Knowledge of industry standard risk analysis tools and methodology. Pre and post data breach experience. <br></br>
        //             Skills include C++, Python, git, HTML, css, and JavaScript. 
                    
        //         </p>
        //     </div>
        // </section>
    )
}
export default About;