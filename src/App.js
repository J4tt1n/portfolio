import React, { Component } from 'react'
import './App.css'
import Me from './Components/Me'
import Projects from './Components/Projects'
import NavBar from './Components/NavBar'
import Slider from './Components/Slider'
import Hobbies from './Components/Hobbies'
import Scrollbutton from './Components/Scrollbutton'
import TechStack from './Components/TechStack'

class App extends Component {

    render() {
        return (
            <div className='App'>
                <NavBar />
                <Me scrollToSection={this.scrollToSection} />
                <TechStack />
                <Slider />
                <Projects />
                <Hobbies />
                <Scrollbutton />
            </div>
        )
    }
}

export default App;