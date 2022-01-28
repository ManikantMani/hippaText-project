import React from 'react';
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import home_img from "../../images/home1.png";
const Home = () => {
  return <>
      <div className="home_main">
      <div className="home_container">
        <Navbar />
        <div className="main">
        <div className="container">
            <h3 className='heading'>HIPAATEXTS</h3>
            <h1 className='heading_text'>eliminate patient <br /> no-shows once <br /> and for all</h1>
            <p className="home_p">We’ve got your back. We’ll remind you on time</p>
            {/* <div className="buttons"> */}
            <a href="#"><button className='home_quote_button'>Get a quote<i className="fas fa-long-arrow-alt-right"></i></button></a> 
        {/* </div> */}
        </div>
        <img src={home_img} alt="homeImage" className="home_img" />
        </div>
      </div>
      </div>
  </>;
};

export default Home;
