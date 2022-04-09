import React, { useState } from 'react';
import logoImage from "../../assets/initial-black.png";



function Nav (props) {
 const headings = ['About', 'Portfolio', 'Contact', 'Resume'];
  const{
    currentPage,
    handlePageChange
  }=props;
 return (

        <header className="sticky-div">
          
            <h1>Tracy Favro</h1>  
            <div className='name'>
           
            </div>
            
          <nav >
            <div className="container-fluid">
               
                <div className="topnav" id="myTopnav">
                    <ul flex-row>
                        {headings.map((headings, index) => (
                            <li key={index} className="nav-item">
                                <a className={`nav-link + ${headings === currentPage && 'active'}`} aria-current="page" href={`#${headings.toLocaleLowerCase}`}onClick={() => handlePageChange(headings)}>{headings}</a>
                               
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </nav>
      </header>
    );
  }


export default Nav;

