import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true) 

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // Scalable button (for mobile version)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true)
        }
    }

    // This hook allow us to render the button one time and not gonna show up anymore (It gonna pass empty into the showButton ???)   
    useEffect(() => {
        showButton();
    }, [])

    // Invoke showButton (above) (after finishing this step, cannot see anything on the console cuz we haven't add any CSS the the nav bar)
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}> 
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                                Services
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                                Products
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links-mobile' onClick={closeMobileMenu}> {/* property 'nav-links-mobile' is only triggered when window is shrinked down (eg. mobile interface)*/}
                                Sign Up
                                </Link>
                        </li>
                    </ul>
                    {/* if button is true, return the button component (&&: shortcut for return). If we don't set any value for buttonStyle -> buttonStyle = STYLES[0] = btn--primary */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar

