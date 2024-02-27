import React from 'react';

const SlideItems = ({ item }) => {
  return (
    <div className='slide-item'>
      <div className='item-title'>{item.title}</div>
      <div className='slider-grid'>
        <div className='item-header'>{item.header}</div>
        <div className='item-duration'>{item.duration}</div>
      </div>
      
      <div className='item-place'>{item.place}</div>
      <div className='item-desc'>{item.desc}</div>
    </div>
  );
};

export default SlideItems;
