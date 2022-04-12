import React from "react";
import projects from "../Project"
const Portfolio = () =>{
    return (
        <section className="bg-yellow ">
            <div className='padding'>
            <h1>Portfolio</h1>
            </div>
            <p></p>
            <div className="flex-row justify-content-around container2">
                {projects.map((project) => (
                    <div key={project.title} className='m-3 p-3 rounded shadow-lg '>
                        <h2>{project.title}</h2>
                        <p className='font'>{project.description}</p>
                        <a href = {project.liveLink}>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className='img'
                        />
                        </a>
                        <div id="btn" className="button">
                        <form action={project.repoLink}>
                            <input type="submit" value="GitHub Repo" />
                        </form>
                        
                            {/* <a href={project.repoLink} className='hover'>GitHub Repo Link</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;