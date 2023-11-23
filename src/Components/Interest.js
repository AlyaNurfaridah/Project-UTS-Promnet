import React from 'react';
import './Style.css';
import fav1 from '../Assets/images/Lunacat.jpg';
import fav2 from '../Assets/images/cooking.jpg';
import fav3 from '../Assets/images/painting.jpg';

function Gallery() {
	return (
	  <div className="gallery-container">
		<h2>There are three things in especially that I enjoy. </h2>
		<div className="grid">
		  <div className="photo-item">
			<img src={fav1} alt="1" />
		  </div>
		  <div className="photo-item">
			<img src={fav2} alt="2" />
		  </div>
		  <div className="photo-item">
			<img src={fav3} alt="3" />
		  </div>
		</div>
	  </div>
	);
  }

export default Gallery;
