import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { Parallax } from 'react-parallax';
import parallaxBg from '../assets/image.webp';
import { useState } from 'react';

const PrevNosotros = () => {
	const [mostrarMas, setMostrarMas] = useState(false);

	const toggleMostrarMas = () => {
		setMostrarMas(!mostrarMas);
	};

	return (
		<div>
			<div
				id="nosotrosPrev"
				className=" text-black flex flex-col items-center">
				<div className="relative bottom-[1.5rem] shadow-md shadow-[#222020]">
					<Parallax
						bgImage={parallaxBg}
						strength={500}>
						<div className="  w-[100vw] h-[30vh] p-12 rounded-2xl flex justify-center items-center">
							<h1
								data-aos-duration="500"
								data-aos="zoom-in-left"
								className=" text-white text-6xl tracking-widest font-medium"
								style={{ fontFamily: 'Rajdhani' }}>
								Bienvenidos a Hard Floor
							</h1>
						</div>
					</Parallax>
				</div>

				<div className=" bg-gray-100 border-amber-900 border-[1px] w-[90vw] p-4  rounded-lg rounded-b-2rem flex flex-col items-center justify-center overflow-hidden pb-2 ">
					<p
						className=" px-16 py-4 mt-4 text-justify text-xl w-[80vw] leading-[2rem]"
						data-aos="zoom-out-up"
						data-aos-duration="500">
						Donde la tradición y la innovación convergen para crear espacios excepcionales
						con la calidez y la belleza de la madera. Somos más que una empresa; somos una
						familia que ha forjado un legado de excelencia durante tres generaciones, con
						una rica historia que abarca 50 años de experiencia en la industria de la
						venta, colocación y restauración de pisos de madera, pulido, plastificado e
						hidrolaqueado, decks, pérgolas, escaleras, muebles, revestimientos y mucho
						más!
					</p>

					<div className={`content ${mostrarMas ? 'show' : 'hide'}`}>
						<p
							data-aos="zoom-out-up"
							data-aos-duration="500"
							className=" px-16 py-4 text-justify text-xl w-[80vw] leading-[2rem]">
							Nuestra pasión por la artesanía y la atención al detalle nos ha permitido
							sobresalir en un mercado en constante evolución, cada proyecto que
							emprendemos lleva consigo la dedicación y el conocimiento acumulado a lo
							largo de los años. Desde la meticulosa selección de la madera hasta el
							último trazo de pulido, nuestra experiencia se refleja en cada uno de
							nuestros trabajos, estableciendo un estándar que supera expectativas y
							enriquece hogares y espacios.
						</p>
						<p
							data-aos="zoom-out-up"
							data-aos-duration="500"
							className=" px-16 py-4 text-justify text-xl w-[80vw] leading-[2rem]">
							Nos enorgullecemos de contar con las últimas tecnologías en el campo,
							incluyendo máquinas pulidoras italianas con sistemas de aspiración
							independientes que garantizan un ambiente limpio y saludable. Utilizamos
							materiales de primera calidad, porque creemos que solo con los mejores
							ingredientes se puede lograr una obra maestra duradera. Nuestro compromiso
							no solo es con el presente, sino con el legado que dejaremos atrás para las
							generaciones venideras.
						</p>
						<p
							data-aos="zoom-out-up"
							data-aos-duration="500"
							className=" px-16 py-4 text-justify text-xl w-[80vw] leading-[2rem]">
							Con la combinación de tradición y tecnología de vanguardia, nos esforzamos
							por transformar tus espacios en lugares donde la belleza y la funcionalidad
							convergen de manera armoniosa.
						</p>
						<p
							data-aos="zoom-out-up"
							data-aos-duration="500"
							className=" px-16 py-4 text-justify text-xl w-[80vw] leading-[2rem]">
							Te invitamos a ser parte de nuestra historia, a experimentar la diferencia
							que solo una empresa con 50 años de experiencia y tres generaciones de
							dedicación puede brindarte
						</p>
					</div>
					{mostrarMas ? (
						<div>
							<div className=" w-full mt-8 mb-4 flex items-center justify-center">
								<a
									href="#_"
									className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-transparent shadow rounded-md group">
									<span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-red-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
									<span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
									<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-red-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
									<span className="relative text-red-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
										Contactanos
									</span>
								</a>
							</div>

							<button
								className="flex flex-col items-center p-4 rounded-md "
								onClick={toggleMostrarMas}>
								<p className="">Mostrar menos</p>
								<MdKeyboardDoubleArrowUp className="arrow up" />
							</button>
						</div>
					) : (
						<div>
							<button
								onClick={toggleMostrarMas}
								className="flex flex-col items-center p-4 rounded-md">
								<p>¡CONOCENOS!</p>
								<MdKeyboardDoubleArrowDown className="arrow down" />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PrevNosotros;
