import React from 'react';
import './nav.css';
import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <header>
            <div className='logo'>
                LOGO
                {/* <image src={logo} alt="logo" /> */}
            </div>
            <nav>
                <ul className="menu">
                    <li>  <a href="#"> Home</a></li>
                    <li>
                        <a href="#"> Services</a>
                        <ul className="dropdown-menu">
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                    </li>
                    <li><a href="#"> Classes</a></li>
                    <li><a href="#"> Restaurants</a></li>
                    <li><a href="#"> Blog</a></li>
                    <li><a href="#"> Shop</a></li>
                </ul>
            </nav>
            <div className="signin">
                <button>Sign In</button>
            </div>
        </header>
    );
};

export default NavBar;
