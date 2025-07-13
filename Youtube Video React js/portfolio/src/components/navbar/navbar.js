 import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import Contactimg from '../../assets/contact.png'



const Navbar = () => {
  return (
    
<nav className="Navbar">
  <img src={logo} alt="logo" className='logo' />
  <div  className="desktopMenu">

  <Link className="desktopMenuListItem">Home</Link>
  <Link className="desktopMenuListItem">About</Link>
  <Link className="desktopMenuListItem">Portfolio</Link>
  <Link className="desktopMenuListItem">Client</Link>
  </div>

<button className="desktopMenuBtn">

 <img src={Contactimg} alt="" className="desktopMenuimg"/>Contact Me </button>



</nav>


  )
}

export default Navbar
