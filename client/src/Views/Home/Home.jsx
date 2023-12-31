import ImagenPrincipal from '../../Components/ImagenPrincipal';
import PrevNosotros from '../../Components/PrevNosotros';
import { Parallax } from 'react-parallax';
import serviceImg from '../../assets/servicios_bg.webp';
import SwiperSlider from '../../Components/SwiperSlider';
import serviceImg2 from '../../assets/serviceImg2.webp';
import serviceImg2Mobile from '../../assets/serviceImg2_mobile.jpg';
import { FaBox, FaTools, FaUser } from 'react-icons/fa';
import Form from '../../Components/Form';
import Footer from '../../Components/Footer/Footer';

import pisosImages from '../../Utils/pisosData';
import decksImages from '../../Utils/decksData';
import marcasImages from '../../Utils/marcasData';
import mueblesImages from '../../Utils/mueblesData';
import escalerasImages from '../../Utils/escaleraData';
import revestimientosImages from '../../Utils/revestimientosData';
import pergolasImages from '../../Utils/pergolasData';
import pinturaImages from '../../Utils/pinturaData';
import precios from '../../Utils/precios';

import marcoImg from '../../assets/marco.png';
import bigMarco from '../../assets/big_marco.png';

import maderas1 from '../../assets/tiposdeMadera/maderas_1.png';
import maderas2 from '../../assets/tiposdeMadera/maderas_2.png';
import maderas3 from '../../assets/tiposdeMadera/maderas_3.png';
import maderas4 from '../../assets/tiposdeMadera/maderas_4.png';
import maderas5 from '../../assets/tiposdeMadera/maderas_5.png';
import maderas6 from '../../assets/tiposdeMadera/maderas_6.png';
import maderas7 from '../../assets/tiposdeMadera/maderas_7.png';
import maderas8 from '../../assets/tiposdeMadera/maderas_8.png';

import { isMobile } from 'react-device-detect';

const Home = () => {
	return (
		<main className="flex flex-col items-center ">
			{/* Imagen principal */}
			<ImagenPrincipal />

			{/* Prev. Nosotros */}
			<PrevNosotros />

			{/* Prev. Servicios */}
			<div
				id="serviciosPrev"
				className="flex flex-col justify-center items-center">
				<div className="mt-4 flex flex-col items-center bottom-[1.5rem] shadow-md shadow-[#222020] mb-[2.6rem] ">
					<img
						src={marcoImg}
						alt=""
						className="absolute w-[100vw] h-[30vh] shadow-md shadow-[#222020]"
					/>
					<div>
						<Parallax
							bgImage={serviceImg}
							strength={700}
							className="relative top-[1.78rem] w-[94vw] h-[22.3vh] ">
							<div className=" lg:relative bottom-[2rem]  w-[95vw] h-[22vh] lg:h-[30vh] lg:p-12 flex justify-around lg:justify-center items-center flex-col lg:gap-8">
								<h1
									data-aos-duration="500"
									data-aos="zoom-in-left"
									className=" text-white text-3xl lg:text-6xl tracking-widest font-medium">
									Nuestros Servicios
								</h1>
								<div className="flex text-white items-center justify-center  flex-row gap-8 lg:gap-4 lg:w-[85vw]">
									<ul className="flex  flex-col lg:flex-row justify-center gap-0 lg:gap-[1rem] lg:w-[45vw] text-md  lg:text-2xl text-left">
										<li>Venta y colocación</li>
										<li>Restauración</li>
										<li>Parquet / Pisos con diseños </li>
									</ul>
									<ul className="flex flex-col lg:flex-row justify-center  gap-0 lg:gap-[2rem] my-4 lg:my-0 lg:w-[30vw] text-md lg:text-2xl text-left">
										<li>Pulido </li>
										<li>Hidrolaqueado</li>
										<li>Plastificado</li>
									</ul>
								</div>
							</div>
						</Parallax>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 w-[100vw] px-[4.5	rem] bg-[#5E2217] mt-4 ">
					{/* Pisos de madera */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem] lg:ml-[0.9rem] lg:mx-4 mt-6 lg:mt-0 flex flex-col lg:items-center ">
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Pisos de madera</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Decks */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem]   lg:ml-[1rem] lg:mx-4 mt-4 lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={decksImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Decks</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Pergolas */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem] lg:mx-4 mt-4 lg:ml-[1rem] lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={pergolasImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Pérgolas</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Escaleras de madera */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem]   lg:ml-[1rem] lg:mx-4 mt-4 lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={escalerasImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Escaleras</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Revestimientos */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem]   lg:ml-[1rem] lg:mx-4 mt-4 lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={revestimientosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Revestimientos</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Muebles */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem]   lg:ml-[1rem] lg:mx-4 mt-4 lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={mueblesImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Muebles</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Pintura ext/int */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem]   lg:ml-[1rem] lg:mx-4 mt-4 lg:mt-0  flex flex-col items-center ">
						<SwiperSlider productImages={pinturaImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-4 mb-6 lg:mb-12 flex flex-col items-center lg:items-start justify-between  lg:gap-8 lg:ml-[7.5rem]">
							<h2 className="text-3xl lg:text-4xl mb-4">Pintura ext/int</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>
				</div>

				<div className="w-[98.7vw] py-4 lg:py-0 lg:h-[45vh] bg-amber-800 mb-0 flex flex-col lg:flex-row items-center justify-around lg:justify-center gap-[2rem] ">
					<h2 className="lg:ml-2 px-4 lg:px-0 text-2xl">
						Descubrí nuestros tipos de madera disponible
					</h2>
					<div className=" grid grid-cols-2 lg:grid-cols-4 w-[90%] lg:w-[60%] lg:max-h-[90%] lg:gap-2 mr-2">
						<div className=''>
							<img
								src={maderas1}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Lapacho</span>
						</div>
						<div className=''>
							<img
								src={maderas2}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Incienso</span>
						</div>
						<div className=''>
							<img
								src={maderas3}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Guayubira</span>
						</div>
						<div className=''>
							<img
								src={maderas4}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Guatambu</span>
						</div>
						<div className=''>
							<img
								src={maderas5}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Anchico</span>
						</div>
						<div className=''>
							<img
								src={maderas6}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Viraro</span>
						</div>
						<div className=''>
							<img
								src={maderas7}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Eucaliptus Saligna</span>
						</div>
						<div className=''>
							<img
								src={maderas8}
								alt=""
								className='relative top-[20%]'
							/>
							<span className='relative bottom-[5px] text-xl lg:text-2xl'>Eucalipto</span>
						</div>
						
					</div>
				</div>

				<div className="w-[99vw] h-[43vh]  bg-amber-500 mb-0 py-4 lg:py-0 flex flex-col lg:flex-row items-center justify-around lg:justify-center gap-[1rem] ">
					<h2 className="ml-4 text-2xl">¡Conocé las marcas con las que trabajamos!</h2>
					<div className=" grid grid-cols-2 lg:grid-cols-3 w-[100%]  lg:w-[75%] ml-[7rem] lg:ml-[5rem]  gap-y-2">
						{marcasImages?.map((marca, index) => (
							<img
								className="w-[40%]"
								key={index}
								src={marca.src}
								alt={marca.alt}
							/>
						))}
					</div>
				</div>
			</div>

			<div>
				<div
					data-aos-duration="500"
					data-aos="zoom-in"
					className="  w-[100%] lg:h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white mt-0 px-8 lg:px-0">
					<div className="mt-0 shadow-md shadow-[#222020] ">
						<img
							src={bigMarco}
							alt=""
							className="w-[100vw] h-[128vh] lg:h-[119vh] absolute right-[2rem]  lg:right-[0rem] cover"
						/>
					</div>

					<div className="flex flex-col items-center">
						<div>
							{isMobile ? (
								<img
									src={serviceImg2Mobile}
									alt=""
									className="absolute cover w-[95.2vw] h-[125vh]  top-[.6rem]  right-[2.5rem] "
								/>
							) : (
								<img
									src={serviceImg2}
									alt=""
									className="absolute cover w-[95.2vw] h-[153vh] lg:h-[110vh] top-[.6rem] lg:top-[2.4rem] right-[2.5rem] lg:right-[2.4rem]"
								/>
							)}
						</div>

						<div className="relative mt-8 lg:mt-20 flex flex-col items-center justify-center gap-[1rem]">
							<div className="lg:p-4 p-0 lg:px-12 w-[100vw]">
								<h2
									data-aos-delay="500"
									data-aos-duration="500"
									data-aos="fade-right"
									className=" w-[24rem]  lg:w-[auto] text-[2rem] lg:text-[4rem] tracking-wider leading-[2.5rem] lg:leading-[3.7rem] mb-[2rem] ">
									¡Nuestra gran experiencia nos avala!
								</h2>
								<h2
									data-aos-delay="500"
									data-aos-duration="500"
									data-aos="fade-right"
									className="text-[1.7rem] tracking-wider lg:mt-8 leading-[2rem] lg:leading-[3.7rem] ">
									Contamos con personal altamente capacitado en cada área.
								</h2>
							</div>
							<div className="lg:mt-16 flex flex-col justify-center gap-[1rem]">
								<div
									data-aos-delay="600"
									data-aos-duration="500"
									data-aos="zoom-out-up"
									className="  flex items-center gap-[20px] mt-4 lg:mt-auto my-2">
									<FaUser className="relative left-[2rem] bottom-[1rem] lg:static text-[6rem] lg:text-[3rem] self-start" />
									<div className=" flex flex-col">
										<h3 className="text-[2rem] leading-[2.3rem] relative lg:static right-[1rem]">
											Asesoramiento Personalizado
										</h3>
										<p className=" mt-[15px] lg:mt-[10px] relative lg:static right-[1.5rem]  text-xl ">
											Te asesoramos sin cargo sobre todo tipo de proyecto que tengas en
											mente para tomar la mejor decisión.
										</p>
									</div>
								</div>

								<div
									data-aos-delay="600"
									data-aos-duration="500"
									data-aos="zoom-out-up"
									className="flex items-start gap-[20px] my-2">
									<FaTools className=" text-[6rem] lg:text-[3rem]  relative lg:static left-[1.6rem] top-3 " />
									<div className="flex flex-col">
										<h3 className="text-[2rem] p-4 lg:p-auto relative lg:static right-4">
											Carpinteros Profesionales
										</h3>
										<p className=" mt-[5px] lg:mt-[0px] text-xl relative lg:static right-[1.5rem]">
											Nuestro equipo está capacitado para lograr en excelencia cualquier
											trabajo propuesto por el cliente.
										</p>
									</div>
								</div>
								<div
									data-aos-delay="600"
									data-aos-duration="500"
									data-aos="zoom-out-up"
									className="flex items-start gap-[20px] my-2">
									<FaBox className=" text-[7rem] lg:text-[3rem]   relative left-[2rem] bottom-4 lg:bottom-0 " />
									<div className="flex flex-col ">
										<h3 className="text-[2rem] px-12 lg-p-auto leading-11 lg:leading-normal relative lg:static right-4 ">
											Materiales Premium
										</h3>
										<p className="mt-[10px] text-xl  lg:w-[50vw] relative lg:static right-4">
											Todos nuestros productos son los mejores materiales del sector,
											garantizando un acabado brillante de excelente calidad y alta
											durabilidad.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			<div>
				<div
					id="preciosPrev"
					className="mt-[10rem] w-[92vw] py-4  px-8 bg-[#dad2cb] text-black flex flex-col items-start gap-8">
					<h2 className=" self-center text-4xl">Precios</h2>
					<div className=" flex flex-col items-start w-[100%]">
						<ul className=" text-left flex flex-col gap-8 w-[100%]">
							{precios.map((precio, key) => (
								<li
									key={key}
									className="flex justify-between items-center">
									<div className="flex flex-col max-w-[40vw]">
										<p className="text-xl font-semibold ">{precio.producto}</p>
										<p>{precio.productoDesc}</p>
									</div>
									{precio.producto.length > 40 ? (
										<span className=" w-[36rem] h-[0.1px] border-[1px] border-[#70604ee1]"></span>
									) : (
										<span className=" w-[50rem] h-[0.1px] border-[1px] border-[#70604ee1]"></span>
									)}
									<div className="flex  ">
										{precio.precio === 'consultar' ? (
											<p className="text-xl font-semibold max-h-[1.7rem] bg-[#97938a] px-2">
												{precio.precio}
											</p>
										) : (
											<p className="rounded-sm text-xl font-medium max-h-[1.7rem] bg-[#ad8e56] px-4">
												{precio.precio}
											</p>
										)}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* contacto */}
			<div
				id="contactoPrev"
				className="bg-gray-100 w-[92vw] mt-[1rem]">
				<Form />
			</div>

			<div className="w-full">
				<Footer />
			</div>
		</main>
	);
};

export default Home;
