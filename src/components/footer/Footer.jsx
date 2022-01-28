import React from 'react';
import "./footer.css";

const Footer = () => {
  return <>
    <footer>
        <div className="footer_main">
        <div className="footer_heading">
        <a className="footer_brand" href="#"><i className="far fa-heart-rate"></i><span classNameName='footer_bold'>HIPAA</span>TEXTS.COM</a>
        <p className='footer_p'>Forget the no-shows</p>
        </div>
        <div className="footer_link">
        <a className='social_link' href="#"><i class="fab fa-facebook"></i></a>
        <a className='social_link' href="#"><i class="fab fa-twitter-square"></i></a>
        <a className='social_link' href="#"><i class="fab fa-instagram"></i></a>
        </div>
        </div>
        <div className="footer_copyright">
            <p>Copyright © 2016 HipaaTexts. All rights reserved.</p>
        </div>
    </footer>
  </>;
};

export default Footer;
