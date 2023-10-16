import { Parallax } from 'swiper/modules';
import serviceImg from '../assets/servicios_bg.webp';

const ParallaxComp = () => {
	return (
		<div className="mt-4 shadow-md shadow-[#222020] ">
			<Parallax
				bgImage={serviceImg}
				strength={700}>
				<div className="  w-[100vw] h-[30vh] p-12 rounded-2xl flex justify-center items-center">
					<h1
						className=" text-white text-6xl tracking-widest font-medium"
						>
						Nuestros Servicios
					</h1>
				</div>
			</Parallax>
		</div>
	);
};

export default ParallaxComp;
