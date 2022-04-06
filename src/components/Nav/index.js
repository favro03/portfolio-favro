import React from 'react';
import logoImage from "../../assets/initial-black.png";


function Nav () {
    return (
        <header>
       
          
            <img  src={logoImage} className="my-2" style={{ width: "8%"}} alt="logo"  />
         
        
        <nav>
          <ul className="flex-row">
                      <li><a className="mx-2" href="#about">About Me</a></li>
                      <li><a className="mx-2" href="#web">Portfolio</a></li>
                      <li><a className="mx-2" href="#portfolio">Content</a></li>
                      <li><a className="mx-2" href="#contact">Resume</a></li>
                  </ul>
              
        </nav>
      </header>
    );
  }


export default Nav;

