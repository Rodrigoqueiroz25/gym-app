
import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className='logo' src={logo} alt="" />

      {menuOpened === false && mobile ? (
        <div className='bars' onClick={() => setMenuOpened(true)}>
          <img src={bars} alt="" />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link
              to='home'
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home</Link>
          </li>
          <li>
            <Link
              to='programs'
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs</Link>
          </li>
          <li>
            <Link
              to='reasons'
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
            Why us</Link>
          </li>
          <li>
            <Link
              to='plans'
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans</Link>
          </li>
          <li>
            <Link
              to='testimonials'
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials</Link>
          </li>
        </ul>
      )}


    </div>
  )
}

export default Header