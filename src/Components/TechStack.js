import React, { Component } from 'react'
import '../App.css'
import clogo from '../logos/c.svg'
import cpplogo from '../logos/c++.svg' 
import mysqllogo from '../logos/mysql.svg'
import htmllogo from '../logos/html.svg'
import csslogo from '../logos/css.svg'
import jslogo from '../logos/javascript.svg'
import reactlogo from '../logos/react.svg'
import pythonlogo from '../logos/python.svg'
import javalogo from '../logos/java.svg'
import { MdKeyboardArrowDown } from "react-icons/md";

class TechStack extends Component {

    constructor()
    {
        super()
        this.state = {
            opened : 0,
            images : [
                {id:1, text: 'C', imageURL: clogo, 'pro': '0.95'}, 
                {id:2, text: 'C++', imageURL: cpplogo, 'pro': '0.95'}, 
                {id:3, text: 'MySQL', imageURL: mysqllogo, 'pro': '0.95'}, 
                {id:4, text: 'HTML', imageURL: htmllogo, 'pro': '0.9'}, 
                {id:5, text: 'CSS', imageURL: csslogo, 'pro': '0.85'}, 
                {id:6, text: 'JavaScript', imageURL: jslogo, 'pro': '0.9'}, 
                {id:7, text: 'React', imageURL: reactlogo, 'pro': '0.65'}, 
                {id:8, text: 'Python', imageURL: pythonlogo, 'pro': '0.7'}, 
                {id:9, text: 'Java', imageURL: javalogo, 'pro': '0.7'}, 
                
            ]
        }
    }

    dropdown() {
        this.setState ({
            opened : 1 - this.state.opened
        });
    }

    render() {
        let direction, content, dropdown
        const imageList = this.state.images.map((image) => (
            <dd key={image.id} className='techlist'>
                <img src={image.imageURL} alt={image.text} className='imageb4text'/>
                <span>{image.text}</span>
                <span className='bars' style={{ width: `${(image.pro * 22) + 'vw'}` }}></span>
                <span className='fullbar'></span>
            </dd>
        ));

        const justImages = this.state.images.map((image) => (
            <span key={image.id} className='logo'>
                <img src={image.imageURL} alt={image.text}></img>
            </span>
        ))
        if(this.state.opened === 0)
        {
            content = <span className='justimages'>
                {justImages}
                </span>;
            direction = 'down'
        }
        else 
        {
            direction = 'up';
            dropdown = <div>
                <dl className='techlisttotal'>{imageList}</dl>
            </div>
        }
        
        return (
            <div className='techstack'>
                My Tech Stack &emsp;
                {content}
                <MdKeyboardArrowDown className={direction} onClick={() => {this.dropdown()}}></MdKeyboardArrowDown>
                <div className='list'>{dropdown}</div>
            </div>            
        )
  }
}

export default TechStack;
