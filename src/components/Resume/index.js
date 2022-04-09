import React from "react";

import resumeLink from "../../assets/Resume.pdf";


function Resume(){
    return(
        <section id="service" className="parallax-section">
     <div className="container">
          <div className="row">

               <div className="bg-yellow col-md-3 col-sm-6 ">
                    <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                         <i className="fa fa-desktop"></i>
                              <h3 className="text-center">Resume</h3>
                              <a className="color-black"href={resumeLink} download>Download Resume Here</a>
                    </div>
               </div>

               <div className="background col-md-3 col-sm-6">
                    <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                         <i className="fa fa-paper-plane"></i>
                              <h3 className="text-center">Front-end Proficiencies</h3>
                              
                              <ul className="color-black">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>responsive design</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                    </div>
               </div>

               <div className="bg-dark col-md-3 col-sm-6">
                    <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                         <i className="fa fa-table"></i>
                              <h3 className="color-white text-center">Back-End Proficiencies</h3>
                              <ul className="color-white">
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                              </ul>
                    </div>
               </div>
          </div>
     </div>
</section>
        
    );
}

export default Resume

