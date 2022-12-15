import React from 'react'
import { Link } from "react-router-dom";
import '../css/App.css'
import {ReactComponent as Back} from '../images/backArrow.svg';

const Projects = () => {
  return (
    <body className='center'>
      <Link to="/"><Back className='icon'/></Link>
      <div className=''>
        <h1>Email Form<br/>Coming Soon</h1>
      </div>

    </body>
  );
}

export default Projects;