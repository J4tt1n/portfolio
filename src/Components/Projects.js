import React, {useState} from 'react'
import '../App.css'
import ProjectCards from './ProjectCards';


const Projects = () => {

    const [opened, setDirection] = useState(0)
    const projects = [
        {
            id: 1, 
            title: 'Detection of Parkinson\'s Disease using Machine Learning',
            duration: 'Aug \'22 - Oct \'22',
            desc: 'Implementing machine learning to predict the presence or future development of Parkinson’s disease, enabling individuals to proactively take precautions and mitigate its impact with an accuracy exceeding 91%.',
            link: 'https://github.com/J4tt1n/Detection_of_Parkinson-s_disease_using_Maching_Learning'
        }, 
        {
            id: 2,
            title: 'Wordle Solving Bot using AI',
            duration: 'Mar \'22 - Oct \'22',
            desc: 'Developed a Python bot designed to assist players in solving the popular word puzzle game, Wordle. The bot enhances efficiency and success rates by providing intelligent word hints and guesses, achieving an overall accuracy with a minimum number of tries at 4.92.',
            link: 'https://github.com/J4tt1n/Wordle-Solving-Bot-using-AI',
            
        },
        {
            id: 3,
            title: 'AI Mindscape: Emotional Detection for Mental Health Chatbots',
            duration: 'Sep \'23 - Nov \'23',
            desc: 'Integrating machine learning and natural language processing to assess individuals\' moods based on provided prompts, offering valuable insights to support mental health with detecting accuracy > 87%.',
            link: ''
        },
        {
            id: 4, 
            title: 'Driver Drowsiness Detection Device',
            duration: 'Aug \'23 - Oct \'23',
            desc: 'Engineered a hardware device designed to be attached to a driver’s spectacles while driving a vehicle. The device actively detects signs of drowsiness and promptly alerts the driver through a buzzing alarm, effectively preventing potential accidents.',
            link: ''
        }
    ]

    const cardValues = projects.map((project) => 
        <ProjectCards  id={project.id} title={project.title} duration={project.duration} description={project.desc} link={project.link}></ProjectCards> 
    )
    
    return <div className='about main-container-4' id='projects'>
        <div>&nbsp;</div>
        <div className='name2'><h2>Take a look at my recent projects</h2></div>
        <div className='projects container'>
            {cardValues}
        </div>
        
    </div>
}

export default Projects;