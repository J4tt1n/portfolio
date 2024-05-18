import React from 'react';
import cat from '../logos/cat-pic2.png';
import eye from '../logos/eye-pic.png';

function Cat({ rotateAngle }) {
    return (
        <div className='cat-container'>
            <img src={cat} alt='cat-image' className='cat-pic'></img>
            <img id='rotatingeye' src={eye} alt='left-eye' className='left-eye' style={{ transform: `rotate(${rotateAngle}deg)` }} ></img>
            <img id='rotatingeye' src={eye} alt='right-eye' className='right-eye' style={{ transform: `rotate(${rotateAngle}deg)` }} ></img>
        </div>
    );
}

export default Cat;