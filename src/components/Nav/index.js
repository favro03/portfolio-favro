import React from 'react';
import logoImage from "../../assets/initial-black.png";
import About from '../About';


function Nav (props) {
  const {
  
    
 
    contactSelected,
    setContactSelected
  } = props;
    return (
        <header>
            <img  src={logoImage} className="my-2" style={{ width: "8%"}} alt="logo"  />
        <nav>
          <ul className="flex-row">
            <li className="mx-2"><a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a></li>
            <li><a className="mx-2" href="#web">Portfolio</a></li>
            <li><a className="mx-2"><span onClick={() => setContactSelected(true)}>Contact</span></a></li>
            <li><a className="mx-2" href="#contact">Resume</a></li>
          </ul>
              
        </nav>
      </header>
    );
  }


export default Nav;

