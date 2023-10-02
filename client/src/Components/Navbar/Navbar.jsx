import { Link } from 'react-router-dom';
import logoImg from '/public/logo_image.jpg';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {
	const [isNavVisible, setIsNavVisible] = useState(true); // Estado para controlar la visibilidad de la barra de navegación
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const [isMobile, setIsMobile] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

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

	return (
		<header className=" fixed z-[999]">
			<nav
				className={`bg-white flex flex-row items-center justify-between w-[98vw] h-[5rem] mb-4 mt-0 p-0 rounded-xl shadow-2xl shadow-black ${
					isNavVisible
						? ' ease-in transition-transform'
						: ' translate-y-[-120%]  ease-in transition-transform'
				} `}>
				<div className=" ml-[1rem]">
					<Link to={'/'}>
						<img
							src={logoImg}
							alt="Logo Hard Floor"
							className="max-w-[5.8rem] p-2 rounded-full h-auto object-cover"
						/>
					</Link>
				</div>

				<div className="flex items-center gap-[10rem] ">
					{/* ... */}
					{isMobile ? (
						<>
							<button
								className="block md:hidden w-8 h-8 mr-4"
								onClick={() => setMenuOpen(!menuOpen)}>
								<FaBars className="text-3xl text-black" />
							</button>
							<Menu>
								<a
									href="#home"
									className="menu-item smooth-scroll">
									INICIO
								</a>
								<a
									href="#serviciosPrev"
									className="menu-item smooth-scroll">
									SERVICIOS
								</a>

								<Link
									to="/precios"
									className="menu-item smooth-scroll">
									PRECIOS
								</Link>
								<a
									href="#nosotrosPrev"
									className="menu-item smooth-scroll">
									NOSOTROS
								</a>
								<a
									href="#contactoPrev"
									className="menu-item smooth-scroll">
									CONTACTO
								</a>
							</Menu>
						</>
					) : (
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
							<Link
								to="/precios"
								className="">
								PRECIOS
							</Link>
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
					)}
					<ul className="text-black flex justify-center gap-4 mr-4  ">
						<Link
							to={'https://instagram.com/hard.floor?igshid=MzRlODBiNWFlZA=='}
							target="blank_">
							<FaInstagram className="text-3xl " />
						</Link>
						<Link
							to={'https://www.facebook.com/hardfloor1?mibextid=LQQJ4d'}
							target="blank_">
							<FaFacebook className="text-3xl" />
						</Link>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
