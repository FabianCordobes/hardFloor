// Importamos los módulos necesarios.
const { Sequelize } = require('sequelize');
const price = require('./Price');

const DB_USER = 'postgres';
const DB_HOST = 'localhost';
const DB_PASSWORD = '12345';

// Creamos una instancia de Sequelize para gestionar la base de datos.
const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/hardfloordb`,
	{
		logging: false, // Evita que se muestren las consultas SQL en la consola
		native: false, // No utiliza pg-native para obtener un aumento de velocidad
	}
);

// Importamos los modelos y los inicializamos con la instancia de Sequelize.
const Price = price(sequelize);

// Definimos las relaciones entre los modelos Dog y Temperament.

// Exportamos la instancia de Sequelize, junto con los modelos Dog y Temperament.
module.exports = {
	db: sequelize,
  Price
};
