import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css'

const Navbar= () =>{
  return (
  <div>
    <ul>
      {"UserName"}
    </ul>
    <ul>
      <Link to="/userprofile">User Profile</Link>
    </ul>
    <ul>
      <Link to="/">Sign Out</Link>
    </ul>
    
  </div>
  );
}
export default Navbar;