import React from 'react';
import contactImage from "../../images/contact1.png";
import "./contact.css"

const Contact = () => {
  return <>
      <div className="contact_main">
      <img className='contact_img' src= {contactImage} alt="" />
          <div className="contact_content">
            <h1 className='contact_heading'>why hipaatexts?</h1>
            <p className="contact_p">We’ve all been there—a missed dentist or doctor appointment because it slipped our mind to add it to our calendar or we simply forgot to show up. Since doctors are notoriously overbooked, it’s a hassle to reschedule the appointment. For patients, this scenario is a hassle.
            </p>
            <p className="contact_p"> But for physicians, no-shows are more than a hassle; they’re an expensive problem. Studies show that patient <span className="contact_bold">no-shows can cost a single doctor upwards of $150,000 a year. </span>That’s why many medical practitioners are adopting SMS appointment reminders to prevent missed appointments from happening altogether.</p>
            <a href="#"><button className='contact_quote_button'>Contact Us<i className="fas fa-long-arrow-alt-right"></i></button></a> 
          </div>
      </div>
  </>;
};

export default Contact;
