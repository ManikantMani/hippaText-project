import React from 'react';
import "./about.css"
import img1 from "../../images/group1.png"
import img2 from "../../images/group2.png"

const About = () => {
  return <>
      <div className="about_container">
      <img src={img1} alt="" className="about_img1" />
          <div className="about_content">
              <h1 className='about_heading'>integrating a scalable, flexible, end-to-<br /> end appointment reminder solution</h1>
              
              <div className="about_p_group">
              <p className="about_p">Whether your business is a complex communications operation like the hospital or the town’s local doctor’s office, <br /> building SMS and voice into your customer communications is easy with SMS APIs like HipaaTexts. APIs allow you <br /> to build appointment reminder logic into your own scheduling or CRM software, and provide you with enormous <br /> amounts of flexibility to customize the timing of your patient alerts and scheduling.</p>
              <p className="about_p"> HipaaTexts robust global network and simple-to-use API provides the the scale, flexibility, performance, and reliability to ensure appointment reminders reach patients automatically, every time. And, ultimately, SMS <br /> reminders can help stop no-shows so medical professionals can do what they do best: create a healthy patient <br /> experience every time.</p>
          </div>
          </div>
          <img src={img2} alt="" className="about_img2" />
      </div>
  </>;
};

export default About;
