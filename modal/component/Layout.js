import { Outlet, Link } from "react-router-dom";
import { ReactDOM } from "react";
import mylogo from '../havenlogo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import  {useState} from 'react'




function Layout () {
     const [isActive, setActive] = useState ('false');
     const toggle = () => {
        setActive (!isActive)
     }     

    return (
        <>
          <header className="header">
            <img src={mylogo} className= 'img-fluid'/>
            <FontAwesomeIcon icon={faBars} className= 'fa-bars' onClick={toggle}/>
            <ul className={isActive? 'active':'nav'}>
                <li className='navlink'>
                    <Link to ="/" className="navitem" onClick={toggle}>Home</Link>
                </li>
                <li className="navlink">
                    <Link to ="/project" className="navitem" onClick={toggle}>Projects</Link>
                </li>
                <li className="navlink">
                    <Link to ="/Blogs" className="navitem"onClick={toggle}>Blogs</Link>
                </li>
                <li className="navlink">
                    <Link to ="/Contact" className="navitem"onClick={toggle}>Contact</Link>
                </li>
                <li className="navlink">
                    <Link to ="/about" className="navitem"onClick={toggle}>About me</Link>
                </li>
            </ul>
          </header>
          
          <Outlet />
        </>
    )
};

export default Layout;