import React, { useState } from 'react';
import SlideItems from './SlideItems';

const Slider = () => {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      title: 'Internship #1',
      header: 'Technical Associate Intern',
      duration: 'Jan \'24 - Present',
      place: 'Merilytics',
      desc: 'Leveraging SQL, Python (Pandas & NumPy) for comprehensive financial data analysis, including creating views and modifying tables to generate revenue insights for a financial company. Crafting insightful data visualizations using Tableau and Power Bi, incorporating measures for effective presentation and interpretation.',
    },
    {
      title: 'Publication',
      header: 'Waste Segregation using Deep Learning',
      duration: 'Sept \'24 - Nov \'24',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in libero libero. Nunc nec purus lorem. Integer semper ipsum et ipsum sagittis tincidunt. Etiam dolor eros, congue nec pulvinar vel, consequat in lectus. Quisque aliquam pulvinar vehicula. Cras quis sapien est. Curabitur malesuada nec justo venenatis bibendum.',
    },
    {
      title: 'Internship #2',
      header: 'Salesforce Associate Intern',
      duration: 'May \'22 - July \'22',
      place: 'Aekot Consulting',
      desc: 'Making highly interactive and user-friendly lightning web components on Salesforce. Implementing dynamic data integration, enabling real-time retrieval and display of information from the Salesforce database on the web pages. Learning about Salesforce basics, Apex Testing, Lightning Web Components, etc. on Trailhead.',
    }
  ];

  let buttondir
  if (activeItem === items.length-1)
  {
    buttondir = <span class="material-symbols-outlined" style={{fontSize: `30px`}}>chevron_left</span>
  }
  else
    buttondir = <span class="material-symbols-outlined" style={{fontSize: `30px`}}>navigate_next</span>


  const slide = () => {
    setActiveItem((prev) => (prev + 1) % items.length);
  };

  return (
    <div className='main-container'>
      <div className='slider-container'>
        <div className='slider-head' style={{ transform: `translateX(-${activeItem * 100}%)` }}>
          {items.map((item, index) => (
            <SlideItems key={index} item={item} />
          ))}
        </div>
        
      </div>
      <div className='slider-button-area'>
              <button onClick={slide} className='slider-button'>
                  {buttondir }
              </button>
      </div>
    </div>
  );
};

export default Slider;
