import React, {useState} from 'react'
import maillogo from '../logos/mail.png'
import linkedinlogo from '../logos/linkedin.png'
import githublogo from '../logos/github.png'
import codecheflogo from '../logos/codechef.png'
import leetcodelogo from '../logos/leetcode.png'
import instagramlogo from '../logos/instagram.png'
import gfglogo from '../logos/gfg.png'
import { Link } from 'react-scroll'

const NavBar = (props) => {

    const socials = [
        {
            id: 1,
            icon: maillogo,
            social: 'Gmail',
            info: 'jattinjaggi2002@gmail.com'
        },
        {
            id: 2,
            icon: linkedinlogo,
            social: 'Linkedin',
            info: '/jattinjaggi'
        },
        {
            id: 3,
            icon: githublogo,
            social: 'Github',
            info: '/J4tt1n'
        },
        {
            id: 4,
            icon: codecheflogo,
            social: 'Codechef',
            info: '/j4ttin'
        }   
    ]

    const itemsmore = [
        {
            id: 4,
            icon: leetcodelogo,
            social: 'Leetcode',
            info: ' '
        },
        {
            id: 5,
            icon: instagramlogo,
            social: 'Instagram',
            info: ''
        },
        {
            id: 6,
            icon: gfglogo,
            social: 'GeeksForGeeks',
            info: ''
        }
    ]

    const [directions, dropit] = useState(0);
    const [direction2, dropmore] = useState(0);

    let content = [];
    let more_symbol = (
        <div onClick={() => dropmore(1 - direction2)} className='social-content more'>
            More <span className="material-symbols-outlined">add</span>
        </div>
    );

    const more = itemsmore.map((itemmore) => (
        <div key={itemmore.id} className='social-content'>
            <span><img src={itemmore.icon} alt={itemmore.social} className='contact-logo'></img></span>
            <span>{itemmore.social}</span>
        </div>
    ));

    const dropdown = socials.map((social) => (
        <div key={social.id} className='social-content'>
            <span><img src={social.icon} alt={social.social} className='contact-logo'></img></span>
            <span>{social.social}</span>
        </div>
    ));

    if (directions && direction2) {
        content = dropdown.concat(more);
    }
    else if (directions && direction2===0)
    {
        content = dropdown.concat(more_symbol)
    }


    return <div className="navbar-container" id='home'>
            <div className='navbar-content'>
                <div className='navbar-1'><Link to='home' smooth={true} duration={500}>HOME</Link></div>
                <div className='navbar-2'><Link to='aboutme' smooth={true} duration={500}>ABOUT</Link></div>
                <div className='navbar-3'><Link to='projects' smooth={true} duration={500}>PROJECTS</Link></div>
                <div className='navbar-4'>
                    <div className={`contact-container`}>
                    <button onClick={()=>dropit(1-directions)} className="text-container">Contacts</button>
                    </div>
                    <div className='social-container'>
                        {content}
                        
                    </div>
                </div>
                    
            </div>
            
        </div>
}

export default NavBar;