import React from "react";
import "./Navbar.css";
import Link from "next/link"

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
    <Link href="/">  <div className="logo">Kiprono</div></Link>
      <div className="navlinks">
        <ul>
          <li>
           <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/skills">Skills</Link>
            
          </li>
          <li>
            <Link href="portfolio">Portfolio</Link>
            
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              className="resume"
              href="https://kipronoresume.netlify.app"
              target="_blank"
            >
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
