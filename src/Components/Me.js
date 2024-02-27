// Me.js
import React from 'react';
import { Link } from 'react-scroll';
import profilephoto from '../logos/profilephoto.jpg';
import '../App.css';

function Me() {
  return (
    <div className='profile-container'>
      <div className='pp'>
        <img src={profilephoto} className='photo' alt='Profile' />
      </div>
      <div className='name'>
        <h1>Jattin Jaggi <br />- Engineer </h1>
      </div>
      <div className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet sem eget ullamcorper mattis. 
        Phasellus porta, enim in pellentesque aliquet, diam lorem egestas nisi, pretium malesuada tortor sapien nec est. 
        Aenean sit amet dolor quam. Suspendisse pharetra turpis sed lobortis pretium. Nulla eu turpis at neque eleifend interdum et ac sem.
        Donec aliquet congue risus, vel placerat lorem lobortis in. Etiam ultrices condimentum eros scelerisque maximus. 
      </div>
    </div>
  );
}

export default Me;
