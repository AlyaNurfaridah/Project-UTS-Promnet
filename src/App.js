import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Interest from './Components/Interest';
import Contact from './Components/Contact';
import React from 'react';
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/gallery' element={<Gallery />} />
                <Route path='/interest' element={<Interest />} />
                <Route path='/contact' element={<Contact />} />
			</Routes>
		</Router>
	);
}



export default App;
