import React, {useState} from 'react'
import '../App.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import ProjectCards from './ProjectCards';


const Projects = () => {

    const [opened, setDirection] = useState(0)
    const projects = [
        {
            id: 1, 
            title: 'Detection of Parkinson\'s Disease using Machine Learning',
            duration: 'Aug \'22 - Oct \'22',
            desc: 'A project using machine learning to detect if a person has or will have Parkinson\'s disease in future or not so that the person can take necessary precautions and delay its effect.',
            link: 'https://github.com/J4tt1n/Detection_of_Parkinson-s_disease_using_Maching_Learning'
        }, 
        {
            id: 2,
            title: 'Wordle Solving Bot using AI',
            duration: 'Mar \'22 - Oct \'22',
            desc: 'A bot that helps to solve Wordle in minimum number of tries by giving the most prpbable hints. The accuracy of minimum number of tries is 4.92',
            link: 'https://github.com/J4tt1n/Wordle-Solving-Bot-using-AI',
            
        },
        {
            id: 3,
            title: 'AI Mindscape: Emotional Detection for Mental Health Chatbots',
            duration: 'Sep \'23 - Nov \'23',
            desc: 'A project using machine learning and natural language processing to detect the mood of the person using the prompt given by them to help them with their mental health.',
            link: '#'
        },
        {
            id: 4, 
            title: 'Driver Drowsiness Detection Device',
            duration: 'Aug \'23 - Oct \'23',
            desc: 'In this project, we build a hardware device that gets attached to a driver\'s spectacles while driving a vehicle. The device alerts the driver if he/she has fallen asleep while driving by buzzing an alarm resulting in waking up of the driver thus reducing chances of accidents.',
            link: '#'
        }
    ]

    let direction, displayCards
    const cardValues = projects.map((project) => 
        <ProjectCards  id={project.id} title={project.title} duration={project.duration} description={project.desc} link={project.link}></ProjectCards> 
    )
    
    return <div className='about' id='projects'>
        <div>&nbsp;</div>
        <div className='name2'>Take a look at my recent projects</div>
        <div className='projects container'>
            {cardValues}
        </div>
        
    </div>
}

export default Projects;