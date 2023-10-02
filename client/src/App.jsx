import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import Contacto from './Views/Contacto/Contacto';
import Nosotros from './Views/Nosotros/Nosotros';
import Obras from './Views/Obras/Obras';
import Servicios from './Views/Servicios/Servicios';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PriceList from './Components/PriceList/PriceList';

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
				<Route
					path="/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/nosotros"
					element={<Nosotros />}
				/>
				<Route
					path="/obras"
					element={<Obras />}
				/>
				<Route
					path="/servicios"
					element={<Servicios />}
				/>
				<Route
					path="/precios"
					element={<PriceList />}
				/>
			</Routes>

			{/* <Footer /> */}
		</>
	);
}

export default App;
