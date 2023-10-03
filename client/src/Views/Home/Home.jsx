import ImagenPrincipal from '../../Components/ImagenPrincipal';
import PrevNosotros from '../../Components/PrevNosotros';
import { Parallax } from 'react-parallax';
import serviceImg from '../../assets/servicios_bg.webp';
import SwiperSlider from '../../Components/SwiperSlider';
import serviceImg2 from '../../assets/serviceImg2.webp';
import { FaBox, FaTools, FaUser } from 'react-icons/fa';
import Form from '../../Components/Form';
import Footer from '../../Components/Footer/Footer';

import pisosImages from '../../Utils/pisosData';
import decksImages from '../../Utils/decksData';
import marcasImages from '../../Utils/marcasData';
import mueblesImages from '../../Utils/mueblesData';
import escalerasImages from '../../Utils/escaleraData';
import revestimientosImages from '../../Utils/revestimientosData';
import marcoImg from '../../assets/marco.png';
import bigMarco from '../../assets/big_marco.png';

import maderas1 from '../../assets/tiposdeMadera/maderas_01.jpg';
import maderas2 from '../../assets/tiposdeMadera/maderas_02.jpg';
import maderas3 from '../../assets/tiposdeMadera/maderas_03.jpg';
import maderas4 from '../../assets/tiposdeMadera/maderas_04.jpg';
import maderas5 from '../../assets/tiposdeMadera/maderas_05.jpg';
import maderas6 from '../../assets/tiposdeMadera/maderas_06.jpg';
import maderas7 from '../../assets/tiposdeMadera/maderas_07.jpg';
import maderas8 from '../../assets/tiposdeMadera/maderas_08.jpg';
import maderas9 from '../../assets/tiposdeMadera/maderas_09.jpg';
import maderas10 from '../../assets/tiposdeMadera/maderas_10.jpg';
import precios from '../../Utils/precios';

const Home = () => {
	return (
		<div className="flex flex-col items-center ">
			{/* Imagen principal */}
			<ImagenPrincipal />

			{/* Prev. Nosotros */}
			<PrevNosotros />

			{/* Prev. Servicios */}
			<div
				id="serviciosPrev"
				className="flex flex-col justify-center items-center"
				style={{ fontFamily: 'Rajdhani' }}>
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
							<div className=" lg:relative bottom-[2rem]  w-[95vw] h-[20vh] lg:h-[30vh] p-12 flex justify-center items-center flex-col lg:gap-8">
								<h1
									data-aos-duration="500"
									data-aos="zoom-in-left"
									className=" text-white text-3xl lg:text-6xl tracking-widest font-medium"
									style={{ fontFamily: 'Rajdhani' }}>
									Nuestros Servicios
								</h1>
								<div className="flex items-center justify-around gap-4 lg:gap-4 lg:w-[85vw]">
									<ul className="flex  justify-between lg:gap-[0rem] lg:w-[45vw] lg:text-2xl">
										<li>Venta y colocación</li>
										<li>Restauración</li>
										<li>Parquet / Pisos con diseños </li>
									</ul>
									<ul className="flex  justify-between lg:gap-[0rem] lg:w-[30vw] lg:text-2xl">
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
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem] lg:ml-[0.9rem] lg:mx-4 mt-6 lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-[2.25rem] font-light mb-4">Pisos de madera</h2>
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
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Escaleras</h2>

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
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Revestimientos</h2>
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
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Decks</h2>
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
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Pergolas</h2>
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
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Muebles</h2>
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
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Pintura ext/int</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Marcas */}
					<div className=" w-[23rem] lg:w-[22rem] bg-[#5E2217] ml-[0.6rem]   lg:ml-[1rem] lg:mx-4 mt-4 lg:mt-0 flex flex-col items-center ">
						<SwiperSlider productImages={marcasImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-white lg:w-[30vw] mt-2 lg:mt-4 mb-6 lg:mb-12 flex flex-col items-start justify-between gap-8 ml-[7.5rem]">
							<h2 className="text-4xl mb-4">Marcas</h2>
							<a href="#contactoPrev">
								<button className="  text-white px-4 py-2 text-lg bg-[#dca946] font-light tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-[#9e623a] transition-all duration-400 ">
									CONSULTAR
								</button>
							</a>
						</div>
						{/* slider */}
					</div>

					{/* Precios */}
					{/* <div className="bg-gray-100  m-4 flex flex-col items-center hover:border-red-300 hover:border-[1px] transition-all duration-200">
						<SwiperSlider />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Precios</h2>
						</div>
					</div> */}
				</div>

				<div className="w-[99vw] h-[40vh] bg-amber-800 mb-0 flex items-center justify-center gap-[3rem] ">
					<h2 className="ml-4 text-xl">Descubrí nuestros tipos de madera disponible</h2>
					<div className=" grid grid-cols-5 w-[70%]">
						<img
							src={maderas1}
							alt=""
						/>
						<img
							src={maderas2}
							alt=""
						/>
						<img
							src={maderas3}
							alt=""
						/>
						<img
							src={maderas4}
							alt=""
						/>
						<img
							src={maderas5}
							alt=""
						/>
						<img
							src={maderas6}
							alt=""
						/>
						<img
							src={maderas7}
							alt=""
						/>
						<img
							src={maderas8}
							alt=""
						/>
						<img
							src={maderas9}
							alt=""
						/>
						<img
							src={maderas10}
							alt=""
						/>
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
							className="w-[100vw] absolute right-[0rem]"
						/>
					</div>

					<div className="flex flex-col items-center">
						<div>
							<img
								src={serviceImg2}
								alt=""
								className="absolute cover w-[95.2vw] h-[108vh] top-[2.4rem] right-[2rem] lg:right-[2.4rem]"
							/>
						</div>

						<div
							className="relative mt-20 flex flex-col items-center justify-center gap-[1rem]"
							style={{ fontFamily: 'Rajdhani' }}>
							<div className="lg:p-4 p-0 lg:px-12 w-[100vw]">
								<h2
									data-aos-delay="500"
									data-aos-duration="500"
									data-aos="fade-right"
									className=" w-[25rem] lg:w-[auto] text-[2.3rem] lg:text-[4rem] tracking-wider leading-[2.5rem] lg:leading-[3.7rem] mb-[2rem] ">
									¡Nuestra gran experiencia nos avala!
								</h2>
								<h2
									data-aos-delay="500"
									data-aos-duration="500"
									data-aos="fade-right"
									className="text-[2rem] tracking-wider lg:mt-8 leading-[2.5rem] lg:leading-[3.7rem] ">
									Contamos con personal altamente capacitado en cada área.
								</h2>
							</div>
							<div className="lg:mt-16 flex flex-col justify-center gap-[1rem]">
								<div
									data-aos-delay="600"
									data-aos-duration="500"
									data-aos="zoom-out-up"
									className="  flex items-center gap-[20px] mt-12 lg:mt-auto my-4">
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
									className="flex items-start gap-[20px] my-4">
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
									className="flex items-start gap-[20px] my-4">
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
					className="mt-[8rem] w-[92vw] py-4  px-8 bg-[#dad2cb] text-black flex flex-col items-start gap-8">
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
		</div>
	);
};

export default Home;
