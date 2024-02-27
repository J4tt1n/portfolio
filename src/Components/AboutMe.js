import TechStack from "./TechStack";
import React from 'react'

const AboutMe = (props) => {
    return <div className="about" id="aboutme">
        <div>&nbsp;</div>
        <div className='name2'>
            About Me
        </div>
            <div className='info'>
                Hi, I'm [Your Name], an engineer passionate about turning ideas into reality. With a background in [Your Field], I thrive in solving complex problems. From [Highlight Key Experience] to [Another Notable Experience], I've honed skills in [Specific Skills].
                Beyond engineering, I enjoy [Hobbies/Interests]. I'm eager to explore new opportunities that allow me to contribute my expertise and drive innovation.
                Let's connect and explore how we can collaborate!
            </div>
        <TechStack />
    </div>
}

export default AboutMe;