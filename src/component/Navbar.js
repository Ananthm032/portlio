import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

function Navbar(){
  return (
    <div className="navbar">
           
        <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/project">Project</Link>
            <Link to="/experience">Experience</Link>
            
   </div> 
   </div>    
  )  
}

export default Navbar