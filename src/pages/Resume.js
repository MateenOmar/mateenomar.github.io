import React from 'react'
import { Link } from "react-router-dom";
import '../css/App.css'
import '../css/Resume.css'
import {ReactComponent as Back} from '../images/backArrow.svg';
import website from '../images/website.png'
import github from '../images/github.png'
import location from '../images/location.png'
import location2 from '../images/location2.png'
import linkedin from '../images/linkedin.png'
import calendar from '../images/calendar.png'
import graduation from '../images/graduation.png'


const Projects = () => {
  return (
    <body className=''>
      <Link to="/"><Back className='icon'/></Link>
      <div className='page'>
        <div id='info'>
          <h1 id='resumeName'>OMAR BIN MATEEN</h1>
          <h3 className='blueText' id='student'>STUDENT</h3>
          <div id='infoContainer'>
            <span className='infoItem'><a style={{textDecoration:"none", color:"#4186f5"}} href='https://github.com/MateenOmar' rel="noreferrer"  target="_blank"><img style={{verticalAlign:"text-top"}} src={website} alt="portfolio"/><span style={{paddingLeft:"10px"}}>Portfolio</span></a></span>
            <span className='infoItem'><img style={{marginLeft:"10px", verticalAlign:"text-top"}} src={location} alt="location"/><span style={{paddingLeft:"10px"}}>Toronto, ON</span></span>
            <span className='infoItem'><a style={{textDecoration:"none", color:"#4186f5"}} href='https://www.linkedin.com/in/omarmateen/' rel="noreferrer"  target="_blank"><img style={{marginLeft:"10px", verticalAlign:"text-top"}} src={linkedin} alt="linkedin"/><span style={{paddingLeft:"10px"}}>LinkedIn</span></a></span>
            <span className='infoItem'><a style={{textDecoration:"none", color:"#4186f5"}} href='https://github.com/MateenOmar' rel="noreferrer"  target="_blank"><img src={github} alt="github" style={{verticalAlign:"middle"}} /><span style={{paddingLeft:"10px"}}>Github</span></a></span>
          </div>
        </div>

        <div id='objective'>
          <div className='headers'>CAREER OBJECTIVE</div>
          Collaborative computer science student with a passion for problem solving. Seeking a co-op position where I can take advantage of opportunities to apply and further my skills while helping the company grow.
        </div>

        <div id='education'>
          <div className='headers'>EDUCATION</div>
          <div style={{marginBottom:"10px"}}>
            <span>Bachelor of Science (Honours)</span><br/>
            <span className='projectTitle'>Computer Science (Co-op)</span><br/>
            <span className='blueText'>Toronto Metropolitan (Ryerson) University</span><br/>
            <span><img src={calendar} alt="calendar" style={{verticalAlign:"text-top", paddingRight:"10px"}} />September 2021 – Expected December 2024</span><br/>
            <span><img src={location2} alt="location" style={{verticalAlign:"text-top", paddingRight:"10px"}} />Toronto, ON</span><br/>
            <span><img src={graduation} alt="graduation" style={{verticalAlign:"text-top", paddingRight:"10px"}} />GPA: 3.45</span><br/>
          </div>

          <div>
            <span className='projectTitle'>Computer Science</span><br/>
            <span className='blueText'>University of Toronto Scarborough</span><br/>
            <span><img src={calendar} alt="calendar" style={{verticalAlign:"text-top", paddingRight:"10px"}} />September 2019 - April 2021</span><br/>
            <span><img src={location2} alt="location" style={{verticalAlign:"text-top", paddingRight:"10px"}} />Toronto, ON</span><br/>
            <span><img src={graduation} alt="graduation" style={{verticalAlign:"text-top", paddingRight:"10px"}} />GPA: 3.05</span><br/>
          </div>

        </div>

        <div id='projects'>
          <div className='headers'>PROJECTS</div>

          <div className='project'>
            <div className='projectTitle'>Unix Shell<span className='github'><a style={{textDecoration:"none", color:"black"}} href='https://github.com/MateenOmar/Unix-Shell' rel="noreferrer"  target="_blank"><span>(GitHub)</span></a></span></div>
            <div className='blueText'>Software Design Group Project
            <span className='language'>Java</span></div>
            <div>
              <div className='projectDescItem'>Object-oriented design implementation using multiple software design patterns (Singleton, Factory, etc.) whilst following the SOLID principle in an agile process</div>
            </div>
          </div>

          <div className='project'>
            <div className='projectTitle'>CRUD API<span className='github'><a style={{textDecoration:"none", color:"black"}} href='https://github.com/MateenOmar/CRUD-API' rel="noreferrer"  target="_blank"><span>(GitHub)</span></a></span></div>
            <div className='blueText'>Author
            <span className='language'>MongoDB</span>
            <span className='language'>GO</span></div>
            <div>
              <div className='projectDescItem'>Basic API that implements all CRUD capabilities</div>
            </div>
          </div>

          <div className='project'>
            <div className='projectTitle'>Course Website<span className='github'><a style={{textDecoration:"none", color:"black"}} href='https://github.com/MateenOmar/Course-Website' rel="noreferrer"  target="_blank"><span>(GitHub)</span></a></span></div>
            <div className='blueText'>Author
            <span className='language'>CSS</span>
            <span className='language'>HTML</span>
            <span className='language'>Flask</span>
            <span className='language'>Python</span></div>
            <div>
              <div className='projectDescItem'>Functional course website with the backend written in Python using Flask with a working database in SQLite</div>
            </div>
          </div>

          <div className='project'>
            <div className='projectTitle'>Recommendation System<span className='github'><a style={{textDecoration:"none", color:"black"}} href='https://github.com/MateenOmar/Recommendation-System-Application' rel="noreferrer"  target="_blank"><span>(GitHub)</span></a></span></div>
            <div className='blueText'>Author
            <span className='language'>Python</span></div>
            <div>
              <div className='projectDescItem'>Basic system that computes recommendations based on a predefined database </div>
            </div>
          </div>

        </div>

        <div id='experience'>
          <div className='headers'>EXPERIENCE</div>
          <div className='project'>
            <div className='projectTitle'>Builder Lynx</div>
            <div className='blueText'>Highschool Co-op</div>
            <div>
              <div className='projectDescItem'>Collaborate with customers with inputting their requests and preferences into a database</div>
              <div className='projectDescItem'>Presenting customized floor plans to my superiors</div>
            </div>
          </div>
        </div>

        <div id='skills'>
          <div className='headers'>SKILLS</div>
          Software Design Patterns<br/>
          Object Oriented Design<br/>
          Problem Solving<br/>
          Critical Thinking<br/>
          Collaboration<br/>
          Quick Learner<br/>
          Communication<br/>
        </div>

        <div id='courses'>
          <div className='headers'>RELEVANT COURSES</div>
          Software Design<br/> 
          Algorithms<br/>
          Software Engineering<br/>
          Design and Analysis of Data Structures <br/>
          Operating Systems 1<br/>
          Database Systems<br/>

        </div>

        <div id='techSkills'>
          <div className='headers'>TECHNICAL SKILLS</div>
          <span>Languages:</span><br/>
          <span className='tab'>Java</span><br/>
          <span className='tab'>C</span><br/>
          <span className='tab'>Python</span><br/>
          <span className='tab'>JavaScript</span><br/>
          <span className='tab'>Bash</span><br/>
          <span className='tab'>HTML</span><br/>
          <span className='tab'>CSS</span><br/>
          <span className='tab'>SQL (SQLite, Oracle, NoSQL)</span><br/><br/>
          <span>Frameworks/Tools:</span><br/>
          <span className='tab'>Flask</span><br/>
          <span className='tab'>Git</span><br/>
          <span className='tab'>SVN</span><br/>
          <span className='tab'>Unix</span><br/>
          <span className='tab'>Linux</span><br/>
          <span className='tab'>Eclipse</span><br/>
          <span className='tab'>VS Code</span><br/>
        </div>
      </div>

    </body>
  );
}

export default Projects;