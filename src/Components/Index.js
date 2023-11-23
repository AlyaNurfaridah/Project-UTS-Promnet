import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Style.css'; 

function Index() {
  
  const location = useLocation();
  return (
    <header>
      <nav className='navigasi'>
      <h3 className='profile'>Personal-Web-Alya</h3>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
          <li className={location.pathname === '/gallery' ? 'active' : ''}><Link to="/gallery">Gallery</Link></li>
          <li className={location.pathname === '/interest' ? 'active' : ''}><Link to="/interest">Interest</Link></li>
          <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Index;
