import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Home.css"
function Home() {
  return (
    <div className="home">
      <div className="about">
       <h2> Hi,My Name is Ananth</h2></div>
        <div className="promt">
          <p>I handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.</p>
          <LinkedInIcon/>
          <GitHubIcon />
          <EmailIcon/>
          </div>         
      <div className="Skill"><h1>Personal Skills:</h1>
        <ol className="list">
          <li className="item"><h3 className="h3">Front-End</h3>
          <span>CSS
          JavaScript/jQuery<br/><hr/>
           Frameworks<br/><hr/>
           Responsive Design<br/><hr/>
           Version Control/Git<br/><hr/>
           Web Performance</span>
          </li>
       
    <li className="item"><h3 className="h3">Back-End</h3>
  <span>Knowledge of Front-End Technology<br/><hr/>
        Knowledge of Backend Frameworks<br/><hr/>
Version Control System<br/><hr/>
Knowledge of Databases<br/><hr/>
Knowledge of API<br/>
</span>
    </li>
     <li><h3 className="h3">Language</h3><span>Java <br/> <hr/>JavaScript<br/> <hr/> C<br/><hr/>C++</span></li></ol>

</div>
      </div>
    
  )
}

export default Home;