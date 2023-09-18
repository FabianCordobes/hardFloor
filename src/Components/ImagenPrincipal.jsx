import imagenHome from '../assets/image.jpg';
import imagen1 from '../assets/IMG_20220316_131200332.jpg';
import imagen2 from '../assets/0BF6AC56-EB78-481F-AA53-44E637666754.jpg';
import imagen3 from '../assets/178065400_469888721016039_8292226291088050321_n.jpg';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import imageMobile from '../assets/imageMobile.png';

const ImagenPrincipal = () => {
	return (
		<div
			id="home"
			className="flex flex-col mt-[6rem] ">
			{isMobile ? (
				<div className='mb-[2rem]'>
					<img
						src={imageMobile}
						alt="Deck Mobile Background"
						className='relative left-[2.05rem] '
					/>
				</div>
			) : (
				<div>
					<img
						src={imagenHome}
						alt="Deck Background"
						className="absolute w-[1505px]  right-[0rem] -z-1 shadow-2xl shadow-black"
					/>

					<div className="relative z-1 flex justify-center right-[10.2rem] top-[6.7rem]">
						<h1
							className=" text-white font-extrabold text-6xl w-[58rem] h-[10rem] tracking-tighter text-center"
							data-aos-delay="500"
							data-aos="zoom-in-up"
							data-aos-duration="1000">
							DESCUBRÍ LA EXCELENCIA EN PISOS DE MADERA
						</h1>
					</div>

					<div className="flex flex-row">
						<Link
							to={'/'}
							className=" relative left-[4.3rem] top-[7.4rem] ">
							<img
								src={imagen1}
								alt="Piso de madera"
								className="w-[200px] h-[215px] object-cover rounded-lg  border-4 border-[#4d3518] shadow-lg shadow-black "
							/>
						</Link>
						<Link
							to={'/'}
							className="relative left-[6.5rem] top-[7.4rem] ">
							<img
								src={imagen2}
								alt="Piso de madera"
								className="w-[200px] h-[215px]  rounded-lg object-cover border-4 border-[#4d3518] shadow-lg shadow-black "
							/>
						</Link>
						<Link
							to={'/'}
							className="relative left-[9.4rem] top-[7.4rem] ">
							<img
								src={imagen3}
								alt="Deck"
								className=" w-[200px] h-[215px] rounded-lg object-cover border-4 border-[#4d3518] shadow-lg shadow-black "
							/>
						</Link>
					</div>

					<div className="relative z-1 flex justify-center left-[26rem] bottom-[12rem]">
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
						className="relative z-1 flex flex-col justify-center right-[4rem] bottom-[8rem] text-right text-4xl font-extrabold leading-[3rem] ">
						<li>DISEÑO</li>
						<li>CALIDAD</li>
						<li>CONFORT</li>
						<li>TECNOLOGÍA</li>
					</ul>

					<div className="relative z-1 flex justify-center left-[16.2rem] bottom-[21.3rem]">
						<h1
							data-aos-delay="500"
							data-aos="flip-left"
							data-aos-duration="1000"
							className=" text-white font-medium text-4xl w-[10rem]  tracking-wide">
							Cotizá <span className="font-extrabold">HOY</span> MISMO
						</h1>
					</div>

					<div className="relative z-1 flex justify-center right-[16rem] bottom-[14.6rem]">
						<h1
							// data-aos-delay="500"
							data-aos="zoom-out"
							// data-aos-duration="500"
							className=" text-white font-extrabold text-4xl w-[58rem] tracking-tighter ]">
							50 AÑOS DE EXPERIENCIA
						</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImagenPrincipal;
