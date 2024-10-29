import React from 'react';
import '../../Styles/HeaderStyle/Navbar.css'

export const Header = () => {
  return (

    <>
    <header>
      <h1 className='name'>Henry Hernandez Martinez</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about-me">About Me</a>
          </li>
          <li className="navbar-item">
            <a href="/contact-me">Contact Me</a>
          </li>
          <li className="navbar-item">
            <a href="/other-routes">Other Routes</a>
          </li>
        </ul>
      </nav>
    </header>
    
    </>
  )
}


