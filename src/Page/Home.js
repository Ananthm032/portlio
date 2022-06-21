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
      <div className="Skill"><h1>Skill</h1>
        <ol className="list">
          <li className="item"><h3 className="h3">Front-End</h3>
          <span>CSS
          JavaScript/jQuery<br/>
           Frameworks<br/>
           Responsive Design<br/>
           Version Control/Git<br/>
           Web Performance.</span>
          </li>
       
    <li className="item"><h3 className="h3">Back-End</h3>
  <span>Knowledge of Front-End Technology<br/>
        Knowledge of Backend Frameworks<br/>
Version Control System<br/>
Knowledge of Databases<br/>
Knowledge of API<br/>
</span>
    </li>
     <li><h3 className="h3">Language</h3><span>Java <br/> JavaScript<br/>  C<br/>C++</span></li></ol>

</div>
      </div>
    
  )
}

export default Home;