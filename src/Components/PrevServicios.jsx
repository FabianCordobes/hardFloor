
import SwiperSlider from '../Components/SwiperSlider';

const PrevServicios = () => {
	return (
      
		<div className="flex flex-col justify-center items-center">
		

			<div className="bg-gray-100 p-4 rounded-lg rounded-b-2rem text-black w-[90vw] mt-4 flex flex-col items-center">
				<h2 className="text-6xl mb-4">Pisos de madera</h2>
				<ul className="flex justify-between w-[80vw] px-4 text-xl">
					<li>Venta y colocación</li>
					<li>Restauración</li>
					<li>Parquet / Pisos con diseños </li>
					<li>Pulido </li>
					<li>Hidrolaqueado</li>
					<li>Plastificado</li>
				</ul>
			</div>

			{/* slider */}
			<SwiperSlider />
		</div>
	);
};

export default PrevServicios;
