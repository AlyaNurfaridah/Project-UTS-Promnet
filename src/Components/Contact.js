import React from 'react';
import './Style.css';
import sosmed1 from '../Assets/images/ig.jpg';
import sosmed2 from '../Assets/images/wa.jpg';

function Contact() {
	return (
	  <div className="contact-container">
		<h2>Send me message below!</h2>
		 
		<div className="icon-container">
		  <div className="wa-item">
			<img src={sosmed2} alt="Foto 1" />
			<a href="https://wa.me/+6282119008489" target="_blank"> 
			<p>Available on WhatsApp</p>
			</a>
		  </div>
		  <div className="ig-item">
			  <img src={sosmed1} alt="Foto 1" />
			  <a href="https://www.instagram.com/alfardh_" target="_blank">
			  <p>Available on Instagram</p>
			  </a>
			  <p>Hasta la vista!  :D</p>
		  </div>
		</div>
	</div>
	);
};

export default Contact;
