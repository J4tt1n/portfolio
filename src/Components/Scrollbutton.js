import React from 'react'
import { Button } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa'

function Scrollbutton() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <Button className='scroll-button'>
                <FaArrowCircleUp onClick={scrollToTop}></FaArrowCircleUp>
            </Button>
        </div>
    )
}

export default Scrollbutton;