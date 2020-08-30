import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{width:"100%",textAlign:"center"}}>
<footer style={{  textAlign: "center",
  padding: "3px",
  backgroundColor: "DarkSalmon",
  color: "black"}}>
  <p>Author: Razia</p><br />
  <Link style={{color:"black"}} to="#">mailto:razia1999khan@gmail.com</Link>
</footer>
    </div>
  );
};
export default Footer;
