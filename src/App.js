import React, { Component } from 'react';
import './App.css';
import Me from './Components/Me';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import Hobbies from './Components/Hobbies';
import Scrollbutton from './Components/Scrollbutton';
import TechStack from './Components/TechStack';
import Cat from './Components/Cat';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateAngle: 0,
            cursorOnScreen: false
        };
    }

    handleEyeRotation = (event) => {
        const eye = document.getElementById('rotatingeye');
        if (eye) {
            const rectEye = eye.getBoundingClientRect();
            const centerX = rectEye.left + rectEye.width / 2;
            const centerY = rectEye.top + rectEye.height / 2;
            const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
            this.setState({ rotateAngle: angle });
        }
    }

    handleMouseEnter = () => {
        this.setState({ cursorOnScreen: true });
    }


    render() {
        return (
            <div className='App' onMouseMove={this.handleEyeRotation} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <NavBar />
                <Me scrollToSection={this.scrollToSection} />
                <TechStack />
                <Slider />
                <Projects />
                <Hobbies />
                <Scrollbutton />
                {this.state.cursorOnScreen && <Cat rotateAngle={this.state.rotateAngle} />}
            </div>
        );
    }
}

export default App;
