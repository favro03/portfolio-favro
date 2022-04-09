function Portfolio() {
    const projects = [
        {
            title: 'Feed Me',
            description: 'Express/Handlebars/Cloudinary',
            liveLink: 'https://stark-wave-09776.herokuapp.com/',
            repoLink: 'https://github.com/favro03/project-feedme',
            image: require('../../assets/images/Feed-Me.png')
        },
        {
            title: 'Word Facts',
            description: 'HTML/CSS/APIs',
            liveLink: 'https://favro03.github.io/project-word-facts/',
            repoLink: 'https://github.com/favro03/project-word-facts',
            image: require('../../assets/images/WordFactsdefault.png')
        },
        {
            title: 'Weather Dashboard',
            description: 'JS/Bootstrap/APIs',
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
            description: 'CMS',
            liveLink: 'https://sheltered-plains-06110.herokuapp.com/',
            repoLink: 'https://github.com/favro03/CMS-style-blog-site',
            image: require('../../assets/images/techBlog.png')
        },
        {
            title: 'Scheduler',
            description: 'HTML/CSS/JS/jQuery',
            liveLink: 'https://favro03.github.io/work-day-scheduler/',
            repoLink: 'https://github.com/favro03/work-day-scheduler',
            image: require('../../assets/images/Scheduler.png')
        },
        {
            title: 'Timed Quiz',
            description: 'HTML/CSS/JS',
            liveLink: 'https://favro03.github.io/timed-javascript-quiz/',
            repoLink: 'https://github.com/favro03/timed-javascript-quiz',
            image: require('../../assets/images/Quiz.png')
        },
        {
            title: 'Run Buddy',
            description: 'HTML/CSS',
            liveLink: 'https://favro03.github.io/run-buddy/',
            repoLink: 'https://github.com/favro03/run-buddy',
            image: require('../../assets/images/runbuddy.png')
        },
        {
            title: 'E-commerce Back-end',
            description: 'ORM/MySQL/Express/Sequelize/dotenv',
            liveLink: 'https://www.awesomescreenshot.com/video/7584462?key=d8b743ccce6df41d68073eb18607559d',
            repoLink: 'https://github.com/favro03/e-commerce-back-end',
            image: require('../../assets/images/ecommerce.png')
        },
        {
            title: 'Note Taker',
            description: 'Express.js/JSON',
            liveLink: 'https://shrouded-woodland-03211.herokuapp.com/ ',
            repoLink: 'https://github.com/favro03/note-taker',
            image: require('../../assets/images/NoteTaker2.png')
        },
        {
            title: 'Employee Tracker',
            description: 'command-line/Node.js/Inquirer/MySQL',
            liveLink: 'https://www.awesomescreenshot.com/video/7486305?key=593b1baa13e6fb8ce6a13fd20aca10c7',
            repoLink: 'https://github.com/favro03/employee-tracker',
            image: require('../../assets/images/employeeTrackerApp.png')
        },
        {
            title: 'Password Generator',
            description: 'JS/CSS/HTML',
            liveLink: 'https://favro03.github.io/password-generator/',
            repoLink: 'https://github.com/favro03/password-generator',
            image: require('../../assets/images/passwordgenerator.png')
        },
        {
            title: 'README Generator',
            description: 'node.js/command line',
            liveLink: 'https://www.awesomescreenshot.com/video/7088888?key=bcd79393d3afcb4e0f7bd7776be1b1fe',
            repoLink: 'https://github.com/favro03/readme-generator',
            image: require('../../assets/images/commandLinePrompts.png')
        },
        {
            title: 'Social Network API',
            description: 'Express.js/MongoDB/Mongoose',
            liveLink: 'https://www.awesomescreenshot.com/video/8123786?key=ec9fc38ba86b473e8dddadd0762b54dc',
            repoLink: 'https://github.com/favro03/Social-Network-API',
            image: require('../../assets/images/SocialNetwork.png')
        },
        {
            title: 'Team Profile Generator',
            description: 'Command-line/HTML/CSS',
            liveLink: 'https://www.awesomescreenshot.com/video/7217784?key=62185f14fde5bdc574edd0c2ecc83ba9',
            repoLink: 'https://github.com/favro03/team-profile-generator',
            image: require('../../assets/images/TeamProfile.png')
        }
        
        
    ]

    return (
        <section className="bg-yellow">
            <h1 >Portfolio</h1>
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
                        <div className="m-3 space">
                            <a href={project.repoLink} className='hover'>GitHub Repo Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;