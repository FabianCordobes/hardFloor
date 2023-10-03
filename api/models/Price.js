// models/Price.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define('Price', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
