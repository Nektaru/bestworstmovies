import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from './img/badflix-logo.png' 
import {Link} from 'react-router-dom'


function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(()  => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                handleShow(true) ;
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <div className="nav__menu">
                <img 
                    className="nav__logo"
                    src={logo}
                    alt="Badflix Logo"
                />
                <div className="nav__stuffs">   
                    <Link to="#">Sign up</Link>
                    <Link to="#">Login</Link>
                    <Link to="#">Explore</Link>
                    <Link to="#">Random Movie</Link>
                </div>
            </div>
            <div className="nav__more__stuffs">
                <img 
                    className="nav__avatar"
                    src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                    alt="Netflix Avatar"
                />
            </div>
        </nav>
    )
}

export default Navbar
