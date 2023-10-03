const server = require('./app');
const { db } = require('./models');
const {priceController} = require('./controllers/'); // Importa el controlador de precios correctamente

// Sincronizamos la base de datos con la opción 'force: true' que reemplaza las tablas existentes.
db.sync({ force: false }).then(() => {
	// Llamamos al método 'getAllPrices' del controlador de precios.
	priceController.getAllPrices().then(() => {
		// Iniciamos el servidor en el puerto 3001 y mostramos un mensaje cuando esté listo.
		server.listen(3001, () => {
			console.log('Servidor escuchando en el puerto 3001'); // Corregido el mensaje de consola
		});
	});
});
