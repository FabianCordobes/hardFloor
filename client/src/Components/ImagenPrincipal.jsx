import imagenHome from '../assets/image.jpg';
import imagen1 from '../assets/imagen1.webp';
import imagen2 from '../assets/imagen2.webp';
import imagen3 from '../assets/imagen3.webp';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import imageMobile from '../assets/imageMobile.png';
import imageMobileCompleta from '../assets/imagenMobilecompleta.png';

const ImagenPrincipal = () => {
	return (
		<div
			id="home"
			className="flex flex-col mt-0 ">
			{isMobile ? (
				<div className="mb-[2rem] mt-[5rem] flex flex-col justify-center items-center">
					<img src={imageMobileCompleta} alt="" className='w-[100%]' />
					{/* <img
						src={imageMobile}
						alt="Deck Mobile Background"
						className="relative -z-1 left-[0rem]   "
					/>

					<div className="relative bottom-[57.4rem] right-[2px] flex justify-center z-99 tracking-[-0.17em] leading-6 ">
						<h1 className="text-white font-extrabold text-[1.6rem] w-[22.8rem]">
							DESCUBRÍ LA EXCELENCIA EN PISOS DE MADERA
						</h1>
					</div>

					<div className=" relative bottom-[55.5rem]  grid grid-cols-2 gap-6 gap">
						<img
							src={imagen1}
							alt=""
							className="w-[150px] h-[165px] object-cover rounded-lg  border-4 border-[#4d3518] shadow-lg shadow-black "
						/>
						<img
							src={imagen2}
							alt=""
							className="w-[150px] h-[165px] object-cover rounded-lg  border-4 border-[#4d3518] shadow-lg shadow-black "
						/>
						<img
							src={imagen3}
							alt=""
							className="w-[150px] h-[165px] object-cover rounded-lg  border-4 border-[#4d3518] shadow-lg shadow-black "
						/>
					</div>

					<div className=" relative left-[4.5rem] bottom-[56rem] flex justify-center">
						<h1 className="font-extrabold text-4xl w-[10rem] text-right tracking-[-0.2rem] leading-[1.4rem]">
							CALIDAD <span className=" text-red-600">PREMIUM</span>
						</h1>
					</div>

					<ul className="relative z-1 flex flex-col justify-center left-[4.2rem] bottom-[53rem] text-right text-2xl font-extrabold leading-[2rem] ">
						<li>DISEÑO</li>
						<li>CALIDAD</li>
						<li>CONFORT</li>
						<li>TECNOLOGÍA</li>
					</ul>

					<div className="relative z-1 flex justify-center right-[4.2rem] bottom-[61.2rem]">
						<h1 className=" text-white font-medium text-lg w-[7rem]  tracking-widest leading-[1.3rem]">
							COTIZÁ<span className="font-extrabold"> HOY </span>MISMO
						</h1>
					</div>

					<div className="relative z-1 flex justify-center right-[0.2rem] bottom-[44.7rem]">
						<h1 className=" text-white font-extrabold text-xl w-[58rem] tracking-[-0.02rem] ">
							50 AÑOS DE EXPERIENCIA
						</h1>
					</div> */}
				</div>
			) : (
				<div>
					<img
						src={imagenHome}
						alt="Deck Background"
						className="absolute w-[100vw] h-[105vh] right-[0rem] -z-1 sombra-deck shadow-gray-700"
					/>

					<div className="relative z-1 flex justify-center right-[11.4rem] top-[6.7rem]">
						<h1
							className=" text-white font-extrabold text-6xl w-[60rem] h-[10rem] tracking-[0.02em] text-center"
							data-aos-delay="500"
							data-aos="zoom-in-up"
							data-aos-duration="1000">
							DESCUBRÍ LA EXCELENCIA EN PISOS DE MADERA
						</h1>
					</div>

					<div className="flex flex-row">
						<Link
							to={'/'}
							className=" relative right-[11.6rem] top-[7.4rem] ">
							<img
								src={imagen1}
								alt="Piso de madera"
								className="w-[200px] h-[215px] object-cover rounded-lg  border-4 border-[#4d3518] shadow-lg shadow-black "
							/>
						</Link>
						<Link
							to={'/'}
							className="relative right-[7.8rem] top-[7.4rem] ">
							<img
								src={imagen2}
								alt="Piso de madera"
								className="w-[200px] h-[215px]  rounded-lg object-cover border-4 border-[#4d3518] shadow-lg shadow-black "
							/>
						</Link>
						<Link
							to={'/'}
							className="relative right-[2.7rem] top-[7.4rem] ">
							<img
								src={imagen3}
								alt="Deck"
								className=" w-[200px] h-[215px] rounded-lg object-cover border-4 border-[#4d3518] shadow-lg shadow-black "
							/>
						</Link>
					</div>

					<div className="relative z-1 flex justify-center left-[29rem] bottom-[12rem]">
						<h1
							data-aos-delay="500"
							data-aos="zoom-in-left"
							data-aos-duration="1000"
							className=" text-white font-extrabold text-6xl w-[25rem] tracking-[-0.2rem] text-right leading-[2.6rem]">
							CALIDAD <span className=" text-red-600">PREMIUM</span>
						</h1>
					</div>

					<ul
						data-aos-delay="500"
						data-aos="fade-left"
						data-aos-duration="1000"
						className="relative z-1 flex flex-col justify-center left-[10.7rem] bottom-[8rem] text-right text-4xl font-extrabold leading-[3rem] ">
						<li>DISEÑO</li>
						<li>CALIDAD</li>
						<li>CONFORT</li>
						<li>TECNOLOGÍA</li>
					</ul>

					<div className="relative z-1 flex justify-center left-[18.2rem] bottom-[21.3rem]">
						<h1
							data-aos-delay="500"
							data-aos="flip-left"
							data-aos-duration="1000"
							className=" text-white font-medium text-4xl w-[10rem]  tracking-widest">
							Cotizá <span className="font-extrabold">HOY</span> MISMO
						</h1>
					</div>

					<div className="relative z-1 flex justify-center right-[17.8rem] bottom-[14.6rem]">
						<h1
							// data-aos-delay="500"
							data-aos="zoom-out"
							// data-aos-duration="500"
							className=" text-white font-extrabold text-4xl w-[58rem] tracking-[0.01] ]">
							50 AÑOS DE EXPERIENCIA
						</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImagenPrincipal;
