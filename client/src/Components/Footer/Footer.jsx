// import LogoImg from '/images/Logo-_Tecno_Aberturas_DC__2_-removebg-preview.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom';
import LogoImg from '/public/logo_image.jpg';

export default function Footer() {
	return (
		<footer className=" bg-orange-950 text-white py-5">
			<div className="container lg:mx-auto flex flex-wrap justify-between items-center ">
				<div className=" bg-white md:w-auto mb-10 md:mb-0 rounded-full ml-12 lg:ml-auto ">
					<img
						src={LogoImg}
						alt="Logo"
						className=" w-[8rem] lg:w-[10rem] object-cover rounded-full z-[9999999] lg:m-0 "
					/>
				</div>

				<div className=" ml-20 mb-4">
					<div className="flex flex-col items-center ">
						<p className=" text-md font-bold mb-4 mx-4 text-center md:text-left">
							¡Encontranos en nuestras redes!
						</p>
						<div className="social-links mt-4 flex justify-center md:justify-start">
							<Link
								to="https://www.facebook.com/hardfloor1?mibextid=LQQJ4d"
								target="_blank"
								className="inline-block mr-4">
								<FaFacebook className="text-3xl" />
							</Link>
							<Link
								to="https://www.instagram.com/hard.floor/"
								target="_blank"
								className="inline-block">
								<FaInstagram className="text-3xl" />
							</Link>
						</div>
					</div>
				</div>

				<div className="w-full md:w-auto mt-6 lg:mt-auto mb-10 md:mb-0">
					<p className="text-sm font-bold mb-2 text-center md:text-left">Contacto</p>
					<p className="text-sm text-center md:text-left">
						<a href="tel://1165282356">Tel: 11 3431 2882</a>
					</p>
					<p className="text-sm text-center md:text-left">
						<a href="">Email:</a>
					</p>
					<p className="text-sm text-center md:text-left">
						El Rincón 951, Pilar Centro, Provincia de Buenos Aires
					</p>
				</div>

				<div className="w-full md:w-auto">
					<p className="text-sm font-bold mb-2 text-center md:text-left">
						Horario de atención
					</p>
					<p className="text-sm text-center md:text-left">
						Lunes a Viernes: 8:00 a 17:00 hs
					</p>
				</div>
			</div>

			<hr className="border-gray-700 my-10" />
			<div className="container mx-auto text-center">
				<p className="text-sm">© 2023 Hard Floor Pisos | Powered by F. Cordobés</p>
			</div>
		</footer>
	);
}
