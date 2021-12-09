import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/badflix-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(()  => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                handleShow(true) ;
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        }
    }, []);

    return (
        <nav className={`nav ${show && "nav-black"}`}>
            <div className="nav-menu">
                <Link to="/">
                <img 
                    className="nav-logo"
                    src={logo}
                    alt="Badflix Logo"
                />
                </Link>
                <div className="nav-left-buttons"> 
                    <Link to="/sign-up">Sign up</Link>
                    <Link to="login">Login</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="randomMovie">Random Movie</Link>
                </div>
            </div>
            <div className="nav-right-buttons">
                <Link to="profile">
                <img 
                    className="nav-avatar"
                    src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                    alt="Netflix Avatar"
                />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
