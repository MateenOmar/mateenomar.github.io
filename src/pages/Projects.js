import React from 'react'
import { Link } from "react-router-dom";
import '../css/App.css'
import '../css/Projects.css'
import {ReactComponent as Next} from '../images/next.svg';
import {ReactComponent as Play} from '../images/play.svg';
import {ReactComponent as Back} from '../images/backArrow.svg';

const Projects = () => {
  return (
    <body className=''>
      <Link to="/"><Back className='icon'/></Link>
      <h1 className='header'>Projects</h1>
      
      <div id='projectContainer'>
        <div className='projectItem'>
          <span className='projectName'>Unix Shell</span>
          <div className='projectLinksContainer'>
            <a href='https://github.com/MateenOmar/Unix-Shell' rel="noreferrer"  className='projectLink' target="_blank"><Play className='icon'/></a>
            <a href='https://github.com/MateenOmar/Unix-Shell' rel="noreferrer"  className='projectLink' target="_blank"><Next className='icon'/></a>
          </div>
          <p className='projectDesc'>short project description --- remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <div className='languagesContainer'>
            <span className='language' style={{color:"#b07219"}}>Java</span>
          </div>
        </div>

        <div className='projectItem'>
          <span className='projectName'>CRUD API</span>
          <div className='projectLinksContainer'>
            <a href='https://github.com/MateenOmar/CRUD-API' rel="noreferrer"  className='projectLink' target="_blank"><Play className='icon'/></a>
            <a href='https://github.com/MateenOmar/CRUD-API' rel="noreferrer"  className='projectLink' target="_blank"><Next className='icon'/></a>
          </div>
          <p className='projectDesc'>short project description --- remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <div className='languagesContainer'>
            <span className='language' style={{color:"#00ADD8"}}>GO</span>
          </div>
        </div>

        <div className='projectItem'>
          <span className='projectName'>Safe Together</span>
          <div className='projectLinksContainer'>
            <a href='https://github.com/MateenOmar' rel="noreferrer"  className='projectLink' target="_blank"><Play className='icon'/></a>
            <a href='https://github.com/MateenOmar' rel="noreferrer"  className='projectLink' target="_blank"><Next className='icon'/></a>
          </div>
          <p className='projectDesc'>short project description --- remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <div className='languagesContainer'>
            <span className='language' style={{color:"#f1e05a"}}>JavaScript</span>
            <span className='language' style={{color:"#e34c26"}}>HTML</span>
            <span className='language' style={{color:"#563d7c"}}>CSS</span>

            <span className='language' style={{color:"#555555"}}>C</span>
            <span className='language' style={{color:"#f34b7d"}}>C++</span>
          </div>
        </div>

        <div className='projectItem'>
          <span className='projectName'>Course Website</span>
          <div className='projectLinksContainer'>
            <a href='https://github.com/MateenOmar/Course-Website' rel="noreferrer"  className='projectLink' target="_blank"><Play className='icon'/></a>
            <a href='https://github.com/MateenOmar/Course-Website' rel="noreferrer"  className='projectLink' target="_blank"><Next className='icon'/></a>
          </div>
          <p className='projectDesc'>short project description --- remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <div className='languagesContainer'>
            <span className='language' style={{color:"#3572A5"}}>Python</span>
            <span className='language' style={{color:"#e34c26"}}>HTML</span>
            <span className='language' style={{color:"#563d7c"}}>CSS</span>
          </div>
        </div>

        <div className='projectItem'>
          <span className='projectName'>Recommendation System</span>
          <div className='projectLinksContainer'>
            <a href='https://github.com/MateenOmar/Recommendation-System-Application' rel="noreferrer"  className='projectLink' target="_blank"><Play className='icon'/></a>
            <a href='https://github.com/MateenOmar/Recommendation-System-Application' rel="noreferrer"  className='projectLink' target="_blank"><Next className='icon'/></a>
          </div>
          <p className='projectDesc'>short project description --- remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <div className='languagesContainer'>
            <span className='language' style={{color:"#3572A5"}}>Python</span>
          </div>
        </div>

        <div className='projectItem'>
          <span className='projectName'>Course Management</span>
          <div className='projectLinksContainer'>
            <a href='https://github.com/MateenOmar/Course-Management-System' rel="noreferrer"  className='projectLink' target="_blank"><Play className='icon'/></a>
            <a href='https://github.com/MateenOmar/Course-Management-System' rel="noreferrer"  className='projectLink' target="_blank"><Next className='icon'/></a>
          </div>
          <p className='projectDesc'>short project description --- remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <div className='languagesContainer'>
            <span className='language' style={{color:"#b07219"}}>Java</span>
          </div>
        </div>

      </div>
    </body>
  );
}

export default Projects;