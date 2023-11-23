import React from 'react';
import './Style.css';
import all1 from '../Assets/images/farewell.jpeg';
import all2 from '../Assets/images/Game.JPG';
import all3 from '../Assets/images/friendship.jpg';
import all4 from '../Assets/images/graduation.jpg';
import all5 from '../Assets/images/Saman.jpg';
import all6 from '../Assets/images/wisgel3.JPG';

function Gallery() {
	return (
	  <div className="gallery-container">
		<h2>Photos Collection</h2>
		<div className="grid">
		  <div className="photo-item">
			<img src={all1} alt="1" />
		  </div>
		  <div className="photo-item">
			<img src={all2} alt="2" />
		  </div>
		  <div className="photo-item">
			<img src={all3} alt="3" />
		  </div>
		  <div className="photo-item">
			<img src={all4} alt="4" />
		  </div>
		  <div className="photo-item">
			<img src={all5} alt="5" />
		  </div>
		  <div className="photo-item">
			<img src={all6} alt="6" />
		  </div>
		</div>
	  </div>
	);
  }

export default Gallery;
