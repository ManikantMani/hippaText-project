import React from 'react';
import './navbar.css';

const Navbar = () => {
  return <>
  <div className="container_nav">
  <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i className="far fa-heart-rate"></i><span classNameName='hippa_bold'>HIPAA</span>TEXTS.COM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">What We Do</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
      </ul>
      <div className="button">
      <a href="#"><button className='quote_button'>Get a quote<i className="fas fa-long-arrow-alt-right"></i></button></a>
      </div>
    </div>
  </div>
</nav>
</div>
  </>;
};

export default Navbar;
