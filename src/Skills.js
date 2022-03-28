import React from 'react'
import "./Skills.css";

function Skills() {
  return (
    <div className='skills' id="Skills">
        <h1 className='skills_head'>My skills</h1>
        <p className='para what_color'>
            __What i Know__
        </p><br />
        <div className='skill_para'>
             <div className='column_left'> 
        <p className='skill_text s_color'>
            2FA: Implemented the use of 
            HTML, CSS, JS 
            for front end and Implemented PHP, 
            MySql for backend 
        </p><br />
        
        <p className='skill_text s_color'>
           Weather Forecast: Implemented the use of React js for this project.
        </p><br />

        <p className='skill_text s_color'>
          TicTacToe : Implemented using reactjs and js
        </p>
            </div><br />
             </div> 
        <div className='column_right'>
        <label id='file'>HTML</label>
        <progress id="file" value="80" max="100">80%</progress><br />
        <label id="file">CSS</label>
        <progress id="file" value="65" max="100">65%</progress><br />
        <label id="file">JS</label>
        <progress id="file" value="60" max="100">60%</progress><br />
        <label id="file">React js</label>
        <progress id="file" value="65" max="100">65%</progress><br />
        <label id="file">My Sql</label>
        <progress id="file" value="60" max="100">60%</progress>
    </div>
    </div>
  )
}

export default Skills