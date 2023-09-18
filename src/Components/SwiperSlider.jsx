import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import pisosImages from '../Utils/pisosData';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
// import { Link } from 'react-router-dom';

function SwiperSlider({ productImages }) {
	return (
		<div className="container mt-4 w-[24rem] ">
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				}}
				scrollbar={{ draggable: true }}>
				{productImages.map((image, index) => (
					<SwiperSlide key={index}>
						<div
							key={index}
							className=" relative lg:static left-[1rem] w-[22rem] lg:w-[24rem] border-amber-900 border-2 ">
							<Zoom>
								<img
									data-aos-duration="500"
									data-aos="zoom-in-up"
									src={image.src}
									alt={image.alt}
									className=" cover w-[24rem] lg:w-[24rem] h-[21rem]"
								/>
							</Zoom>
						</div>
					</SwiperSlide>
				))}

				<div className="slider-controler transition-all duration-300">
					<div className="swiper-button-prev slider-arrow arrow left text-red-500 ">
						<ion-icon name="arrow-back-outline ">
							<FaArrowLeft className=" text-red-500" />
						</ion-icon>
					</div>
					<div className="swiper-button-next slider-arrow arrow right text-red-500">
						<ion-icon name="arrow-forward-outline">
							<FaArrowRight className="text-red-500" />
						</ion-icon>
					</div>
				</div>
			</Swiper>
		</div>
	);
}

export default SwiperSlider;
