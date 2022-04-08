import React, { useState } from 'react';
import logoImage from "../../assets/initial-black.png";



function Nav (props) {
 const headings = ['About', 'Portfolio', 'Contact', 'Resume'];
  const{
    currentPage,
    handlePageChange
  }=props;
 return (

        <header>
            <img  src={logoImage} className="my-2" style={{ width: "8%"}} alt="logo"  />
          <nav >
            <div className="container-fluid">
               
                <div >
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

