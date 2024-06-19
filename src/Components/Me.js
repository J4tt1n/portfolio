// Me.js
import React from 'react';
import profilephoto from '../logos/profilephoto.jpg';
import '../App.css';

function Me() {
  return (
    <div className='main-container'>
      <div className='profile-container'>
        <div className='pp'>
          <img src={profilephoto} className='photo' alt='Profile' />
        </div>
        <div className='name'>
          <h1>Jattin Jaggi - Data Engineer </h1>
        </div>
        <div className='text'>
        EEnthusiastic recent graduate with a passion for technology, continuous learning, and skilled in developing software, models, and analysis. 
        Actively involved in data analysis, aiming for a role in the technology domain that cultivates personal and professional growth within a collaborative and goal-driven environment.
        </div>
      </div>
    </div>
  );
}

export default Me;
