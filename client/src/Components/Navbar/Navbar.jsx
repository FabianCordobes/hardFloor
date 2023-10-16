import { Link } from 'react-router-dom';
import logoImg from '/public/logo_image.jpg';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {
	const [isNavVisible, setIsNavVisible] = useState(true); // Estado para controlar la visibilidad de la barra de navegación
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const [isMobile, setIsMobile] = useState(false);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (currentScrollPos > prevScrollPos) {
				setIsNavVisible(false); // Oculta la barra al hacer scroll hacia abajo
			} else {
				setIsNavVisible(true); // Muestra la barra al hacer scroll hacia arriba
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	useEffect(() => {
		// Obtén todos los enlaces internos con la clase smooth-scroll
		const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

		// Agrega un controlador de clic suave a cada enlace interno
		smoothScrollLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault(); // Evita el comportamiento predeterminado del enlace

				const targetId = link.getAttribute('href').substring(1); // Obtiene el ID de destino sin el '#'
				const targetElement = document.getElementById(targetId); // Encuentra el elemento de destino

				if (targetElement) {
					// Desplázate suavemente hacia el elemento de destino
					targetElement.scrollIntoView({
						behavior: 'smooth',
					});
				}
			});
		});
	}, []);

	// Define una función para abrir/cerrar el menú

	return (
		<header className="fixed z-[999]">
			{isMobile ? (
				// Renderiza el menú burger solo en dispositivos móviles
				<nav
					className={`bg-white flex flex-row items-center justify-between w-[98vw]  lg:h-[5rem] mb-4 mt-0 p-0 rounded-xl shadow-2xl shadow-black ${
						isNavVisible
							? ' ease-in transition-transform'
							: ' translate-y-[-120%]  ease-in transition-transform'
					} `}>
					<div className="ml-[1rem]">
						<Link to={'/'}>
							<img
								src={logoImg}
								alt="Logo Hard Floor"
								className="max-w-[5.8rem] p-2 rounded-full h-auto object-cover"
							/>
						</Link>
					</div>
					<div className="mr-[1rem]">
						{isMobileMenuOpen ? (
							<FaTimes
								className="text-3xl text-black"
								onClick={toggleMobileMenu}
							/>
						) : (
							<FaBars
								className="text-3xl text-black"
								onClick={toggleMobileMenu}
							/>
						)}
					</div>
				</nav>
			) : (
				// Renderiza la lista de elementos en computadoras
				<nav
					className={`bg-white flex flex-row items-center justify-between w-[98vw]  lg:h-[6rem] mb-4 mt-0 p-0 rounded-xl shadow-2xl shadow-black ${
						isNavVisible
							? ' ease-in transition-transform'
							: ' translate-y-[-120%]  ease-in transition-transform'
					} `}>
					<div className="ml-[1rem]">
						<Link to={'/'}>
							<img
								src={logoImg}
								alt="Logo Hard Floor"
								className="max-w-[6.9rem] p-2 rounded-full h-auto object-cover"
							/>
						</Link>
					</div>

					<ul className="flex flex-row justify-center gap-6 text-black text-xl font-bold">
						<a
							href="#home"
							className="nav-link smooth-scroll">
							INICIO
						</a>
						<a
							href="#serviciosPrev"
							className="nav-link smooth-scroll">
							SERVICIOS
						</a>
						<a
							href="#preciosPrev"
							className="nav-link smooth-scroll">
							PRECIOS
						</a>
						<a
							href="#nosotrosPrev"
							className="nav-link smooth-scroll">
							NOSOTROS
						</a>
						<a
							href="#contactoPrev"
							className="nav-link smooth-scroll">
							CONTACTO
						</a>
					</ul>
					<ul className="text-black flex justify-center gap-4 mr-4">
						<Link
							to={'https://instagram.com/hard.floor?igshid=MzRlODBiNWFlZA=='}
							target="blank_">
							<FaInstagram className="text-3xl nav-link smooth-scroll" />
						</Link>
						<Link
							to={'https://www.facebook.com/hardfloor1?mibextid=LQQJ4d'}
							target="blank_">
							<FaFacebook className="text-3xl nav-link " />
						</Link>
					</ul>
				</nav>
			)}

			{/* Renderiza el menú burger en dispositivos móviles */}
			{isMobile && (
				<Menu
					isOpen={isMobileMenuOpen}
					onStateChange={({ isOpen }) => setIsMobileMenuOpen(isOpen)}
					right
					className="bg-[#8b4a0cf6]  max-h-[84vh] min-w-[80vw] text-2xl rounded-ss-2rem rounded-bl-[220px] ">
					<a
						onClick={() => setIsMobileMenuOpen(false)}
						href="#home"
						className=" mt-[6rem] smooth-scroll">
						INICIO
					</a>
					<a
						onClick={() => setIsMobileMenuOpen(false)}
						href="#serviciosPrev"
						className=" mt-8 smooth-scroll">
						SERVICIOS
					</a>
					<a
						onClick={() => setIsMobileMenuOpen(false)}
						href="#preciosPrev"
						className=" mt-8 smooth-scroll">
						PRECIOS
					</a>
					<a
						onClick={() => setIsMobileMenuOpen(false)}
						href="#nosotrosPrev"
						className="mt-8 smooth-scroll">
						NOSOTROS
					</a>
					<a
						onClick={() => setIsMobileMenuOpen(false)}
						href="#contactoPrev"
						className="mt-8 smooth-scroll">
						CONTACTO
					</a>
					<div className="flex flex-row ml-[8.5rem] mt-8">
						<Link
							to={'https://instagram.com/hard.floor?igshid=MzRlODBiNWFlZA=='}
							target="blank_">
							<FaInstagram className="text-4xl" />
						</Link>
						<Link
							to={'https://www.facebook.com/hardfloor1?mibextid=LQQJ4d'}
							target="blank_">
							<FaFacebook className="text-4xl mt-4" />
						</Link>
					</div>
				</Menu>
			)}
		</header>
	);
};

export default Navbar;
