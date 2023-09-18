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

const Home = () => {
	return (
		<div className="flex flex-col h-[400vh]">
			{/* Imagen principal */}
			<ImagenPrincipal />

			{/* Prev. Nosotros */}
			<PrevNosotros />

			{/* Prev. Servicios */}
			<div
				id="serviciosPrev"
				className="flex flex-col justify-center items-center"
				style={{ fontFamily: 'Rajdhani' }}>
				<div className="mt-4 shadow-md shadow-[#222020] ">
					<Parallax
						bgImage={serviceImg}
						strength={700}>
						<div className="  w-[100vw] h-[30vh] p-12 rounded-2xl flex justify-center items-center">
							<h1
								data-aos-duration="500"
								data-aos="zoom-in-left"
								className=" text-white text-6xl tracking-widest font-medium"
								style={{ fontFamily: 'Rajdhani' }}>
								Nuestros Servicios
							</h1>
						</div>
					</Parallax>
				</div>

				<div className="grid grid-cols-3 w-[100vw] px-[4.5	rem] bg-gray-100 mt-4 ">
					{/* Pisos de madera */}
					<div className="bg-gray-100 mx-4 mt-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px]  transition-all duration-200">
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-12 flex flex-col items-center">
							<h2 className="text-[2.25rem] font-light mb-4">Pisos de madera</h2>
							<div className="flex items-center">
								<ul className="flex flex-col justify-center gap-[0.5rem] w-[15vw] text-md">
									<li>Venta y colocación</li>
									<li>Restauración</li>
									<li>Parquet / Pisos con diseños </li>
								</ul>
								<ul className="flex flex-col justify-center gap-[0.5rem] w-[10vw] text-md">
									<li>Pulido </li>
									<li>Hidrolaqueado</li>
									<li>Plastificado</li>
								</ul>
							</div>
						</div>
						{/* slider */}
					</div>

					{/* Escaleras de madera */}
					<div className="bg-gray-100 mx-4 mt-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200">
						<SwiperSlider productImages={escalerasImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Escaleras de madera</h2>
						</div>
						{/* slider */}
					</div>

					{/* Revestimientos */}
					<div className="bg-gray-100 mx-4 mt-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200 ">
						<SwiperSlider productImages={revestimientosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Revestimientos</h2>
						</div>
						{/* slider */}
					</div>

					{/* Decks */}
					<div className="bg-gray-100 mx-4 mt-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200">
						<SwiperSlider productImages={decksImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Decks</h2>
						</div>
						{/* slider */}
					</div>

					{/* Pergolas */}
					<div className="bg-gray-100 mx-4 mt-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200">
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Pergolas</h2>
						</div>
						{/* slider */}
					</div>

					{/* Muebles */}
					<div className="bg-gray-100 mx-4 mt-4  flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200">
						<SwiperSlider productImages={mueblesImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Muebles</h2>
						</div>
						{/* slider */}
					</div>

					{/* Pintura ext/int */}
					<div className="bg-gray-100 m-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200">
						<SwiperSlider productImages={pisosImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Pintura ext/int</h2>
						</div>
						{/* slider */}
					</div>

					{/* Marcas */}
					<div className="bg-gray-100 m-4 flex flex-col items-center hover:border-amber-600 hover:border-[1px] transition-all duration-200">
						<SwiperSlider productImages={marcasImages} />
						<div className=" pb-2 rounded-lg rounded-b-2rem text-black w-[30vw] mt-6 mb-[6rem]  flex flex-col items-center">
							<h2 className="text-4xl mb-4">Marcas</h2>
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
			</div>

			<div>
				<div
					data-aos-duration="500"
					data-aos="zoom-in"
					className="  w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white mt-2 px-8 lg:px-0">
					<div className="mt-4 shadow-md shadow-[#222020] ">
						<img
							src={serviceImg2}
							alt=""
							className="absolute cover w-[100vw] h-[110vh] right-[0.01rem]"
						/>
					</div>

					<div
						className="relative mt-10 flex flex-col items-center justify-center gap-[1rem]"
						style={{ fontFamily: 'Rajdhani' }}>
						<div className="p-4 px-12 w-[100vw]">
							<h2
								data-aos-delay="500"
								data-aos-duration="500"
								data-aos="fade-right"
								className="text-[4rem] tracking-wider leading-[3.7rem] mb-[2rem] ">
								¡Nuestra gran experiencia nos avala!
							</h2>
							<h2
								data-aos-delay="500"
								data-aos-duration="500"
								data-aos="fade-right"
								className="text-[2rem] tracking-wider leading-[3.7rem] ">
								Contamos con personal altamente capacitado en cada área.
							</h2>
						</div>
						<div
							data-aos-delay="600"
							data-aos-duration="500"
							data-aos="zoom-out-up"
							className=" flex items-start gap-[20px] my-4">
							<FaUser className=" text-[3rem] self-start" />
							<div className=" flex flex-col">
								<h3 className="text-[2rem]">Asesoramiento Personalizado</h3>
								<p className=" mt-[10px] text-lg">
									Te asesoramos sin cargo sobre todo tipo de proyecto que tengas en mente
									para tomar la mejor decisión.
								</p>
							</div>
						</div>
						<div
							data-aos-delay="600"
							data-aos-duration="500"
							data-aos="zoom-out-up"
							className="flex items-start gap-[20px] my-4">
							<FaTools className="text-[3rem] " />
							<div className="flex flex-col">
								<h3 className="text-[2rem]">Carpinteros Profesionales</h3>
								<p className=" mt-[10px] text-lg">
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
							<FaBox className="text-[3rem]   relative left-[2rem]" />
							<div className="flex flex-col">
								<h3 className="text-[2rem]">Materiales Premium</h3>
								<p className="mt-[10px] text-lg w-[50vw]">
									Todos nuestros productos son los mejores materiales del sector,
									garantizando un acabado brillante de excelente calidad y alta
									durabilidad.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* contacto */}
			<div
				id="contactoPrev"
				className="bg-gray-100 mt-8">
				<Form />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
