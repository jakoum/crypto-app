import React, { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Exemple() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SMART REMINDER
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                Signup
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >Log In
               {/* <button id='a' onClick={()=>navigate('/login')} >LOG IN</button> */}
              </Link>
              {/* <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >Sign Up
              </Link> */}
            </li>
          </ul>
          {/* <Button buttonStyle='btn--outline' onClick={()=>navigate('/sign')}>SIGN UP</Button> */}
        </div>
      </nav>
    </>
  );
}

export default Exemple;