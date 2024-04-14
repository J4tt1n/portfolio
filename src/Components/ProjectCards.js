import React from 'react'
import '../App.css'

const ProjectCards = (props) =>
{   
    return <div className={`${'project-' + (props.id)} card`}>
        <div className='project-card-content'>
            <div className='project-title'>{props.title}</div>
            <div className='project-date'>{props.duration}</div>
            <div className='project-content'>{props.description}</div>
        </div>
        <div><a href={props.link} className='project-extra' rel='noopener noreferrer'>Read More</a></div>
    </div>
}

export default ProjectCards;