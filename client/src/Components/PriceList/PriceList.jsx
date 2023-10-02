import { useEffect, useState } from 'react';
import precios from '../../Utils/precios';
import Footer from '../Footer/Footer'

function PriceList() {
	return (
		<div className="bg-amber-200 w-[100vw] h-[100vh] flex flex-col items-center">
			<div className="mt-[8rem] w-[90vw]  p-4 bg-amber-400 text-black flex flex-col items-start gap-8">
				<h2 className=" self-center text-4xl">Precios</h2>
				<div className=" flex flex-col items-start w-[100%]">
					<ul className=" text-left flex flex-col gap-4 w-[100%]">
						{precios.map((precio, key) => (
							<li
								key={key}
								className="flex justify-between">
								<p className="text-xl font-semibold ">{precio.producto}</p>
								<span className="  w-[40rem] h-[1px] border-2 border-black"></span>
								<div className="flex">
									<p className="text-xl">{precio.precio}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default PriceList;
