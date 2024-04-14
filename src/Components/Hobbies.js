import React from 'react'
import gym from '../logos/gym.png'
import cooking from '../logos/cooking.png'
import dog from '../logos/dog.jpg'

const Hobbies = (props) => {
    return <div className='main-container'>
        <div className='about'>
            <div className='hobby-container name'>Lets have a chat on</div>
            <div className='hobby-names'>
                <div className='hobby-list-1'>
                    <div><img src={gym} alt='gym_pic' className='hobby-pic'></img></div>
                    <div className='hobby-content'>Gym</div>
                </div>
                <div className='hobby-list-2'>
                    <div><img src={cooking} alt='cooking_pic' className='hobby-pic'></img></div>
                    <div className='hobby-content'>Cooking</div>
                </div>
                <div className='hobby-list-3'>
                    <div><img src={dog} alt='pets_pic' className='hobby-pic'></img></div>
                    <div className='hobby-content'>Pets</div>
                </div>
            </div>
        </div>
    </div>
}

export default Hobbies;
