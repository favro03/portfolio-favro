import React from "react";

import resumeLink from "../../assets/Resume.pdf";


function Resume(){
    return(
        <section id="service" classN="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-3 col-sm-6">
                    <div class="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                         <i class="fa fa-desktop"></i>
                              <h3>Resume</h3>
                              <a class="color-black"href={resumeLink} download>Download Resume Here</a>
                    </div>
               </div>

               <div class="background col-md-3 col-sm-6">
                    <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                         <i class="fa fa-paper-plane"></i>
                              <h3>Front-end Proficiencies</h3>
                              
                              <ul class="color-black">
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

               <div class="bg-dark col-md-3 col-sm-6">
                    <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                         <i class="fa fa-table"></i>
                              <h3 className="color-white">Back-End Proficiencies</h3>
                              <ul class="color-white">
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
        // <section className="hero my-5">
        //    <div lassName="container-fluid">
        //     <h1>Resume</h1>
        //     {/* <img src={resumeImage} className="my-2" style={{ width: "100%" }} alt="Resume"  /> */}
        //      <a href={resumeLink} download>Download Resume Here</a>
        //    </div>
        //    <div>
        //        <ul>
        //            <h3>Front-end Proficiencies</h3>
        //            <li>HTML</li>
        //            <li>CSS</li>
        //            <li>JavaScript</li>
        //            <li>JQuery</li>
        //            <li>responsive design</li>
        //            <li>React</li>
        //            <li>Bootstrap</li>
        //        </ul>
        //        <ul>
        //            <h3>Back-End Proficiencies </h3>
        //            <li>APIs</li>
        //            <li>Node</li>
        //            <li>Express</li>
        //            <li>MySQL, Sequelize</li>
        //            <li>MongoDB, Mongoose</li>
        //            <li>REST</li>
        //            <li>GraphQL</li>
        //        </ul>
        //    </div>
        // </section>

    );
}

export default Resume

