import React, { useState } from 'react';
import SlideItems from './SlideItems';

const Slider = () => {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      title: 'Internship #1',
      header: 'Data Analytics Intern',
      duration: 'Jan \'24 - June \'24',
      place: 'Merilytics',
      desc: 'Using SQL, Python (Pandas & NumPy) for comprehensive financial data analysis and building insight tables to optimize financial performance. Optimizing a complex 3000 lines of SQL Query, reducing runtime from 40 minutes to 16 minutes. Crafting insightful data visualizations',
    },
    {
      title: 'Publication',
      header: 'Waste Segregation using Deep Learning',
      place: 'International Journal of Innovative Science and Research Technology',
      desc: <p>The paper introduces an AI-based waste segregation system utilizing Convolution Neural Networks (CNNs) wherein it automatically indetifies the type of waste with a high accuracy of 90.4% with precision of 88% and F1 score of 0.82. <br /> <a href="https://doi.org/10.5281/zenodo.10243786">https://doi.org/10.5281/zenodo.10243786</a></p>
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
    <div className='main-container3'>
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
