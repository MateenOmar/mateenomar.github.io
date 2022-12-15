import React from 'react'
import { Link } from "react-router-dom";
import './css/App.css';
import {ReactComponent as Github} from './images/github.svg';
import {ReactComponent as Linkedin} from './images/linkedin.svg';
import {ReactComponent as Projects} from './images/projects.svg';
import {ReactComponent as Resume}  from './images/resume.svg';
import {ReactComponent as Email} from './images/email.svg';

function App() {
  return (
    <body className='center'>
      
      <div className='maxWidth'>
        <h1 id='name' className='header'>Omar Mateen</h1>

        <p id='about'>
          Hey, it's Omar. A 3rd year <span style={{color:"#00ffe5"}}>Computer Science</span> student at <span style={{color:"#00ffe5", textDecoration:"underline #BB86FC"}}>Toronto Metropolitan (Ryerson) University</span>.<br/><br/>
          I'm currently completing my 3rd while seeking a Co-op position for <span style={{textDecoration:"underline"}}>Summer 2023</span>.
        </p>

        <div className='linksContainer'>
          <a href='https://github.com/MateenOmar' rel="noreferrer"  className='linkItem' target="_blank"><Github className='icon'/><span>Github</span></a>
          <a href='https://www.linkedin.com/in/omarmateen/' rel="noreferrer"  className='linkItem' target="_blank"><Linkedin className='icon'/><span>LinkedIn</span></a>
          <Link className='linkItem' to="/projects"><Projects className='icon'/><span>Projects</span></Link>
          <Link className='linkItem' to="/resume"><Resume className='icon'/><span>Resume</span></Link>
          <Link className='linkItem' to="/email"><Email className='icon'/><span>Email Me!</span></Link>
        </div>
      </div>
      

    </body>
  );
}

export default App;