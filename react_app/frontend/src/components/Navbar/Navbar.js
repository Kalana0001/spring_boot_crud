import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="button">Home</a> 
      <div className="right-side-buttons"> 
        <a href="/employees" className="button">Employees</a>
        <a href="/adduser" className="button">Add Employee</a>
      </div>
    </nav>
  );
};

export default Navbar;
