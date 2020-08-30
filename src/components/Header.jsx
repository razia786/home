import React from "react";
import {Link,NavLink} from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
   <ul>
      <li>
      <NavLink activeClassName="active"  to="/home">Home</NavLink>
      </li>
      <li>
      <Link to="/contact">Contact Me</Link>
      </li>
      <li>
      <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1N-LJFeoV6p3pF57LY8TV6S8DH6cK86VY/view?usp=drivesdk">Resume</a>
      </li>
    </ul>
    </div>
  );
};
export default Header;
