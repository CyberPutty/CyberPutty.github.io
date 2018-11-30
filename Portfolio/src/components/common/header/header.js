import React from 'react'
import { Link } from 'gatsby'
import './header.css'
const linkStyle={
textDecoration: 'none',
color: 'inherit',
backgroundColor:'inherit'
};

const Header = ({selected}) => (
  <div className="navContainer">
    <Link to="/" style={linkStyle} ><h1 className="logo">MC<span>develop</span></h1></Link>
   
    <ul className={"inline nav "+ selected}>
      <li><Link to="/about" style={linkStyle} >About</Link></li>
      <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
      <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
    </ul>
    
    <ul className="inline">
      <li>F </li>
      <li>G </li>
      <li>C </li>
      <li>T </li>
    </ul>
  </div>
)

export default Header
