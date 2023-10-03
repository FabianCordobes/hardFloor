// Importamos los módulos necesarios.
const { db } = require('./models');
const router = require('./routes');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Creamos una instancia de Express para nuestro servidor.
const server = express();

// Configuración del servidor.
server.use(express.urlencoded({ extended: true, limit: '50mb' })); // Permite el análisis de solicitudes con datos codificados en URL.
server.use(express.json({ limit: '50mb' })); // Permite el análisis de solicitudes con datos JSON.
server.use(cookieParser()); // Parsea las cookies en las solicitudes.
server.use(morgan('dev')); // Configura el registro de solicitudes en el modo "dev".

// Configuración de encabezados para permitir solicitudes cruzadas (CORS).
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true'); // Permite credenciales en solicitudes.
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	); // Define los encabezados permitidos.
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // Define los métodos HTTP permitidos.
	next();
});

// Habilitamos el middleware CORS para permitir solicitudes desde diferentes dominios.
server.use(cors());

// Usamos el enrutador definido en 'router' para manejar las rutas de la aplicación.
server.use('/', router); // Agrega "/api" como prefijo para las rutas

// Exportamos la instancia de Express configurada como nuestro servidor.
module.exports = server;
