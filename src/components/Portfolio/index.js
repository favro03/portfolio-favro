function Portfolio() {
    const projects = [
        {
            title: 'Feed Me',
            description: 'HTML/CSS',
            liveLink: 'https://stark-wave-09776.herokuapp.com/',
            repoLink: 'https://github.com/favro03/project-feedme',
            image: require('../../assets/images/Feed-Me.png')
        },
        {
            title: 'Word Facts',
            description: 'HTML/CSS',
            liveLink: 'https://favro03.github.io/project-word-facts/',
            repoLink: 'https://github.com/favro03/project-word-facts',
            image: require('../../assets/images/WordFactsdefault.png')
        },
        {
            title: 'Weather Dashboard',
            description: 'HTML/CSS',
            liveLink: 'https://favro03.github.io/weather-dashboard/',
            repoLink: 'https://github.com/favro03/weather-dashboard',
            image: require('../../assets/images/WeatherDashboard.png')
        },
        {
            title: 'Budget Tracker',
            description: 'PWA',
            liveLink: 'https://mighty-temple-08241.herokuapp.com/',
            repoLink: 'https://github.com/favro03/budget-tracker-PWA',
            image: require('../../assets/images/PWAbudgetTracker.png')
        },
        {
            title: 'Tech Blog',
            description: 'PWA',
            liveLink: 'https://sheltered-plains-06110.herokuapp.com/',
            repoLink: 'https://github.com/favro03/CMS-style-blog-site',
            image: require('../../assets/images/techBlog.png')
        },
        {
            title: 'Scheduler',
            description: 'PWA',
            liveLink: 'https://favro03.github.io/work-day-scheduler/',
            repoLink: 'https://github.com/favro03/work-day-scheduler',
            image: require('../../assets/images/Scheduler.png')
        }
        
        
    ]

    return (
        <div>
            <h1 >Portfolio</h1>
            <p></p>
            <div className="flex-row justify-content-around container ">
                {projects.map((project) => (
                    <div key={project.title} className='m-3 p-3 rounded shadow-lg '>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href = {project.liveLink}>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className='img'
                        />
                        </a>
                        <div className="m-3 space">
                            {/* <a href={project.liveLink} className='text-decoration-none'>Deployed Link</a>
                            <br></br> */}
                            <a href={project.repoLink} className='text-decoration-none'>GitHub Repo Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
// import React from "react";
// import ProjectList from "../ProjectList";

// function Portfolio(props) {
//   return (
//     <section>
//         <h1>Portfolio</h1>
//       <div className="flex-row">
//         <ProjectList
//           image={require("../../assets/images/Feed-Me.png")}
//           title="Feed Me"
//           appLink=""
//           repoLink=""
//         ></ProjectList>
//         <ProjectList
//           image={require("../../assets/images/PWAbudgetTracker.png")}
//           title="Budget Tracker"
//           appLink=""
//           repoLink=""
//         ></ProjectList>
//         <ProjectList
//           image={require("../../assets/images/Scheduler.png")}
//           title="Scheduler"
//           appLink=""
//           repoLink=""
//         ></ProjectList>
//         <ProjectList
//           image={require("../../assets/images/techBlog.png")}
//           title="Tech Blog"
//           appLink=""
//           repoLink=""
//         ></ProjectList>
//         <ProjectList
//           image={require("../../assets/images/WeatherDashboard.png")}
//           title="Weather Dashboard"
//           appLink=""
//           repoLink=""
//         ></ProjectList>
//         <ProjectList
//           image={require("../../assets/images/WordFactsdefault.png")}
//           title="WOrd Facts"
//           appLink=""
//           repoLink=""
//         ></ProjectList>
        
//       </div>
//     </section>
//   );
// }

// export default Portfolio;
// import React from 'react';
// import ProjectListList from '../ProjectListList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Portfolio(props) {
//   const { currentCategory } = props;
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.description}</p>
//       <ProjectListList category={currentCategory.name} />
//     </section>
//   );
// }
// export default Portfolio;