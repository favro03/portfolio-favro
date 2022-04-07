import React from "react";
import resumeImage from "../../assets/Resume.png";
import resumeLink from "../../assets/Resume.pdf";


function Resume(){
    return(
        <section className="hero my-5">
            <div lassName="container-fluid">
            <h1>Resume</h1>
            {/* <img src={resumeImage} className="my-2" style={{ width: "100%" }} alt="Resume"  /> */}
           <a href={resumeLink} download>Download Resume Here</a>
           </div>
           <div>
               <ul>
                   <h3>Front-end Proficiencies</h3>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>JavaScript</li>
                   <li>JQuery</li>
                   <li>responsive design</li>
                   <li>React</li>
                   <li>Bootstrap</li>
               </ul>
               <ul>
                   <h3>Back-end Proficiencies </h3>
                   <li>APIs</li>
                   <li>Node</li>
                   <li>Express</li>
                   <li>MySQL, Sequelize</li>
                   <li>MongoDB, Mongoose</li>
                   <li>REST</li>
                   <li>GraphQL</li>
               </ul>
           </div>
        </section>

    );
}

export default Resume

