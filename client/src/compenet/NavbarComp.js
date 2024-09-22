import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../imageys/logoImage.png';

function handleScroll(e, targetId) {
  e.preventDefault(); // Prevent default link behavior
  const element = document.getElementById(targetId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

const Navbarcomp = ({scrollToBottom}) => {
  return (
    <>
<nav>
  <div>
    <a href="/"><img src={logoImage} alt="logo" height="60" /></a>
    <div id="navbarNav">
      <ul>
        <Link to="/"><li><button className='boton'>Accueill</button></li></Link>
        <li><button onClick={(e) => handleScroll(e, 'Card')} className='boton' >Produits</button></li>
        <li><button className='boton'  onClick={scrollToBottom}>Contact</button></li>
        <li><button onClick={(e) => handleScroll(e, 'Carde')} className='boton' >services</button></li>
        
      </ul>
    </div>
    <div >
      
      
      <Link to="/register"  ><button className='btnlogin' >Sign Up</button></Link>
      <Link to="/contact"  ><button className='btnlogin' >Login</button></Link>
      
      
    </div>
  </div>
</nav>
    
    
    
    </>
  );
};

export default Navbarcomp;