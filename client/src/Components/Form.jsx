import { useState, useRef } from 'react';

export default function Form() {
	const form = useRef();

	const [userData, setUserData] = useState({
		user_name: '',
		user_email: '',
		user_localidad: '',
		message: '',
		user_phone: '',
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const sendEmail = () => {
		event.preventDefault();

		const phoneNumber = '+5491134312882'; // Número de teléfono al que se enviará el mensaje
		const message = `¡Hola! Me gustaría obtener más información.
	- Nombre: *${userData.user_name}*
	- Email: ${userData.user_email}
	- Teléfono: ${userData.user_phone}
	- Localidad: *${userData.user_localidad}*
	- Mensaje: *${userData.message}*`;

		const encodedMessage = encodeURIComponent(message);
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

		// Redirigir al enlace de WhatsApp
		window.location.href = whatsappLink;
	};

	const buttonClass =
		userData.user_email.length < 1 ||
		userData.user_name.length < 1 ||
		userData.user_phone.length < 1 ||
		userData.user_localidad.length < 1 ||
		userData.message.length < 1
			? 'opacity-50 cursor-not-allowed'
			: '';

	return (
		<>
			<div
				className=" flex flex-col justify-center items-center gap-4 pt-[70px] pb-[60px] px-[40px] "
				>
				<div className="flex flex-col items-center justify-evenly">
					<h4 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-600 self-start lg:pt-6">
						CONTACTANOS
					</h4>
				</div>

				<div className="flex">
					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col">
						<div className="flex gap-[2rem] w-[95vw] lg:w-[60vw] ">
							<div className="mb-4 w-[50%] ">
								<label
									htmlFor="user_name"
									className="block text-gray-800 font-bold mb-2">
									Nombre
								</label>
								<input
									className="lg:text-lg lg:h-[3.5rem] bg-white shadow appearance-none border rounded w-[100%] lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-red-200 hover:border-[1px] focus:border-red-300 focus:border-[1px]"
									name="user_name"
									id="user_name"
									type="text"
									value={userData.user_name}
									onChange={handleChange}
									placeholder="Ingrese su nombre"
									required
								/>
							</div>
							<div className="mb-4 w-[50%]">
								<label
									htmlFor="user_email"
									className="block text-gray-700 font-bold mb-2">
									Email
								</label>
								<input
									className=" lg:text-lg lg:h-[3.5rem] w-[100%] bg-white hover:border-red-200 hover:border-[1px] focus:border-red-300 focus:border-[1px] shadow appearance-none border rounded lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									name="user_email"
									id="user_email"
									type="email"
									value={userData.user_email}
									onChange={handleChange}
									placeholder="Ingrese su Email"
									required
								/>
							</div>
						</div>

						<div className="mb-4">
							<label
								htmlFor="user_phone"
								className="block text-gray-700 font-bold mb-2">
								Teléfono
							</label>
							<input
								className="lg:text-lg lg:h-[3.5rem] bg-white hover:border-red-200 hover:border-[1px] focus:border-red-300 focus:border-[1px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   "
								name="user_phone"
								type="tel"
								placeholder="Ingrese su teléfono"
								required
								value={userData.user_phone}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="user_localidad"
								className="block text-gray-700 font-bold mb-2">
								Localidad
							</label>
							<input
								className="lg:text-lg lg:h-[3.5rem] bg-white hover:border-red-200 hover:border-[1px] focus:border-red-300 focus:border-[1px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="user_localidad"
								id="localidad"
								type="text"
								value={userData.user_localidad}
								onChange={handleChange}
								placeholder="Ingrese su localidad"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="mensaje"
								className="block text-gray-700 font-bold mb-2">
								Mensaje
							</label>
							<textarea
								className="lg:text-lg h-[8rem] bg-white hover:border-red-200 hover:border-[1px] focus:border-red-300 focus:border-[1px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="message"
								id="message"
								type="text"
								value={userData.message}
								onChange={handleChange}
								placeholder="Ingrese su presupuesto deseado"
							/>
						</div>

						<button
							value="COTICE AHORA"
							type="submit"
							className={` disabled:opacity-[0.5] `}
							disabled={
								userData.user_email.length < 1 ||
								userData.user_name.length < 1 ||
								userData.user_phone.length < 1 ||
								userData.user_localidad.length < 1 ||
								userData.message.length < 1
							}>
							<h4 className="bg-red-600 lg:max-w-[60vw] h-[2rem] text-xl flex items-center justify-center">
								Enviar
							</h4>
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
