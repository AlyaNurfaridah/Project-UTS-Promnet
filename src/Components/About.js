import React from "react";
import './Style.css';

function About (){
	return (
		<div className="about-content">
          <div className="about-text">
            <h2>When I Was Born...</h2>
            <p className='big-point'>
                Helo my Name is Alya Nurfaridah, you can call me Alya. I was born in Sungai Penuh, Jambi City on 16 th April 2004. 
                My brother and I am the second child. I am presently enrolled in the second level of semester 3 of the computer science 
                education study program at the Indonesian University of Education, where I am pursuing a bachelor's degree. 
                The program began in 2022. Journaling and watching movies are two of my pastimes. Aside from that, I'm interested in 
                social issues like volunteering and committee work as well as the field of education.
            </p>

            <h2>Graduate From</h2>
                <ul>
                    <li>
                        <h4>SDN 004/XI Pelayang Raya (2010 - 2016)</h4>
                        <p className='school-desc'>
                           After completing Bhayangkara Kindergarten, I studied elementary school.
                       </p>
                    </li>
                    <li>
                        <h4>SMPN 009 Amar Sakti (2017-2018)</h4>
                        <p className='school-desc'>
                           I attended my final school in Jambi before moving to a boarding school 
                           in Kota Wisata, Cibubur, where I studied until I completed my high school education.
                        </p>
                    </li>
                    <li>
                        <h4>SIT Fajar Hidayah Kota Wisata (2018-2022)</h4>
                        <p className='school-desc'>
                            I completed my high school from junir high school at the same school.</p>
                    </li>
                </ul>
		   </div>
		</div>
	);
};

export default About;
