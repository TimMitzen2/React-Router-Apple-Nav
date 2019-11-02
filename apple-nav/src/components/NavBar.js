import React from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navBar'>
      <Link exact className="nav" to="/">
       Apple
      </Link>
      <Link  className='nav' to='/iphone'>Iphone</Link>
      <Link className='nav' to='/macbook'>MacBook</Link>
      <Link className='nav' to='/iPad'>iPad</Link>

    </div>
  );
};

export default Navbar;
