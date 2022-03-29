import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../helpers/Button';
import './Navbar.css';


function Navbar() {
  const isBrowser = typeof window !== "undefined"
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      setNavbar(true)
    } else {
      setButton(true);
      setNavbar(false)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  if(isBrowser){

  window.addEventListener('resize', showButton);

  const changeBackground = () => {

    if(window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false)
    }

  }

  window.addEventListener("scroll", changeBackground)

}

  return (
    <>
 
      {/* Wechsel zwischen mobiler Ansicht und Desktopansicht */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        {/* Anzeigen des mobilen Drawers */}
        <div className={click ? 'navbar-container' : 'navbar-container'} style={{backgroundColor: 'rgb(128,34,28)'}}>
          {/* Titel */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Florian Klein
          </Link>
          {/* Icon in mobiler Ansicht */}
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          {/* Wechsel zwischen mobiler Ansicht und Desktop */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* Nav-Item Home */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/MarkDown/blog' className='nav-links' onClick={closeMobileMenu}>
                Blog & Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/MarkDown/personal'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Personal
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
} export default Navbar;



