import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/badflix-logo.png';
import { Link } from 'react-router-dom'; 
import AuthService from "../../services/auth.services";


function Navbar({currentUser, storeUser}) {
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

    const authService = new AuthService();

    // crear una funcion que llamas en el onclick de logout y en la que llames al servicio y al metodo de logout y cuandoe so este hecho usas storeuser para ponerlo en null, por ejemplo
    const laura = () => {
        authService.logout()
        .then(() => {
            storeUser(null)
        })
    }

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
                {
                    currentUser ? 
                    <>
                        <Link to="/explore">Explore</Link>
                        <Link to="/mylist">My List</Link>
                        <span onClick={laura}>Logout</span>
                    </>
                    :
                    <>
                        <Link to="/sign-up">Sign up</Link>
                        <Link to="/login">Login</Link>
                    </>
                }
                </div>
            </div>
            {currentUser &&
            <div className="nav-right-buttons">
                <Link to="profile">
                <img 
                    className="nav-avatar"
                    src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                    alt="Netflix Avatar"
                />
                </Link>
            </div>
            }
        </nav>
    )
}

export default Navbar
