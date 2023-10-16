import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>

			{/* <Footer /> */}
		</>
	);
}

export default App;
