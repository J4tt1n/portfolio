import React from 'react'
import html from '../logos/html.svg'
import css from '../logos/css.svg'
import js from '../logos/js.svg'
import react from '../logos/react.svg'
import cplusplus from '../logos/cplusplus.svg'
import dsa from '../logos/dsa.png'
import mysql from '../logos/mysql.svg'
import sqlserver from '../logos/mssql.png'
import tableau from '../logos/tableau.svg'
import powerbi from '../logos/powerbi.svg'
import excel from '../logos/excel.svg'
import python from '../logos/python.svg'
import java from '../logos/java.svg'
import tailwindcss from '../logos/tailwindcss.png'
import databricks from '../logos/databricks.png';

function TechStack() {

    return (
        <div className='main-container-2' id='techstack'>
            <div className='techstack-heading'>
                <div className='name2'>
                    <h1>Tech Stack</h1>
                </div>
            </div>
            <div className='techstack-content'>
                <div className='display-tech-content cat1'>
                    <div className='category-name'>Frontend Development</div>
                    <br></br>
                    <div className='subcategories'>
                        <div className='subcategory-name'><img src={html} alt='html-logo' className='logo' />HTML</div>
                        <div className='subcategory-name'><img src={css} alt='css-logo' className='logo' />CSS</div>
                        <div className='subcategory-name'><img src={js} alt='js-logo' className='logo' />JavaScript</div>
                        <div className='subcategory-name'><img src={react} alt='react-logo' className='logo' />React</div>
                        <div className='subcategory-name'><img src={tailwindcss} alt='tailwindcss-logo' className='logo'/>Tailwind</div>
                    </div>
                </div>
                <div className='display-tech-content cat2'>
                <div className='category-name'>Competitive Coding</div>
                    <br></br>
                    <div className='subcategories'>
                        <div className='subcategory-name'><img src={cplusplus} alt='cplusplus-logo' className='logo' />C++</div>
                        <div className='subcategory-name'><img src={dsa} alt='dsa-logo' className='logo' />DSA</div>
                    </div>
                </div>
                <div className='display-tech-content cat3'>
                <div className='category-name'>Database Management</div>
                    <br></br>
                    <div className='subcategories'>
                        <div className='subcategory-name'><img src={sqlserver} alt='sqlserver-logo' className='logo' />SQL Server</div>
                        <div className='subcategory-name'><img src={mysql} alt='mysql-logo' className='logo' />MySQL</div>
                        <div className='subcategory-name'><img src={databricks} alt='databricks-logo' className='logo' />Databricks</div>
                    </div>
                </div>
                <div className='display-tech-content cat4'>
                <div className='category-name'>Analytics and Visualisations</div>
                    <br></br>
                    <div className='subcategories'>
                        <div className='subcategory-name'><img src={tableau} alt='tableau-logo' className='logo' />Tableau</div>
                        <div className='subcategory-name'><img src={powerbi} alt='powerbi-logo' className='logo' />Power Bi</div>
                        <div className='subcategory-name'><img src={excel} alt='excel-logo' className='logo' />Excel</div>
                        <div className='subcategory-name'><img src={python} alt='react-logo' className='logo' />Python</div>
                    </div>
                </div>
                <div className='display-tech-content cat5'>
                <div className='category-name'>Backend Developement</div>
                    <br></br>
                    <div className='subcategories'>
                        <div className='subcategory-name'><img src={java} alt='java-logo' className='logo' />Java</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack;
