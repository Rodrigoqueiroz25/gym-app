
import React from 'react'
import './Footer.css';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <section className="footer">
        <hr />
        <div className='social-media'>
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    </section>
  )

}

export default Footer